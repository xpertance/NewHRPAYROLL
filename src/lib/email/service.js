import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async ({ to, subject, html, attachments = [] }) => {
    try {
        const info = await transporter.sendMail({
            from: `"HR Portal" <${process.env.EMAIL_USER}>`,
            to,
            bcc: process.env.EMAIL_USER, // Optional: send a copy to the sender
            subject,
            html,
            attachments
        });
        console.log("Email sent successfully: %s", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("CRITICAL EMAIL FAILURE:", error);
        return { success: false, error: error.message };
    }
};
