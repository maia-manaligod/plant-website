import './components.css';


export default function Title({title, description}){
    return (
        <div className = "title">
                <h1 className = "title-text">{title}</h1>
                <div style = {{display: "flex", gap: "20px", alignItems: "end"}}>
                    <div style = {{height: "40px", border: ".5px solid grey"}}></div>
                    <p className = "title-description">{description}</p>
               
            </div>
           
        </div>
    )
}