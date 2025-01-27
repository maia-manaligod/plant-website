"use server"

const api_key = process.env.PERENUAL_API_KEY

export default async function getPlant(id){
     try {
        const result = await fetch(`https://perenual.com/api/species/details/${id}?key=${api_key}`)
        const data = await result.json()
        return data
        
     }
     catch (e) {
        console.log(error)
        return null
     }
}