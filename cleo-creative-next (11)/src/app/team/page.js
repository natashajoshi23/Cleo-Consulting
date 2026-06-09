import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'
export const metadata = { title: 'Our Team — Cleo Consulting' }
const members = [
  { i: 'JS', name: 'Jai Singh', li: 'https://www.linkedin.com/in/singhjai77', bio: "Jai strives to be a perfectionist but most of the times fails miserably — after all, no one's perfect. He is a graduate in Economics and English Literature and a Post Grad in Marketing and IT. He has a sharp eye to recognize talent and manages the recruitment efforts. When he's not working, he's spending time with sheltered animals, traveling or catching up on a movie — after taking permission from his six rescued dogs." },
  { i: 'VJ', name: 'Vic (Vikas) Joshi', li: 'https://www.linkedin.com/in/vic-joshi-9878429a', bio: "Vic is the funny guy in the team — a sense of humor some may call boisterous, but most call awesome. A Mathematics graduate and Post Grad in Marketing and IT, he's a pure sales guy with a knack for closing deals. When not working, you'll find him bike riding, running, golfing or playing tennis." },
  { i: 'JJ', name: 'John Jimomi', li: 'https://www.linkedin.com/in/john-j-b384a613', bio: "John is a very soft-spoken, sincere and honest man. Passionate about his work and loves hardcore recruitment. A married man juggling life between work and being a full-time dad to his son. He enjoys spending time with his family, loves playing cricket and watching movies." },
  { i: 'RK', name: 'Ramesh K', li: 'https://www.linkedin.com/in/ramesh-k-aab4a017', bio: 'Ramesh is a Computer Science Engineering graduate leading the sales team. He has great understanding of all technologies he sources for and a great zeal to learn new ones. He loves spending time with his family and traveling. "You only live once, but if you do it right, once is enough."' },
  { i: 'JoS', name: 'Jordan Sherlock', li: 'https://www.linkedin.com/in/jordan-sherlock-a369b3176/', bio: "Jordan is a family-man with 3 kids. Before joining Cleo, he was with Fidelity Information Services. Born and raised in Western New York, he played American Football for Buffalo State College and now volunteers as a football coach. Handles Cleo's NY operations out of Buffalo." },
  { i: 'GV', name: 'Guruprasad Vastrad', li: 'https://www.linkedin.com/in/gkv93/', bio: "Guru is a business graduate handling sales for Cleo. Instrumental in bringing new business and partnerships. In his free time he loves to travel and play billiards. He's a people-person who balances a healthy social life with his work responsibilities." },
  { i: 'AP', name: 'Amit Patil', li: 'https://www.linkedin.com/in/amit-patil-49369b49/', bio: 'Amit is a detail-oriented, energetic and creative individual with excellent communication skills, strong analytical and leadership qualities. A natural leader with a sense of ownership and focus on quality even under high pressure.' },
  { i: 'AJ', name: 'Asa Jimomi', li: 'https://www.linkedin.com/in/asa-zhimomi-575262250/', bio: "Asa is a Political Science graduate and avid artist who loves to sketch and paint. A huge Marvel fan, especially Loki. His kind and caring nature make him a very successful technical recruiter." },
]
export default function Team() {
  return (
    <>
      <PageBanner eyebrow="About Us" title="OUR<br>TEAM" num="02" bgImage="/images/team-fistbump.webp" />
      <div className="pg-body">
        <div className="team-list">
          {members.map((m, idx) => (
            <div className={`tm`} key={m.name}>
              <div className="tm-photo">{m.i}</div>
              <div className="tm-info">
                <div className="tm-name">{m.name}</div>
                <a href={m.li} target="_blank" rel="noopener noreferrer" className="tm-li">LinkedIn →</a>
                <p className="tm-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="tm-cleo">
          <div className="tm-name">Cleo </div>
          <p className="tm-bio" style={{ marginTop: '0.75rem' }}>Last but definitely not the least, Cleo is the inspiration behind this company. She came into Jai&rsquo;s life in 2008 at a bakery where their eyes met. From then till today they are inseparable. Cleo has taught us how to be grateful, how to love, respect and accept. She is honest, loyal, expressive and genuine — and we, as a company, shall offer our services with the same principles to our clients.</p>
        </div>
      </div>
      <CTABand label="Work with us" title="GET IN<br><em>Touch</em>" btnText="Contact Us →" btnHref="/contact" />
    </>
  )
}
