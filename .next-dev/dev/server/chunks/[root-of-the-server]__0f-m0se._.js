module.exports = [
"[project]/src/lib/email/service.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__ = __turbopack_context__.i("[externals]/nodemailer [external] (nodemailer, cjs, [project]/node_modules/nodemailer)");
;
const transporter = __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__["default"].createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
const sendEmail = async ({ to, subject, html, attachments = [] })=>{
    try {
        const info = await transporter.sendMail({
            from: `"HR Portal" <${process.env.EMAIL_USER}>`,
            to,
            bcc: process.env.EMAIL_USER,
            subject,
            html,
            attachments
        });
        console.log("Email sent successfully: %s", info.messageId);
        return {
            success: true,
            messageId: info.messageId
        };
    } catch (error) {
        console.error("CRITICAL EMAIL FAILURE:", error);
        return {
            success: false,
            error: error.message
        };
    }
};
}),
"[externals]/nodemailer [external] (nodemailer, cjs, [project]/node_modules/nodemailer)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("nodemailer-9c35dd349a8aaa9f", () => require("nodemailer-9c35dd349a8aaa9f"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f-m0se._.js.map