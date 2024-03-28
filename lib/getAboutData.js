import { client } from "../sanity/lib/client";

const getAboutData = async () =>{

    const result = await client.fetch(`*[_type == 'about']`)
    return result
}

export default getAboutData