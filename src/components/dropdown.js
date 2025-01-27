"use client"

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from "react";

export function Dropdown({text, open, width, children}){
    const [show, setShow] = useState(open? true : false)

    return (
        <div style = {{ width: width, lineHeight: "35px"}}>
            {
                show ? 
                    <div>
                        <p style={{ cursor: "pointer" }} onClick = {() => setShow(false)}><ExpandMoreIcon/> {text}</p>
                        <div style = {{marginLeft: "30px"}}>
                            {children}
                        </div>
                    </div>
                    :
                    <p style = {{cursor: "pointer"}} onClick = {() => setShow(true)}><ChevronRightIcon/> {text}</p>
                   
                    
            }
            
        </div>
    )
}