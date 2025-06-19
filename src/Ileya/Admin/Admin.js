import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiPhone, FiChevronRight, FiDownload, FiPrinter } from 'react-icons/fi';
import { FaRegClock } from 'react-icons/fa';

function Admin({ FormData, loading }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  
  // Filter data based on search term
  const filteredData = FormData.filter(item => 
    item.Name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.PhoneNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
  
  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Get sort indicator
  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };
  
  // Stats for dashboard
  const stats = {
    total: FormData.length,
    newThisWeek: FormData.filter((_, index) => index < 7).length,
    completed: Math.floor(FormData.length * 0.85),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0e8] to-[#e2d9cf] p-4 md:p-6">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#323232]">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage registration data and track program metrics</p>
        </div>
      </div>
      
      {/* Stats Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Total Registrations</h3>
              <p className="text-2xl font-bold mt-1 text-gray-800">{stats.total}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <FiUser className="text-xl" />
            </div>
          </div>
          <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${Math.min(100, (stats.total / 50) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Registration List Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 md:mb-0">Registration List</h2>
            <div className="flex space-x-3 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search by name or phone..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading State */}
        {!loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-4 text-gray-600">Loading registration data...</p>
            </div>
          </div>
        )}
        
        {/* Empty State */}
        {loading && FormData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <FiUser className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No Registrations Yet</h3>
            <p className="text-gray-500 max-w-md">
              The registration list is currently empty. New registrations will appear here once submitted.
            </p>
          </div>
        )}
        
        {/* Data Table */}
        {loading && FormData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    className="py-3 px-4 text-left text-sm font-medium text-gray-500 cursor-pointer"
                    onClick={() => requestSort('id')}
                  >
                    <div className="flex items-center">
                      ID {getSortIndicator('id')}
                    </div>
                  </th>
                  <th 
                    className="py-3 px-4 text-left text-sm font-medium text-gray-500 cursor-pointer"
                    onClick={() => requestSort('Name')}
                  >
                    <div className="flex items-center">
                      <FiUser className="mr-2 text-gray-400" /> Name {getSortIndicator('Name')}
                    </div>
                  </th>
                  <th 
                    className="py-3 px-4 text-left text-sm font-medium text-gray-500 cursor-pointer"
                    onClick={() => requestSort('PhoneNo')}
                  >
                    <div className="flex items-center">
                      <FiPhone className="mr-2 text-gray-400" /> Phone {getSortIndicator('PhoneNo')}
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Bank</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Status</th>
                  <th className="py-3 px-4 text-right text-sm font-medium text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sortedData.map((info, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-sm text-gray-700 font-medium">#{i+1}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center mr-3">
                          <FiUser className="text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{info.Name}</div>
                          <div className="text-xs text-gray-500 mt-1">{info.Address?.substring(0, 20)}...</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">{info.PhoneNo}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {info.BankName}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        Verified
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link 
                        to={{pathname:`/details/${info.Name}`}} 
                        state={info}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        View <FiChevronRight className="ml-1" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Pagination */}
        {loading && FormData.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{Math.min(10, FormData.length)}</span> of{' '}
                <span className="font-medium">{FormData.length}</span> entries
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">
                  1
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;