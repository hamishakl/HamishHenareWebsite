const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "hamishjustin7@gmail.com",
    pass: "bnmykuljsxubswux",
  },
});

exports.webflowMail = functions.https.onRequest((req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const email = req.body.email;

  let options = {
    from: "hamishjustin7@gmail.com",
    to: "hamishjustin7@gmail.com",
    subject: `Online Form Submission from ${name}`,
    html: `Message sent from ${name}<br><br>${message}<br><br>Email: ${email}`,
  };

  transporter.sendMail(options, function (err) {
    // Error
    if (err) {
      console.log(err);
      return res.redirect("https://hamishakl.github.io/HamishHenareWebsite/success.html");
    }

    // Success
    return res.redirect("https://hamishakl.github.io/HamishHenareWebsite/error.html");
  });
});
