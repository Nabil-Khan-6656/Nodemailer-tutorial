// const nodemailer = require('nodemailer');

// let mailTransporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "nabilkhan9624@gmail.com",
//         pass: "lhckhvthxiinijxn"
//     }
// })

// let details = {
//     from : "nabilkhan9624@gmail.com",
//     to : "nabilpathan9624@gmail.com",
//     subject : "Testing Our Node Mailer ",
//     text : "Testing Our First Sender "
// }

// mailTransporter.sendMail(details,(err)=>{
//     if(err){
//         console.log("Error Occured ", err);
//     }
//     else{
//         console.log("Email has sent !");
//     }
// })



const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"nabilkhan9624@gmail.com",
        pass:"eozafxavkqntpvdt"
    }
})


let details ={
    from:"nabilkhan9624@gmail.com",
    to:"nabilkhan9624@gmail.com",
    subject : "Testing Our Node mailer",
    text:"Sending our first mail"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Email has Sent");
    }
})
