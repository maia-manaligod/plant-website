"use client"

import { useState, useEffect } from "react"
import getPlant from "@/lib/getPlant"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Title from "@/components/title"
import { getAllPlants } from "@/lib/getAllPlants"
import PlantCard from "@/components/plantCard"
import { Dropdown } from "@/components/dropdown"
import QuantityPicker from "@/components/quantityPicker"
import {useCart} from "@/lib/editCart"
import { extraDetails, testData } from "@/app/testData"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Property } from "@/components/property"

export default function PlantPage(location){
    const [cart, setCart] = useCart()
    const [plantData, setPlantData] = useState(null)
    const [details, setDetails] = useState(null)
    const [otherPlantData, setOtherPlantData] = useState(null)
    const [orderInfo, setOrderInfo] = useState({
        id: null,
        name: null,
        img: null,
        quantity: 1,
        size: "S"
    })

    function handleSetQuantity (num) {
        setOrderInfo({...orderInfo, quantity: num })
    }
    
    useEffect(() => {
        location.params.then(param => 
            
            getPlant(param.plantID).then(data => {
                setPlantData({...data, ...extraDetails})
                setOrderInfo({...orderInfo, name: data.common_name, id: data.id, img: data.default_image.thumbnail})
                setDetails({name: "Watering", content: extraDetails.Watering})

            }
            ).catch(e => console.log(e))
            
            //for testing
            /*
            {
                let data = testData[param.plantID]
                setPlantData({...testData[param.plantID], ...extraDetails})
                setDetails({name: "Watering", content: extraDetails.Watering})
                setOrderInfo({...orderInfo, name: data.common_name, id: data.id, img: data.default_image.thumbnail})
            }
             */
        )

        setOtherPlantData(testData.slice(0,4))
        console.log(testData.slice(0, 4))

    }, [])

    function addToCart(){
        let temp = [...cart]
        let item = temp.find(p => p.id + p.size == orderInfo.id + orderInfo.size)
        if (item){
            temp[temp.indexOf(item)].quantity += orderInfo.quantity
            setCart(temp)
        } else setCart([...cart, {...orderInfo}])
        //addItem(orderInfo)
    }
    
    return (
        <div>
            { plantData && otherPlantData && 
                
                <>
                <Header cart = {cart} setCart = {setCart}/>
                <Title title = "Plant" description = {plantData.common_name} />

                {/* Page Content */}
                <div>
                     {/* White Panel */}
                     <div className = "page-content col" style = {{paddingTop: "10px", gap: "20px"}}>
                        <a className = "attribute" href = "/products" style = {{fontFamily: "var(--font-poppins)"}}><ChevronLeftIcon/> Back to Search</a>

                        <div style = {{display: "flex", gap: "50px", paddingTop: "50px", paddingBottom: "50px"}}>
                            <div className = "product-image-collection">
                                <img className = "product-image" src = {plantData.default_image.small_url}></img>
                                <img className = "product-image" src = {plantData.default_image.small_url}></img>
                                <img className = "product-image" src = {plantData.default_image.small_url}></img>
                                <img className = "product-image" src = {plantData.default_image.small_url}></img>
                            </div>


                            <div className = "col" style = {{ gap: "40px"}}>
                                {/* Name, description, price*/}
                                <div className = "col" style = {{ gap: "30px"}}>
                                    <div>
                                        <h1>{plantData.common_name}</h1>
                                        <p>$ 350</p>
                                    </div>
                                    <p>{plantData.description}</p>
                                </div>

                                {/* Size */}
                                <div className = "col">
                                    <p style = {{color: "grey"}}>Size</p>
                                    <div style = {{display: "flex", gap: "10px"}}>
                                        <button 
                                            className = {orderInfo.size == "S" ? "size-button selected" : "size-button"}
                                            onClick = {() => {
                                                if (orderInfo.size != "S") setOrderInfo({...orderInfo, size:  'S'});
                                            }}
                                            >S</button>
                                        <button
                                            className = {orderInfo.size == "M" ? "size-button selected" : "size-button"}
                                            onClick = {() => {
                                                if (orderInfo.size != "L") setOrderInfo({...orderInfo, size: 'M'});
                                            }}
                                            >M</button>
                                        <button  
                                            className = {orderInfo.size == "L" ? "size-button selected" : "size-button"}
                                            onClick = {() => {
                                                if (orderInfo.size != "L") setOrderInfo({...orderInfo, size : 'L'});
                                            }}
                                            >L</button>
                                    </div>

                                    {/* Add to Cart, Quantity */}
                                    <div style = {{display: "flex", alignItems: "end", gap: "20px"}}>
                                        <button className = "main-button" style = {{width: "50%", height: "70%"}} onClick = {addToCart}>
                                            ADD TO CART
                                        </button>
                                        <div>
                                        <p className = "attribute">Quantity</p>
                                        <QuantityPicker
                                            quantity = {orderInfo.quantity}
                                            setQuantity={handleSetQuantity}
                                        />
                                        </div>
                                        

                                    </div>
                                    <p className = "attribute">Free standard shipping</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    {/* Green Panel */}
                    <div style = {{backgroundColor: "var(--secondary-green)", display: "flex"}}>
                        {/* Topic */}
                            <div style = {{padding: "50px", paddingLeft: "100px", paddingRight: "20px"}}>
                            <div>
                                <Dropdown width = "200px" open = {true} text = "Plant care">
                                        <Property currentProperty={details} property={{name: "Watering", content: plantData.Watering}} setDetails={setDetails}/>
                                        <Property currentProperty={details} property={{name: "Sunlight", content: plantData.Sunlight}} setDetails={setDetails}/>
                                        <Property currentProperty={details} property={{name: "Soil & Fertilizing", content: plantData.Soil}} setDetails={setDetails}/>
                                        <Property currentProperty={details} property={{name: "Humidity", content: plantData.Humidity}} setDetails={setDetails}/>
                                        <Property currentProperty={details} property={{name: "Toxicity", content: plantData.Toxicity}} setDetails={setDetails}/>
                                        <Property currentProperty={details} property={{name: "Benefits", content: plantData.Benefits}} setDetails={setDetails}/>
                                    </Dropdown>

                                <Dropdown text = "Origin Story">
                                    <Property currentProperty={details} property={{name: "Beginnings", content: plantData.Origin}} setDetails={setDetails}/>
                                </Dropdown>

                                <Dropdown text = "Scientific Data">
                                    <Property currentProperty={details} property={{name: "Data Details", content: plantData.Scientific}} setDetails={setDetails}/>
                                </Dropdown>
                            </div>
                        </div>

                        <div style = {{border: "1px solid black"}}></div>
                       

                        {/* Information */}
                        <div className = "col" style = {{padding: "50px", paddingRight: "100px", gap: "20px"}}>
                            <h1>{details.name}</h1>
                            <p style={{ whiteSpace: "pre-line" }}>{details.content}</p>
                        </div>
                    </div>

                     {/* White Panel */}
                     <div className = "page-content col" style = {{gap: "25px"}}>
                        
                        <div>
                            <h1 style = {{fontWeight: "500"}}><span style = {{color: "var(--plant-green)"}}>You'll love</span> these too...</h1>
                        </div>
                        <div style = {{border: ".5px solid grey"}}></div>
                        <div className = "recommended-plants">
                        {
                            otherPlantData.map(plant => 
                                <PlantCard key = {plant.id} plant = {plant} />
                            )
                        }
                        </div> 
                     </div>
                </div>
                <Footer/>
                </>
            }
        </div>
    )
}