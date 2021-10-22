import axios from "axios"
import { writable } from "svelte/store"

export const art = writable(null)

const getArt = async () =>{
    const response = await axios.get('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
    art.set( response.data.data)
} 

getArt();