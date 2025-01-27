import './components.css';
import QuantityPicker from "./quantityPicker"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export function CartItem({plant, cart, setCart}){

    function setQuant(quantity){
        let temp = [...cart]
        let item = temp.find((p) => plant.id + plant.size ==  p.id + p.size)

        if (item) {
            temp[temp.indexOf(item)].quantity = quantity
            setCart(temp)
        }
    }

    function removeItem(){
        setCart(cart.filter(p => p.id + p.size != plant.id + plant.size))
    }

    return (<div style = {{display: "flex", gap: "20px", width: "100%"}}>
            <img src = {plant.img} className = "cart-image cart-item-price"/>
            <div className = "col" style = {{justifyContent: "space-between", flexGrow: 1}}>
                
                <div>
                    <a href = {`/products/${plant.id}`}>
                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                        <h3 className = "title-small cart-item-name">{plant.name}</h3>
                        <p className = "title-small cart-item-price">$ 350</p>
                    </div>
                    </a>

                    <div>
                {
                    plant.size == 'S' && <p>Small</p> || 
                    plant.size == 'M' && <p>Medium</p> || 
                    plant.size == 'L' && <p>Large</p>
                    
                }

                </div>
                    
                </div>
                
               
                <div>
                    <p className = "attribute">Quantity</p>
                    <div style = {{display: "flex", justifyContent: "space-between", width: "100%"}}>
                        <QuantityPicker quantity = {plant.quantity} setQuantity = {setQuant} />
                        <button onClick={removeItem}><DeleteOutlineOutlinedIcon/></button>
                    </div>
                </div>
                
                
            </div>
    </div>)
}