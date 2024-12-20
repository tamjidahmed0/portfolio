import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const getResumeDetails = async () => {

    const query = defineQuery(`*[_type == "resume"][0]`)

    try {
        const profile = await sanityFetch({
            query: query,
        })
        return profile.data
    } catch (error) {
        console.log('error fetching data')
    }



}