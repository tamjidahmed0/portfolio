import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const getProfileDetails = async () => {

    // const query = defineQuery(`*[_type == "profile"]`)

    const query = `*[_type == "profile"][0]{
        Name,
        Email,
        Phone,
        Stack,
        available,
        Facebook,
        Linkedin,
        Github,
        mainImage {
        alt,
        "imageUrl": asset->url
     },
        Location,
        "pdfUrl": pdfFile.asset->url
      }`;


    try {
        const profile = await sanityFetch({
            query: query,

        }
        )
        return profile.data
    } catch (error) {
        console.log('error fetching data')
    }



}