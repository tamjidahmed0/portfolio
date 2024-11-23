import sendMail from "./send-mail";


export async function POST(req) {
   const body = await req.json();
   const { name, email, message } = body;
   if (!name || !email || !message) {
      return Response.json({
         msg: 'All fields are required!',
         status:400
      });
    }

   const mailSend =  sendMail({
      subject: 'New Contact Form Submission',
      name,
      email,
      message
   })

 
   return Response.json(mailSend)
}