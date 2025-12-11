import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.MAIL_USER,
            replyTo: email, // ⭐ IMPORTANTE: esto permite que al responder, le responda al usuario
            to: process.env.MAIL_TO,
            subject: `Nuevo mensaje de ${name}`,
            text: `Email del usuario: ${email}\n\nMensaje:\n${message}`,
        });


        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response("Error sending email", { status: 500 });
    }
}
