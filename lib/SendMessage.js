"use server";

export default async function SendMessage(name, email ,message) {
  
 
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/mail`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
     
      },
    

      body: JSON.stringify({
        name,
        email,
        message
      }),
    },

  );

  return result.json()






}
