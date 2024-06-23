import React from "react";
import {Link} from "react-router-dom";


 function Navlinks (props) {

    const Links = [
        {name: "Home",
         link : "/"
        },

        {name: "View Lectures",
         link : "/view"
        },

        {name: "Comments",
        link : "/allcomments" 
         }
        
        
       
       
    ]
    return(
        <>
       
            {
                Links.map((link,i) => (
                    <div key={i}>
                    <li key={i} className={`"font-semibold font-montserat md:hover:border-b-2 hover:border-[#182c25] hover:border-b-2 text-[#182c25]  pb-1 sm:pb-2 text-xs tracking-wide
                     ${props.alternative ? "" :"" }`} onClick={props.handleClick} >
                 <Link to={link.link} onClick={props.handleClick} >{link.name} </Link>
                    </li>
              </div>
                    
                ))
            }
             
        </> 
    )
 }

  export default Navlinks