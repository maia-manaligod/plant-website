export function Property({currentProperty, property, setDetails}){
    console.log(currentProperty)
    return (
        <p 
        style = {{textWrap: "no-wrap", cursor: "pointer"}}
        className = {property.name == currentProperty.name ? "selected-property" : ""}
        onClick = {() => setDetails({name: property.name, content: property.content})}>
            {property.name}
        </p>
    )
}