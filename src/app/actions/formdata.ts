"use server";

import nodemailer from "nodemailer";

export const sendData = async (from: string, name: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "prashant67670@gmail.com",
      // pass: "ehkirvfirhixguwn",
      pass: process.env.PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from,
      to: "prashant67690@gmail.com",
      subject: `Email from ${name}`,
      text,
    });

    return { message: "Email sent successfully", info };
  } catch (error) {
    return { message: "Error sending email", error };
  }
};
