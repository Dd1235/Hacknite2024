const User = require("./user");
const PasswordReset = require("./password");
const bcrypt=require("bcrypt");
const nodemailer=require("nodemailer");
const router=express.Router();


let transporter= nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.Auth_EMAIL,
        pass: process.env.Auth_PASS,
    },
});
       

//pass reset 
router.post("/requestPasswordReset", (req, res) =>{
    const { email, redirectUrl } = req.body;
    User
    .find({ email }) // Using findOne instead of find as we're expecting only one user
    .then(data => {
        if(data.length){

                sendResetEmail(data[0], redirectUrl, res);

        } else {
            res.json({
                status: "FAILED",
                message: "No user found with this email"
            });
        }
    })
    .catch(error =>{
        console.log(error);
        res.json({
            status: "FAILED",
            message: error.message,
        });
    })
})

const sendResetEmail = ({ _id, email }, redirectUrl, res) => {
    const resetstring = generateResetString(); // Function to generate reset string
    const mailOptions ={
        from: process.env.Auth_EMAIL,
        to: email,
        subject: "Reset Password",
        html: `Click <a href="${redirectUrl}/${_id}/${resetstring}">here</a> to reset your password.`
    };
    
    const saltRounds = 10;
    bcrypt
    .hash(resetstring, saltRounds)
    .then(hashedResetString => {
        const newPasswordReset = new PasswordReset({
            userId: _id,
            resetstring: hashedResetString,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000 // 1 hour expiration time
        });
        newPasswordReset
        .save()
        .then(() => {
            transporter
            .sendMail(mailOptions)
            .then(() => {
                res.json({
                    status:"PENDING",
                    message:"EMail sent successfully"
                })
            })
            .catch(error => {
                console.log(error);
                res.json({
                    status: "FAILED",
                    message: error.message,
                });
            })
        })
        .catch(error => {
            console.log(error);
            res.json({
                status: "FAILED",
                message: error.message,
            });
        });
    })
    .catch(error => {
        console.log(error);
        res.json({
            status: "FAILED",
            message: error.message,
        });
    });
};
const generateResetString = () => {
    // Implement your logic to generate reset string here
    // For example:
    return Math.random().toString(36).substring(7);
};


//actual reset
router.post("/resetPassword", (req, res) => {
    let{userId,resetstring,newPassword} =req.body;
    PasswordReset
    .find({userId})
    .then(result =>{
         if(result.length>0){
            const {expiresAt} =result[0];
            if(expiresAt< Date.now()){
                PasswordReset
                .deleteOne({userId})
                .then(() =>{
                    res.json({
                        status: "FAILED",
                        message: "Reset link has expired"
                    })
                })
                .catch(error =>{
                    console.log(error);
                    res.json({
                        status: "FAILED",
                        message: error.message,
                    });
                })
            }else{
                bcrypt
                .compare(resetstring, result[0].resetstring)
                .then((result) =>{
                    if(result){

                        const saltRounds =10;
                        bcrypt
                        .hash(newPassword, saltRounds)
                        .then(hashedNewPassword =>{
                            User
                            .updateOne({_id:userId},{password:hashedNewPassword})
                            .then(()=>{
                                PasswordReset
                                .deleteOne({userId})
                                .then(()=>{
                                     res.json({
                                         status: "SUCCESS",
                                         message: "Password reset successfully"
                                     })
                                 })
                                .catch(error =>{
                                     console.log(error);
                                     res.json({
                                         status: "FAILED",
                                         message: error.message,
                                     });
                                 })
                            })
                            .catch(error =>{
                                console.log(error);
                                res.json({
                                    status: "FAILED",
                                    message: error.message,
                                });
                            })

                        })
                        .catch(error =>{   
                            console.log(error);
                            res.json({
                                status: "FAILED",
                                message: error.message,
                            });
                        })

                    }else{
                        res.json({
                            status: "FAILED",
                            message: "Invalid reset string"
                        })
                    }
                })
                .catch(error =>{
                    console.log(error);
                    res.json({
                        status: "FAILED",
                        message: error.message,
                    });
                })

            }


         }else{
            res.json({
                status: "FAILED",
                message: "No reset found"
            })
         }
    })
    .catch(error => {
        console.log(error);
        res.json({
            status: "FAILED",
            message: error.message,
        });
    })
})