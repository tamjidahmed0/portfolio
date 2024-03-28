import { client } from "../sanity/lib/client";

const getAnimatedData = async () =>{

    const result = await client.fetch(`*[_type == 'AnimatedText']`)
    return result
}

export default getAnimatedData