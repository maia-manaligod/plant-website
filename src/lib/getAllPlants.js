"use server"

const api_key = process.env.PERENUAL_API_KEY
console.log("API KEY", api_key)


export async function getAllPlants(){


    try {
        const results = await fetch(`https://perenual.com/api/species-list?key=${api_key}`)
        const data = await results.json()
        return data.data
    }
    catch (error){
        console.log(error)
        return null
    }
   
}