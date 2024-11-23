import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const revalidate = 10
export const getProjects = async () => {

    const query = defineQuery(`*[_type == "projects"] | order(_createdAt desc)`)


    try {
        const projects = await sanityFetch({
            query: query,
            revalidate: 10,
        })
        return projects.data
    } catch (error) {
        console.log('error fetching data')
    }

}


export const getProjectsBySlug = async (slug) => {

    const query = defineQuery(`*[slug.current == "${slug}"][0]`)


    try {
        const singleProjects = await sanityFetch({
            query: query
        })
        return singleProjects.data
    } catch (error) {
        console.log('error fetching data')
    }



}