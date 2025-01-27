import { useEffect, useState } from "react";
import { CartItem } from "./cartItem"
import CloseIcon from '@mui/icons-material/Close';
import { getItemCount } from "@/lib/editCart";

const data = [
    {
        id: 1, 
        name: "Pothos",
        size: "Small",
        quantity: 1,
        image : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0KjUqeJEhs39Hn1hKxPPedahehgu0t93JWG1Ahvd9rv-_IguawZD5aTqxiL2MsgBDkCn3lsAzINoR8N20dXT3NQ"
    },
    {
        id: 2, 
        name: "Peruvian Cactus",
        size: "small",
        quantity: 1,
        image: "https://www.cactusoutlet.com/cdn/shop/products/CM-Peruvian-Apple-Product-Main-V1.0_1200x.jpg?v=1634200267"
    },
    {
        id : 3,
        name: "Marble Queen",
        size: "medium",
        quantity: 1,
        image: "https://www.michlers.com/cdn/shop/products/Pothos_MarbleQueen.jpg?v=1675868894&width=2048"
    },
    {
        id : 4,
        name: "Marble Queen",
        size: "medium",
        quantity: 1,
        image: "https://www.michlers.com/cdn/shop/products/Pothos_MarbleQueen.jpg?v=1675868894&width=2048"
    }
]


export default function CartSidebar({setShowCart, cart, setCart}){
    let data = cart

      function handleClose () {
       setShowCart(false); 
      };
    

    return (
        <div onClick = {handleClose} className="cart-sidebar-background">
            <div onClick = {(event) => event.stopPropagation()}  className="cart-sidebar" >

                <div className = "cart-sidebar-content">
                    <div className = "cart-header">
                        <h1 style = {{flexGrow: 1,  textAlign: "center"}}>My Cart</h1>
                        <button onClick = {handleClose}><CloseIcon/></button>
                    </div>

                    <div className = "col" style = {{padding: "20px"}}>
                        { cart.length > 0 ? 

                        <div>
                            <div className = "col" style = {{gap: "30px"}}>
                            
                            {data.map(plant => 
                            <CartItem key = {plant.id + plant.size} plant = {plant} cart = {cart} setCart = {setCart} />
                            )}
                            </div>

                            <div style = {{border: ".5px solid grey", marginTop: "20px", marginBottom: "20px"}}></div>

                            <div className = "col">

                                <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <p className = "attribute">Subtotal</p>
                                    <p className = "small-bold">$ {(getItemCount(cart) * 350).toFixed(2)}</p>
                                </div>
                            

                                <button className = "checkout-button">CHECKOUT</button>
                            </div>
                        
                            </div>
                        : 
                        <p>Your cart is currently empty.</p>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )

}