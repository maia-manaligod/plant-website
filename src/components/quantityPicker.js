
export default function QuantityPicker({quantity, setQuantity}){
    return (
        <div className = "quantity-picker">
            <button className = "quantity-button" disabled = {quantity == 1} onClick = {() => {
                console.log(quantity)
                setQuantity(quantity-=1)
                }}>-</button>
            <div style = {{display: "flex", alignItems: "center"}}>
                <p>{quantity}</p>
            </div>
            <button className = "quantity-button" onClick = {() => setQuantity(quantity+= 1)}>+</button>
        </div>
    )
}