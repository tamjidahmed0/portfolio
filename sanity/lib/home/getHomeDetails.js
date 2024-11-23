import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";





export const getHomeDetails = async() =>{

    const query = defineQuery(`*[_type == "home"][0]`)


    try {
        const profile = await sanityFetch({
            query: query,
            revalidate: 10,
        })
        return profile.data 
    } catch (error) {
        console.log('error fetching data')
    }



}