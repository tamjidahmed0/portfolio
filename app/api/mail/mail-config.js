import nodemailer from "nodemailer";


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL,
//       pass: process.env.GMAIL_PASS
//     }
//   })

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use false if your server doesn't use SSL/TLS
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASS,
  },
  tls:{
    rejectUnauthorized:false
  }

});

export default { transporter };
