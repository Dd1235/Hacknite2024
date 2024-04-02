var nodeoutlook = require("nodejs-nodemailer-outlook");

async function sendOTP(email, otp) {
  nodeoutlook.sendEmail({
    auth: {
      user: "fruitygoosedeath@outlook.com",
      pass: "Fruitygoose@123",
    },
    from: "fruitygoosedeath@outlook.com",
    to: `${email}`,
    subject: `OTP`,
    text: `Your OTP is ${otp}`,
    replyTo: `${email}`,

    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
}

module.exports = { sendOTP };
