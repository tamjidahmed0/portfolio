import { client } from "../sanity/lib/client";

const getMeta = async () =>{

    const result = await client.fetch(`*[_type == 'meta']`)
    return result
}

export default getMeta