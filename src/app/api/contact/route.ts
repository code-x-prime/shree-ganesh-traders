import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, businessName, email, phone, location, product, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
      },
    });

    // ── ADMIN EMAIL TEMPLATE ──
    const adminMailOptions = {
      from: `"${name} via Sree Ganesh Traders" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
      to: process.env.NEXT_PUBLIC_TO_EMAIL,
      subject: `New Wholesale Enquiry: ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #FDFAF7; border: 1px solid #EDE5DA; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #D94F0A, #FF7A2F); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase;">New Wholesale Enquiry</h1>
          </div>
          <div style="padding: 40px; color: #1A1A1A;">
            <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6;">You have received a new business inquiry from the website contact form.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #7A7A7A; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #1A1A1A; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #7A7A7A; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Business</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #1A1A1A; font-weight: bold;">${businessName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #7A7A7A; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #1A1A1A;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #7A7A7A; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #1A1A1A;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #7A7A7A; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Location</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #1A1A1A;">${location}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #7A7A7A; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Interest</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EDE5DA; color: #D94F0A; font-weight: bold;">${product}</td>
              </tr>
            </table>

            <div style="background: #F8F1E9; padding: 24px; border-radius: 16px;">
              <h4 style="margin: 0 0 10px; color: #1A1A1A; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Message:</h4>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #4A4A4A;">${message || "No message provided."}</p>
            </div>
          </div>
          <div style="background: #1A1A1A; padding: 24px; text-align: center; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">
            Sree Ganesh Traders &copy; 2026
          </div>
        </div>
      `,
    };

    // ── USER THANK YOU EMAIL TEMPLATE ──
    const userMailOptions = {
      from: `"Sree Ganesh Traders" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
      to: email,
      subject: `Thank you for reaching out to Sree Ganesh Traders`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #FDFAF7; border: 1px solid #EDE5DA; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #D94F0A, #FF7A2F); padding: 60px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: 1px;">Thank You, ${name.split(' ')[0]}!</h1>
          </div>
          <div style="padding: 50px 40px; text-align: center; color: #1A1A1A;">
            <h2 style="margin: 0 0 20px; font-size: 20px; font-weight: 900; color: #D94F0A;">We've received your enquiry.</h2>
            <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.8; color: #4A4A4A;">
              Thank you for your interest in <strong>Sree Ganesh Traders</strong>. Our wholesale team is currently reviewing your requirements for <strong>${product}</strong>.
            </p>
            <div style="height: 1px; background: #EDE5DA; margin: 0 auto 30px; width: 60px;"></div>
            <p style="margin: 0; font-size: 15px; color: #7A7A7A;">
              One of our representatives will contact you within the next 24 hours to discuss bulk pricing and delivery options.
            </p>
            <div style="margin-top: 40px;">
              <a href="https://wa.me/916003312525" style="display: inline-block; background: #25D366; color: white; padding: 16px 32px; border-radius: 12px; font-weight: bold; text-decoration: none; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Chat on WhatsApp</a>
            </div>
          </div>
          <div style="background: #1A1A1A; padding: 30px; text-align: center;">
            <p style="margin: 0 0 10px; color: white; font-weight: bold; font-size: 14px;">Sree Ganesh Traders</p>
            <p style="margin: 0; color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Premium Spices & Tea from North East India</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
