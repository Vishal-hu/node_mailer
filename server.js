const nodemailer = require("nodemailer");
require("dotenv").config();

//step1
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

//step2
let mailOptions = {
    from: "rajpootvishal21598gmail.com",
    to: "abhaysinghs772@gmail.com",
    subject: "From Nodemailer",
    text: "This is a new mail",
    html: `<h1 style="color:blue">Hey Bro. This is a system generated mail<h1>
    <table style="width:100%" border="2px solid black">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Sunny</td>
    <td>Paji</td>
    <td>22</td>
  </tr>
  <tr>
    <td>Golu</td>
    <td>Paji</td>
    <td>20</td>
  </tr>
</table>
    `,
};

//step3

transporter
    .sendMail(mailOptions)
    .then(function(response) {
        console.log("Mail sent");
    })
    .catch(function(error) {
        console.log(error);
    });