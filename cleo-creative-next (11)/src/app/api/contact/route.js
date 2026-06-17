import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, service, message } = await req.json()

    await resend.emails.send({
      from: 'Cleo Consulting <usa@cleoconsult.com>',
      to: 'usa@cleoconsult.com',
      replyTo: email,
      subject: `New Message — ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Service:</strong> ${service || '—'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })
    // Confirmation to the sender
    await resend.emails.send({
    from: 'Cleo Consulting <usa@cleoconsult.com>',
    to: email,
    subject: 'We received your message — Cleo Consulting',
    html: `
        <h2>Thank you, ${firstName}!</h2>
        <p>We've received your message and will get back to you promptly.</p>
        ${service ? `<p>You enquired about: <strong>${service}</strong></p>` : ''}
        <br/>
        <p style="color: #999; font-size: 0.85rem;">Cleo Consulting — We Sniff Out the Best Talent</p>
    `,
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}