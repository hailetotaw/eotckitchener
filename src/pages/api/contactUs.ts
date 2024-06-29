import { NextApiRequest, NextApiResponse } from "next";
//import nodemailer from "nodemailer";

const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, inquiry } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.google.com",
      port: 465,
      secure: true,
      auth: {
        user: "eotckitchener@gmail.com",
        pass: "Enate4@a",
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: "eotckitchener@gmail.com", // Replace with the recipient's email address
        subject: "New Inquiry from Contact Form",
        text: inquiry,
        html: `<p>${inquiry}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.log("here is the error", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
