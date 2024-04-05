var nodeoutlook = require("nodejs-nodemailer-outlook");

async function sendOTP(email, otp) {
  nodeoutlook.sendEmail({
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASS}`,
    },
    from: `${process.env.SMTP_USER}`,
    to: `${email}`,
    subject: `OTP`,
    text: `Your OTP is ${otp}`,
    replyTo: `${email}`,

    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
}

module.exports = { sendOTP };
