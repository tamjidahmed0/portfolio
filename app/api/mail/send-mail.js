
import nodemailerConfig from "./mail-config.js";

const sendMail = ({ email = null, subject = null,body = null , name = null, message= null}) => {
  const mailOptions = {
    from: `Portfolio <${process.env.GMAIL}>`,
    to: `tamjidahmed644@gmail.com`,
    subject: subject,
    text :body,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              background-color: #f9f9f9;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header h1 {
              color: #333333;
              font-size: 24px;
            }
            .content {
              color: #555555;
              font-size: 16px;
            }
            .field {
              font-weight: bold;
              margin-bottom: 10px;
            }
            .value {
              margin-bottom: 15px;
              color: #333333;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #888888;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p><span class="field">Name:</span><br /> ${name}</p>
              <p><span class="field">Email:</span><br /> ${email}</p>
              <p><span class="field">Message:</span><br /> ${message}</p>
            </div>
            <div class="footer">
              <p>This is an automated email. Please do not reply.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };



    // Send mail
    nodemailerConfig.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
 
      }
    });

    return {
        msg:'Message send Successfully'
    }
 
};

export default sendMail;
