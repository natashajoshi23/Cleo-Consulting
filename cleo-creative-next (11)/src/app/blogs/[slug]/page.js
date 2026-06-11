import Link from 'next/link'
import PageBanner from '@/components/PageBanner'

const blogs = {
  'palo-alto-engineers': {
    title: 'Hire Palo Alto Certified Engineers',
    date: '27 February 2024',
    banner: 'PALO ALTO<br>ENGINEERS',
    img: '/images/digital-globe.webp',
    sections: [
      { heading: '', text: "Reliable IT staffing for PCNSE-certified Network Security Engineers. Contract, Contract-to-Hire, and Direct Placement \u2014 placed in 48\u201372 hours." },
      { heading: 'Why You Need a Specialist Staffing Firm for Palo Alto Engineers', text: "Finding a Palo Alto Certified Network Security Engineer through a general IT recruiter is like asking a generalist to perform neurosurgery. Palo Alto Networks is a highly specialized platform \u2014 placing the right PCNSE-certified talent requires a recruiter who genuinely understands the technology stack they are sourcing for." },
      { heading: '', text: "Cleo Consulting maintains an active pipeline of PCNSE-certified engineers with real hands-on experience in next-generation firewalls, Prisma Access, Cortex XDR, and Zero Trust architectures. We deliver verified talent faster than any general recruiter." },
      { heading: 'The Problem: Why Hiring Palo Alto Engineers Is So Difficult', text: "PCNSE certification is one of the most rigorous in network security. The talent pool is limited and most certified engineers are not actively job hunting on public boards. Organizations trying to hire independently face months-long searches with no qualified PCNSE-certified candidates surfacing, unverified r\u00e9sum\u00e9s with no real Palo Alto firewall deployment history, overpaying for generalists who claim to \"know firewalls\" but lack NGFW expertise, project delays and security gaps while the search drags on, and recruiters who can\u2019t explain the difference between Panorama and Prisma Access." },
      { heading: '', text: "Every week without a certified engineer is a week your Palo Alto investment is underperforming. Our cybersecurity staffing team closes that gap fast \u2014 typically within 48 hours." },
      { heading: 'Three Palo Alto Engineer Staffing Models', text: "Cleo Consulting\u2019s managed IT staffing services offer three flexible engagement models to match your timeline, budget, and long-term goals." },
      { heading: 'Contract Staffing', text: "Project-based Palo Alto contractors placed quickly. Ideal for firewall migrations, Panorama rollouts, or filling a staffing gap fast with minimal commitment. Placed in 48\u201372 hours." },
      { heading: 'Contract-to-Hire', text: "Start on contract, convert to full-time if the fit is right. Make permanent hiring decisions based on real on-the-job performance \u2014 reduces hiring risk significantly." },
      { heading: 'Direct Placement', text: "We source, screen, and present qualified PCNSE candidates faster than any generalist recruiter. Built for organisations making long-term security team investments." },
      { heading: 'Palo Alto Skills & Certifications We Verify', text: "Every engineer in our pipeline is verified for hands-on experience across the full Palo Alto Networks platform \u2014 not just a certificate on paper. We confirm live deployments, not just self-reported skills. This includes PA-Series NGFW deployment and configuration, Panorama Management for multi-device policy and logging, Prisma Access (SASE) for cloud-delivered security, Zero Trust (ZTNA) architecture design, Cortex XDR/XSOAR for detection and response, GlobalProtect VPN configuration and management, HIPAA/PCI-DSS/NIST compliance configurations, SD-WAN (PAN-OS) implementation, WildFire Sandboxing for threat prevention, VM/CN-Series cloud firewall deployments, firewall migration from Cisco, Fortinet, and Check Point, and policy design and tuning for security optimization." },
      { heading: 'How Our Staffing Process Works', text: "Our IT staff augmentation process is transparent, fast, and technically informed at every step. Step 1: Discovery Call (Same Day) \u2014 We collect your Palo Alto skill requirements, engagement type, timeline, and budget. Step 2: Talent Matching (24\u201348 Hours) \u2014 We search our pre-built pipeline of PCNSE engineers. Step 3: Technical Vetting \u2014 PCNSE verified via the official Palo Alto Networks certification portal. Step 4: Candidate Presentation \u2014 You receive 2\u20133 top PCNSE candidates with detailed technical profiles. Step 5: Placement and Ongoing Support \u2014 We handle contracting, onboarding, and regular check-ins." },
      { heading: 'Industries That Need Palo Alto Certified Engineers', text: "Healthcare: HIPAA-compliant firewall deployments and clinical network segmentation. Financial Services: PCI-DSS compliance, fraud prevention, and SOC team augmentation. Manufacturing: Securing OT/IT environments and protecting SCADA systems. MSPs: On-demand certified expertise for client project overflow. Government and Education: NIST-compliant architectures for agencies and universities. Tech and SaaS: Cloud firewall deployments and Zero Trust architecture." },
      { heading: 'Cleo Consulting vs. General IT Recruiter', text: "Not all IT staffing firms have the technical depth to place PCNSE engineers accurately. Cleo is technically fluent in the Palo Alto platform while general recruiters rely on keyword matching. We verify PCNSE certification for every candidate while others trust the r\u00e9sum\u00e9. Our talent pipeline is pre-screened and active while general recruiters post and wait. We place in 48\u201372 hours while others take 2\u20136 weeks. We offer all engagement models (Contract, CTH, Direct) while many offer direct only." },
      { heading: 'Key Benefits of Hiring a PCNSE-Certified Engineer', text: "Maximum ROI on your Palo Alto investment with expert configuration from day one. Reduced security risk with no misconfigured firewall policies. Faster project delivery because certified engineers know the platform deeply. Compliance confidence with HIPAA, PCI-DSS, NIST fully covered. Full ecosystem coverage across NGFW, Panorama, Prisma Access, and Cortex. Flexible engagement models for projects or permanent team building." },
      { heading: '', text: "If your placed engineer doesn\u2019t work out in the first 2 weeks, we replace them at no extra cost." },
    ],
  },
  'cloud-integration-what': {
    title: 'What Are Cloud Integration Services and When Do Businesses Need Them?',
    date: '04 February 2024',
    banner: 'CLOUD<br>INTEGRATION',
    img: '/images/server-rack.webp',
    sections: [
      { heading: 'What are cloud integration services?', text: "Cloud integration services help organizations connect cloud platforms, on-premise systems, applications, APIs, and data sources into a single, connected environment. The goal is to ensure that systems can securely share data and work together without manual intervention. These services are commonly used in environments where companies operate a mix of cloud providers, legacy systems, and third-party tools." },
      { heading: 'Why cloud integration is not just a \"cloud setup\" task', text: "Many organizations assume cloud integration is only about moving servers or applications to the cloud. In reality, integration focuses on how systems communicate after migration. Without proper integration, data becomes fragmented, processes break across systems, and security and access controls become inconsistent. This is why cloud integration is typically handled by experienced cloud engineers and architects, not just infrastructure teams." },
      { heading: 'When do businesses need cloud integration services?', text: "Organizations usually require cloud integration services when migrating applications to cloud platforms such as Google Cloud, running hybrid environments (cloud plus on-premise systems), integrating CRM, ERP, and internal business systems, implementing APIs between multiple applications, or scaling cloud workloads across regions. In most cases, integration becomes critical after the initial cloud migration phase." },
      { heading: 'Who typically delivers cloud integration work?', text: "Cloud integration work is usually performed by cloud engineers, cloud architects, integration specialists, and DevOps engineers. These professionals design integration architecture, implement secure data flows, and ensure long-term scalability. Because cloud integration is often project-based or time-bound, many companies choose staff augmentation or consulting models rather than permanent hiring." },
      { heading: 'Common challenges companies face', text: "Organizations often encounter poor integration design leading to performance bottlenecks, lack of security controls between systems, over-customization that becomes hard to maintain, dependency on undocumented integrations, and no clear ownership of integration logic. These challenges usually arise when integration is treated as an afterthought rather than a core architecture component." },
      { heading: 'How cloud integration consultants help', text: "Cloud integration consultants support organizations by designing scalable integration architectures, implementing secure APIs and data pipelines, aligning integrations with business workflows, ensuring compliance and access control, and supporting cloud platforms such as Google Cloud. Their role is to ensure systems remain connected, secure, and manageable as the environment grows." },
      { heading: 'Why staffing models are commonly used', text: "Many organizations prefer IT staff augmentation or consulting for cloud integration because integration needs vary by project, specialized skills are required for short durations, faster onboarding compared to full-time hiring, and flexibility to scale teams up or down. This approach allows companies to access the right cloud integration expertise without long hiring cycles." },
      { heading: '', text: "Cloud integration services focus on connecting systems, applications, and data across cloud and hybrid environments. These services are typically delivered by cloud engineers and architects with integration expertise. For many organizations, staffing and consulting models provide the flexibility needed to handle complex integration requirements efficiently." },
    ],
  },
  'threat-protection': {
    title: "How Palo Alto's Advanced Threat Protection Protects Against Emerging Cyber Threats",
    date: '08 November 2023',
    banner: 'THREAT<br>PROTECTION',
    img: '/images/code-blue.webp',
    sections: [
      { heading: 'The Ever-Evolving Cyber Threat Landscape', text: "In today\u2019s hyper-connected digital world, cyber threats are becoming increasingly sophisticated, targeting businesses of all sizes. Emerging threats\u2014such as ransomware, zero-day attacks, advanced persistent threats (APTs), and fileless malware\u2014pose significant risks to organizations, often leading to data breaches, financial loss, and reputational damage. To effectively combat these challenges, businesses require cutting-edge cybersecurity tools that go beyond traditional defenses. This is where Palo Alto Network Solutions from CLEO steps in." },
      { heading: 'Understanding Emerging Cyber Threats', text: "Ransomware Attacks \u2013 Malicious software that encrypts data, demanding ransom for access restoration. Zero-Day Exploits \u2013 Attacks targeting vulnerabilities before a patch is available. Advanced Persistent Threats (APTs) \u2013 Stealthy, prolonged attacks aimed at extracting sensitive information. Fileless Malware \u2013 Malicious code that doesn\u2019t rely on files, evading detection by traditional antivirus." },
      { heading: 'Behavioral Threat Analysis with Machine Learning', text: "Palo Alto\u2019s threat intelligence systems leverage machine learning to analyze patterns in data flow and detect anomalies that could signal an attack. By understanding normal behavior, the system can quickly identify suspicious activity, such as unusual login attempts or data transfer patterns, preventing potential breaches before they escalate." },
      { heading: 'WildFire for Real-Time Threat Detection', text: "WildFire is Palo Alto\u2019s cloud-based malware analysis service that inspects unknown files and links in real-time. When WildFire detects a potential threat, it automatically analyzes the sample in a secure environment. This immediate identification and response capability helps stop threats before they impact business operations." },
      { heading: 'Zero-Trust Security Model for Access Control', text: "Palo Alto\u2019s zero-trust approach limits access to resources based on verification, ensuring that users, devices, and applications are verified continuously. By adopting a zero-trust model, Palo Alto minimizes the chances of unauthorized access, isolating potential threats and stopping them from spreading within a network." },
      { heading: 'Next-Generation Firewall (NGFW) with Threat Prevention', text: "Palo Alto\u2019s NGFWs incorporate deep packet inspection, intrusion prevention, and URL filtering to guard against both known and unknown threats. Unlike traditional firewalls, Palo Alto\u2019s NGFWs detect threats embedded in application traffic, stopping malicious software from bypassing security controls." },
      { heading: 'Automated Response with Cortex XSOAR', text: "Palo Alto\u2019s Cortex XSOAR (Security Orchestration, Automation, and Response) allows organizations to automate responses to known threats. Cortex XSOAR reduces incident response times, allowing security teams to focus on proactive measures while automating repetitive threat-hunting and mitigation tasks." },
      { heading: 'Real-World Benefits', text: "Reduced Downtime: Businesses experience fewer disruptions as threats are identified and mitigated before they affect operations. Enhanced Data Security: Continuous monitoring and real-time detection help protect sensitive data from unauthorized access. Future-Proof Security: As new threats emerge, Palo Alto\u2019s machine learning capabilities enable businesses to stay ahead of cybercriminals, continuously adapting to defend against evolving tactics." },
      { heading: 'Why CLEO Chooses Palo Alto', text: "At CLEO, we prioritize client security by partnering with industry leaders like Palo Alto Networks. Through this partnership, we provide our clients with unparalleled protection against cyber threats, allowing them to focus on their core business while we handle their cybersecurity needs." },
      { heading: '', text: "Emerging cyber threats require sophisticated defenses. Palo Alto Networks\u2019 advanced threat protection solutions provide the tools, intelligence, and automation businesses need to stay protected in an ever-evolving cyber landscape. Embrace Palo Alto\u2019s capabilities with CLEO as your cybersecurity partner to future-proof your organization against today\u2019s and tomorrow\u2019s threats." },
    ],
  },
  'cisco-best-practices': {
    title: '10 Best Practices for Cisco Network Engineering',
    date: '14 July 2023',
    banner: 'CISCO<br>NETWORKING',
    img: '/images/circuit-board.webp',
    sections: [
      { heading: '', text: "Cisco is a renowned leader in network engineering, providing robust and reliable networking solutions for businesses worldwide. As a network engineer working with Cisco technologies, it\u2019s essential to follow best practices to ensure optimal performance, security, and scalability. In this blog, we will explore ten best practices for Cisco network engineering that will help you design, implement, and manage Cisco-based networks effectively." },
      { heading: '1. Plan and Design Network Infrastructure', text: "Before deploying a Cisco network, carefully plan and design the infrastructure to meet your organization\u2019s requirements. Consider factors such as network topology, scalability, redundancy, and security. A well-designed network lays the foundation for a reliable and efficient Cisco environment." },
      { heading: '2. Follow Cisco\u2019s Recommended Configuration Guidelines', text: "Cisco provides comprehensive configuration guidelines for its networking devices. Always refer to these guidelines and best practices when configuring Cisco routers, switches, firewalls, and other devices. Following these recommendations ensures optimal performance, security, and compatibility." },
      { heading: '3. Implement Network Segmentation', text: "Network segmentation enhances security and improves network performance. Divide your network into logical segments using techniques such as virtual LANs (VLANs) and access control lists (ACLs). This isolation prevents unauthorized access and contains potential threats, reducing the impact on the entire network." },
      { heading: '4. Implement Access Control and Authentication', text: "Secure your Cisco network by implementing access control and authentication mechanisms. Utilize features such as AAA (Authentication, Authorization, and Accounting), RADIUS, and TACACS+ to control user access and ensure only authorized individuals can access network resources." },
      { heading: '5. Regularly Update Firmware and Software', text: "Keep your Cisco devices up to date with the latest firmware and software releases. Regular updates provide bug fixes, security patches, and feature enhancements. Stay current with Cisco\u2019s release schedule and follow proper procedures for firmware and software upgrades to ensure network stability and security." },
      { heading: '6. Monitor Network Performance and Health', text: "Implement network monitoring tools to continuously monitor the performance and health of your Cisco network. Utilize tools like Cisco Prime Infrastructure or third-party solutions to track network traffic, identify bottlenecks, detect anomalies, and proactively address issues." },
      { heading: '7. Implement Network Security Best Practices', text: "Security should be a top priority in any Cisco network. Implement industry-standard security practices, such as strong password policies, encryption protocols, firewalls, and intrusion prevention systems (IPS). Regularly conduct security audits, vulnerability assessments, and penetration testing." },
      { heading: '8. Regularly Backup Network Configurations', text: "Back up the configurations of your Cisco devices regularly. Configuration backups ensure that you can quickly restore network settings in case of a failure or misconfiguration. Use tools like Cisco Configuration Professional (CCP) or Cisco Prime Infrastructure to automate the backup process." },
      { heading: '9. Implement Redundancy and High Availability', text: "To minimize downtime and ensure network availability, implement redundancy and high availability mechanisms. Utilize protocols such as VRRP, HSRP, or Cisco StackWise technology for switch redundancy. Implement redundant power supplies and network links to maintain continuous operations." },
      { heading: '10. Stay Updated and Continuously Learn', text: "Cisco technologies and networking best practices evolve rapidly. Stay updated with the latest Cisco certifications, attend training sessions, and engage in continuous learning. Regularly review Cisco documentation, participate in online forums, and follow Cisco\u2019s official blogs and announcements." },
      { heading: '', text: "Following these ten best practices for Cisco network engineering will help you design, implement, and manage efficient and secure networks. By adhering to these best practices, you\u2019ll excel in Cisco network engineering and contribute to the success of your organization\u2019s network infrastructure." },
    ],
  },
  'networking-buffalo': {
    title: 'Enhancing IT Networking in Buffalo: A Guide for Businesses',
    date: '14 July 2023',
    banner: 'NETWORKING<br>BUFFALO',
    img: '/images/city-skyscrapers.webp',
    sections: [
      { heading: '', text: "Buffalo, New York with its thriving business community, is a city that relies heavily on robust and efficient IT networking infrastructure. In today\u2019s digital era, businesses need reliable and secure networks to stay competitive and drive growth. Whether you\u2019re a small startup or an established enterprise, optimizing your IT networking capabilities in Buffalo can significantly enhance productivity, collaboration, and overall business success." },
      { heading: '1. Assess Your Current Networking Infrastructure', text: "Before making any changes, it\u2019s crucial to assess your existing networking infrastructure. Evaluate your network\u2019s performance, reliability, and security. Identify any bottlenecks, vulnerabilities, or areas that need improvement. This assessment will serve as the foundation for your networking enhancement efforts." },
      { heading: '2. Partner with a Reliable IT Service Provider', text: "To optimize your IT networking, consider partnering with a reputable IT service provider in Buffalo. Look for providers with expertise in networking solutions and a track record of delivering reliable and scalable infrastructure. A knowledgeable IT partner can assess your needs, offer tailored solutions, and provide ongoing support." },
      { heading: '3. Implement Secure Network Infrastructure', text: "Security is paramount in today\u2019s digital landscape. Protect your business and sensitive data by implementing robust security measures. This includes firewalls, encryption protocols, access controls, and regular security audits. Prioritize network security to safeguard against cyber threats and potential data breaches." },
      { heading: '4. Embrace Cloud Networking Solutions', text: "Cloud networking solutions offer numerous benefits for businesses in Buffalo. By leveraging cloud technologies, you can enhance scalability, flexibility, and collaboration. Cloud-based networking solutions allow for seamless remote access, improved data sharing, and centralized management." },
      { heading: '5. Prioritize Network Redundancy and Disaster Recovery', text: "Network downtime can be detrimental to businesses. Implement network redundancy measures to ensure continuity even in the event of a network failure or natural disaster. This may involve deploying redundant hardware, establishing backup connections, and implementing disaster recovery plans." },
      { heading: '6. Invest in Network Monitoring Tools', text: "Proactive monitoring and management of your network are crucial for identifying and addressing issues promptly. Invest in reliable network monitoring tools that provide real-time visibility into network performance, bandwidth utilization, and potential bottlenecks." },
      { heading: '7. Enable Secure Remote Access', text: "In today\u2019s remote work environment, enabling secure remote access is essential. Implement virtual private network (VPN) solutions to allow employees to securely access company resources from remote locations." },
      { heading: '8. Regularly Update and Patch Network Devices', text: "Keep your network devices, including routers, switches, and firewalls, up to date with the latest firmware and security patches. Regular updates and patches address vulnerabilities and ensure optimal performance." },
      { heading: '9. Train Employees on Network Security', text: "Human error is a common cause of network security breaches. Educate and train your employees on network security best practices. Teach them about password hygiene, phishing awareness, and the importance of maintaining security protocols." },
      { heading: '10. Regularly Evaluate and Optimize', text: "Networking optimization is an ongoing process. Regularly evaluate your network performance and seek opportunities for improvement. Keep an eye on emerging technologies and industry trends that can enhance your networking capabilities." },
      { heading: '', text: "Enhancing IT networking in Buffalo is crucial for businesses seeking to thrive in the digital age. By assessing your current infrastructure, partnering with a reliable IT service provider, prioritizing security, embracing cloud solutions, and implementing best practices, you can optimize your networking capabilities and drive business success." },
    ],
  },
  'cloud-integration-benefits': {
    title: '10 Powerful Benefits of Cloud Integration Services for Seamless Business Growth',
    date: '07 June 2023',
    banner: 'CLOUD<br>BENEFITS',
    img: '/images/server-rack.webp',
    sections: [
      { heading: '', text: "In today\u2019s fast-paced and interconnected business landscape, cloud integration services have emerged as a game-changer for companies seeking seamless growth and enhanced operational efficiency. By integrating various cloud-based applications and systems, businesses can streamline their processes, improve collaboration, and achieve significant cost savings." },
      { heading: '1. Enhanced Data Accessibility', text: "Cloud integration services enable real-time data synchronization across multiple applications, ensuring that accurate and up-to-date information is accessible anytime and anywhere. This accessibility empowers employees to make informed decisions swiftly, driving operational efficiency and productivity." },
      { heading: '2. Streamlined Workflow Automation', text: "By integrating different business applications, workflows can be automated seamlessly, eliminating manual data entry, reducing errors, and speeding up processes. Cloud integration enables the smooth flow of data and information between systems, saving time and resources." },
      { heading: '3. Improved Data Accuracy and Consistency', text: "Cloud integration services ensure data consistency by eliminating silos and discrepancies across multiple applications. With synchronized data, businesses can make reliable decisions based on accurate information, leading to better customer experiences and improved business outcomes." },
      { heading: '4. Enhanced Collaboration and Communication', text: "Cloud integration enables seamless communication and collaboration between departments, teams, and stakeholders. By integrating cloud-based communication tools, project management platforms, and CRM systems, businesses can foster teamwork, streamline workflows, and drive innovation." },
      { heading: '5. Scalability and Flexibility', text: "Cloud integration services offer scalability and flexibility, allowing businesses to adapt to changing market conditions and scale their operations as needed. With cloud-based solutions, companies can easily integrate new applications, add users, or expand their infrastructure." },
      { heading: '6. Cost Savings', text: "Cloud integration eliminates the need for separate on-premises infrastructure and minimizes hardware and maintenance costs. By leveraging cloud-based applications and services, businesses can reduce capital expenses, optimize IT resources, and pay for only what they use." },
      { heading: '7. Enhanced Customer Experience', text: "Cloud integration enables a holistic view of customer data by connecting CRM systems, support platforms, and marketing automation tools. This integration empowers businesses to deliver personalized experiences, targeted marketing campaigns, and timely customer support." },
      { heading: '8. Efficient Supply Chain Management', text: "Cloud integration plays a vital role in optimizing supply chain management by connecting inventory management, order processing, and logistics systems. Real-time data exchange and automation facilitate accurate demand forecasting, efficient inventory management, and streamlined order fulfillment." },
      { heading: '9. Increased Business Agility', text: "Cloud integration services enable businesses to respond quickly to market changes, emerging opportunities, and customer demands. By integrating cloud-based applications, companies can adopt new technologies, launch new products, and pivot their strategies swiftly." },
      { heading: '10. Data-driven Decision Making', text: "Cloud integration services provide businesses with comprehensive and consolidated data insights by connecting various sources of information. By leveraging analytics tools and integrated dashboards, companies can gain valuable insights into their operations, customer behavior, and market trends." },
      { heading: '', text: "In conclusion, cloud integration services offer a wide range of benefits to businesses, including streamlined processes, scalability, improved collaboration, and enhanced security. Embracing cloud integration services is a strategic move that can propel businesses towards success in the digital era." },
    ],
  },
  'google-cloud': {
    title: 'Google Cloud Services & CLEO',
    date: '07 June 2023',
    banner: 'GOOGLE<br>CLOUD',
    img: '/images/ai-cube.webp',
    sections: [
      { heading: '', text: "Looking to take your business to the next level? Look no further than Google Cloud Services and CLEO, the ultimate cloud computing solution. With Google Cloud Services, you\u2019ll get access to the most powerful and flexible cloud infrastructure available, complete with industry-leading security, scalability, and reliability." },
      { heading: '', text: "But that\u2019s just the beginning. With CLEO, you\u2019ll get a team of experienced cloud computing experts who can help you design, deploy, and manage your Google Cloud Services environment. Whether you\u2019re looking to migrate your existing workloads to the cloud, build new cloud-native applications, or optimize your cloud performance, CLEO has the skills and experience you need to succeed." },
      { heading: 'With Google Cloud Services and CLEO, you\u2019ll get:', text: "A secure, scalable, and reliable cloud infrastructure that can handle any workload, from small startups to global enterprises. Comprehensive cloud computing expertise, including cloud strategy, architecture, migration, and optimization. A team of dedicated cloud computing experts who will work with you every step of the way, from planning to deployment to ongoing support. The latest cloud computing technologies and best practices, so you can stay ahead of the competition and take advantage of emerging opportunities." },
      { heading: '', text: "Ready to take your business to the cloud? Contact CLEO today and discover how Google Cloud Services and CLEO can help you achieve your business goals." },
    ],
  },
}

const allSlugs = Object.keys(blogs)

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }))
}

export default function BlogPage({ params }) {
  const blog = blogs[params.slug]
  if (!blog) return <div className="pg-body"><h1>Blog not found</h1><Link href="/blogs">Back to Blogs</Link></div>

  return (
    <>
      <PageBanner eyebrow="Insights" title={blog.banner} num="" bgImage={blog.img} />
      <div className="pg-body" style={{ maxWidth: '850px' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>{blog.date}</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3, marginBottom: '2.5rem' }}>{blog.title}</h2>
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <div style={{ height: '350px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
            <img src={blog.img} alt={blog.title} className="img-cover" style={{ filter: 'sepia(20%) saturate(120%) brightness(0.8)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.08), rgba(0,18,41,0.3))', pointerEvents: 'none' }} />
          </div>
        </div>
        {blog.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.75rem' }}>{s.heading}</h3>}
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9 }}>{s.text}</p>
          </div>
        ))}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--ghost)' }}>
          <Link href="/blogs" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>{'\u2190'} Back to All Insights</Link>
        </div>
      </div>
    </>
  )
}