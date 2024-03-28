import { client } from "../sanity/lib/client";

const getHeroData = async () =>{

    const result = await client.fetch(`*[_type == 'Hero']`)
    return result
}

export default getHeroData