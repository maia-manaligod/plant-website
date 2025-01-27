import './components.css';

export default function PlantCard({plant}){
    return (
        <div className = "card col" style = {{width: "275px"}}>
            
            <div style = {{display: "flex", justifyContent: "center"}}>
                <img src = {plant.default_image.thumbnail} className = "thumbnail-image"></img>
            </div>
            
            <div>
                <p style = {{fontWeight: "bold"}}>{plant.common_name}</p>
                <p >$ 360</p>
            </div>
               
            <a href = {`/products/${plant.id}`}>
                <button className = "main-button" style = {{width: "100%"}}>
                    <p>Buy</p>
                </button>
            </a>
          
           
        </div>
    )
}