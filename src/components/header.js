import './components.css';
import CartSidebar from './cartSidebar';
import { useState, useEffect } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { getItemCount, getItems } from '@/lib/editCart';

export default function Header({cart, setCart}){

    const [showCart, setShowCart] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => 
        {
            setCount(getItemCount((cart ? cart: getItems())))
        }
    , [cart])
    
    return (
        <div>
            {showCart && <CartSidebar setShowCart = {setShowCart} cart = {cart} setCart = {setCart}/>}
            <div className = "header-footer" >
                <p style = {{flexGrow: 1,  textAlign: "center", fontWeight: "bold"}} >FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25-28.</p>
                <div style = {{display: "flex", gap: "10px"}}>
                    <p>USD</p>
                    <p><strong>Support</strong></p>
                </div>
                
            </div>
            <div className = "nav-bar">
                <h1><span style = {{color: "var(--plant-green)"}}>Green</span> Thumb</h1>
                <div style = {{display: "flex", gap: "60px"}}> 
                    <div className = "nav-bar-items">
                        <p>Home</p>
                        <a href = "/products">Products</a>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>

                    <div style = {{display: "flex", gap: "10px"}}>
                        <div style = {{display: "flex", gap: "20px"}}>
                            <input className = "search" placeholder="Search" type = "text" style = {{marginLeft: "40px"}}/>
                            <button><SearchOutlinedIcon/></button>
                        </div>
                        <div style = {{border: ".5px solid black"}}></div>
                        <div style = {{display: "flex", alignItems: "end", gap: "3px"}}>
                            <button 
                                onClick = {() => setShowCart(true)}
                                style = {{display: "flex", alignItems: "end", gap: "3px"}}
                                >
                                <ShoppingBagOutlinedIcon /> 
                                <p><strong>{count}</strong></p>
                            </button>
                            
                        </div>
                </div>

                </div>
               
               
            </div>

            
            
        </div>
    )
}