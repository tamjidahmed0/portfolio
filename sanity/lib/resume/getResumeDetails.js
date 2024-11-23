import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const revalidate = 10
export const getResumeDetails = async () => {

    const query = defineQuery(`*[_type == "resume"][0]`)


    try {
        const profile = await sanityFetch({
            query: query
        },{
           cache: 'no-store'
        })
        return profile.data
    } catch (error) {
        console.log('error fetching data')
    }



}