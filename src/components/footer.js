import './components.css';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

export default function Footer(){
    return (
        <div >
            <div style = {{display: "flex", gap: "20px", padding: "40px"}} className = "bottom-nav">
                <div style = {{display: "flex", gap: "20px"}}>
                    <p>Products</p>
                    <p>Returns</p>
                    <p>FAQ</p>
                    <p>Shipping</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>

              
                <div style = {{display: "flex", gap: "20px"}}>
                    <YouTube />
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    <LinkedIn/>
                </div>
               
                
            </div>

            <div className = "header-footer">
                <p>COPYRIGHT GREEN THUMB. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}