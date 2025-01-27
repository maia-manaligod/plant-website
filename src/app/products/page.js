"use client"

import Header from "@/components/header";
import Title from "@/components/title";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { getAllPlants } from "@/lib/getAllPlants";
import PlantCard from "@/components/plantCard";
import { Dropdown } from "@/components/dropdown";

import { testData } from "../testData";
import { getItems, useCart } from "@/lib/editCart";
import { ExpandMore } from "@mui/icons-material";

const indoorPlantData = ["Alocasia", "Hoya", "Sanseyuevia", "Syngonium"]

export default function Products(){

    const [plantData, setPlantData] = useState(null)
    const [cart, setCart] = useCart()

    useEffect(() => {
        getAllPlants().then(data => {setPlantData(data); console.log(data)}).catch(error => console.log(error))
    }, [])
    return (
        <>
            <Header cart = {cart} setCart = {setCart}/>
            <Title title = "Shop" description = "Find the perfect plant for your space"/>

            {/* Page Content */}
            <div className = "page-content">

                <div className = "col" style = {{alignItems: "end", justifyContent: "end" , width: "100%", padding: "20px"}}>
                    <div style = {{border: ".5px solid", padding: "8px"}}>
                        <label>Sort By:</label>
                        <select style = {{fontWeight: "bold"}}>
                            <option>Popular</option>
                            <option>Recently added</option>
                        </select>
                    </div>
                    <p>Showing 1003 products</p>
                </div>

                {/* Center Page */}
                <div style = {{display: "flex", gap: "50px", justifyContent: "center"}}>

                    {/* Filters */}
                    <div className = "col" style = {{ gap: "20px"}}>
                        <div className = "card">
                            <Dropdown width = "200px" text = "All Categories">
                                <p>Plants on Sale</p>
                                {/* Dropdowns w/ placeholder information */}
                                <Dropdown text = "Indoor Plants">
                                    {
                                        indoorPlantData.map(plant => <p key = {plant}>{plant}</p>)
                                    }
                                </Dropdown>
                                <Dropdown text = "Outdoor plants">
                                    {
                                        indoorPlantData.map(plant => <p key = {plant}>{plant}</p>)
                                    }
                                </Dropdown>
                                <Dropdown width = "400px" text = "Sun requirements">
                                    {
                                        indoorPlantData.map(plant => <p key = {plant}>{plant}</p>)
                                    }
                                </Dropdown>

                            </Dropdown>
                        </div>

                        <div className = "card" style = {{display: "flex", justifyContent: "space-between"}}>
                            <h3>Price</h3><ExpandMore/>
                        </div>

                        <div className = "card">
                            <div>
                                <label htmlFor = "include">Include</label>
                                <div>
                                    <div></div>
                                    <input type="radio" id="q1a1" name="question1" value="Planter" />
                                    <label htmlFor="q1a1">Planter</label>
                                    <br/>
                                    <input type="radio" id="q1a2" name="question1" value="Flowers" />
                                    <label htmlFor="q1a2">Flowers</label>
                                    <br/>
                                    <input type="radio" id="q1a3" name="question1" value="Care" />
                                    <label htmlFor="q1a3">Care</label>
                                    <br/>
                                    <input type="radio" id="q1a4" name="question1" value="Heat pack" />
                                    <label htmlFor="q1a4">Heat pack</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Plant Content */}
                    <div className = "browse-plant-grid">
                        {plantData &&
                            plantData.slice(0,9).map(plant => {
                                return <PlantCard key = {plant.id} plant = {plant} />
                            })
                        }
                    </div>


                </div>


            </div>



            <Footer/>
        </>
        
    )

}