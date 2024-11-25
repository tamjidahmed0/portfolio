import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const getSeoData = async () => {

    const query = defineQuery(`*[_type == "seo"][0]`)


    try {
        const seoResult = await sanityFetch({
            query: query,
        })
        return seoResult.data
    } catch (error) {
        console.log('error fetching data')
    }

}


