import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const formData = await req.formData()

    const name       = formData.get('name')
    const email      = formData.get('email')
    const phone      = formData.get('phone')
    const position   = formData.get('position')
    const experience = formData.get('experience')
    const message    = formData.get('message')
    const resumeFile = formData.get('Resume Upload')

    // Convert file to buffer for attachment
    let attachments = []
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments = [{
        filename: resumeFile.name,
        content: buffer,
      }]
    }

    await resend.emails.send({
      from: 'Cleo Consulting <usa@cleoconsult.com>',  // must be your verified domain
      to: 'usa@cleoconsult.com',   // where you want to receive apps
      replyTo: email,
      subject: `New Application — ${position}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience || '—'}</p>
        <p><strong>Additional Info:</strong> ${message || '—'}</p>
      `,
      attachments,
    })
    await resend.emails.send({
    from: 'Cleo Consulting <usa@cleoconsult.com>',
    to: email,
    subject: 'We received your application — Cleo Consulting',
    html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your application for <strong>${position}</strong> and our recruitment team will review your profile shortly.</p>
        <p>If there's a match, we'll be in touch within 48 hours.</p>
        <br/>
        <p style="color: #999; font-size: 0.85rem;">Cleo Consulting — We Sniff Out the Best Talent</p>
    `,
    })
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Resend error:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}