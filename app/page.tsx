"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/just_logo.png" alt="JUST Logo" style={{ width: "30px", height: "auto" }} />
          <span className="heading-font" style={{ fontSize: "1.5rem" }}>JUST AI HACKATHON</span>
        </div>
        <div className="nav-links hidden md:flex">
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#prizes">Prizes</a>
          <a href="#faq">FAQ</a>
        </div>
        <Link href="/participate" className="btn-pink" style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          REGISTER TODAY
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero animate-on-scroll" style={{ position: "relative" }}>
        <div className="cross-hair" style={{ top: "15%", left: "5%" }}></div>
        <div className="cross-hair" style={{ bottom: "20%", right: "10%" }}></div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div style={{ flex: "1 1 500px" }}>
            <p style={{ color: "var(--accent-green)", fontFamily: "Anton", fontSize: "1rem", letterSpacing: "0.15em", marginBottom: "1rem" }}>HOSTED BY CSE DEPARTMENT, JUST</p>
            <h1 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: 0.9, marginBottom: "1rem" }}>
              <span className="text-pink">JUST</span> <span className="text-green">AI</span><br/>
              HACKATHON
            </h1>
            <p style={{ maxWidth: "420px", marginBottom: "2rem", color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6 }}>
              An inter-university AI hackathon organized by the Department of CSE at Jashore University of Science and Technology. Open to students from any university across Bangladesh.
            </p>
            <Link href="/participate" className="btn-pink">
              REGISTER TODAY
            </Link>
          </div>

          <div style={{ flex: "1 1 600px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3rem" }}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <img
                src="/doodle.png"
                alt="AI Hackathon"
                style={{
                  width: "110%",
                  maxWidth: "900px",
                  height: "auto",
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "12px",
                  marginLeft: "10%"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Theme */}
      <section id="about" className="section animate-on-scroll">
        <h2 style={{ fontSize: "5rem", lineHeight: 0.9, marginBottom: "2rem" }}>
          <span className="text-outline">OUR</span><br/>
          THEME
        </h2>
        <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "3rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 style={{ fontSize: "2.5rem", color: "var(--accent-green)", marginBottom: "1rem" }}>AI-POWERED WEB SOLUTIONS</h3>
          <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            This inter-university hackathon challenges students from across Bangladesh to build AI-powered web applications that solve real-world problems. Observe challenges around you, whether on your campus, in your community, or in everyday life, and turn them into practical, AI-assisted web solutions that make a genuine impact.
          </p>
        </div>
      </section>

      {/* Sub Hero / Dates */}
      <section className="sub-hero animate-on-scroll">
        <h3 style={{ fontSize: "1.5rem", color: "var(--accent-green)", marginBottom: "0.5rem" }}>25 OCT - 22 NOV 2026</h3>
        <h2 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", color: "var(--accent-pink)", lineHeight: 1, marginBottom: "2rem" }}>
          BUILD. COMPETE.<br/><span className="text-primary">WIN.</span>
        </h2>
        <a href="#timeline" className="btn-white">SEE THE JOURNEY</a>
      </section>

      {/* Stats */}
      <section className="stats-container animate-on-scroll">
        <div className="stat-item">
          <div className="stat-number">20</div>
          <div className="stat-label">Selected Teams</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">60</div>
          <div className="stat-label">Builders</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">45K+</div>
          <div className="stat-label">Prize Pool</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2</div>
          <div className="stat-label">Weeks to Build</div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="section animate-on-scroll">
        <h2 style={{ fontSize: "5rem", lineHeight: 0.9 }}>
          <span className="text-outline">THE</span><br/>
          JOURNEY
        </h2>
        <p style={{ maxWidth: "600px", marginTop: "1rem", color: "var(--text-secondary)" }}>
          From announcement to award ceremony, here is how it all unfolds. Five phases, one epic hackathon experience.
        </p>

        <div className="timeline-container">
          <div className="timeline-item animate-on-scroll">
            <div className="timeline-spacer"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div style={{ color: "var(--accent-pink)", fontFamily: "Anton", fontSize: "1.2rem", marginBottom: "0.5rem" }}>PHASE 1</div>
              <h3>Announcement</h3>
              <p style={{ color: "var(--accent-green)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>25 - 28 October</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>The hackathon goes live! We reveal the theme, open the hype, and get everything ready for you to jump in.</p>
            </div>
          </div>
          <div className="timeline-item animate-on-scroll delay-100">
            <div className="timeline-spacer"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div style={{ color: "var(--accent-green)", fontFamily: "Anton", fontSize: "1.2rem", marginBottom: "0.5rem" }}>PHASE 2</div>
              <h3>Registration & Training</h3>
              <p style={{ color: "var(--accent-green)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>29 Oct - 6 November</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Form your squad of 3, register your team, and pitch your idea. Plus, attend exclusive training sessions to sharpen your skills before the build begins.</p>
            </div>
          </div>
          <div className="timeline-item animate-on-scroll delay-200">
            <div className="timeline-spacer"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div style={{ color: "#ffb74d", fontFamily: "Anton", fontSize: "1.2rem", marginBottom: "0.5rem" }}>PHASE 3</div>
              <h3>Build Season</h3>
              <p style={{ color: "var(--accent-green)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>7 - 20 November</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Two weeks of pure creation. Selected teams get free premium AI coding tools and build their web applications. This is where ideas become reality.</p>
            </div>
          </div>
          <div className="timeline-item animate-on-scroll delay-300">
            <div className="timeline-spacer"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div style={{ color: "var(--accent-blue)", fontFamily: "Anton", fontSize: "1.2rem", marginBottom: "0.5rem" }}>PHASE 4</div>
              <h3>Judgment Day</h3>
              <p style={{ color: "var(--accent-green)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>21 November</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Teams present their finished products to a panel of judges. Show what you have built, explain your thinking, and prove your solution works.</p>
            </div>
          </div>
          <div className="timeline-item animate-on-scroll delay-400">
            <div className="timeline-spacer"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div style={{ color: "#d500f9", fontFamily: "Anton", fontSize: "1.2rem", marginBottom: "0.5rem" }}>PHASE 5</div>
              <h3>Awards Ceremony</h3>
              <p style={{ color: "var(--accent-green)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>22 November</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>The grand finale. Winners are announced, prizes are awarded, and outstanding projects get the chance to be deployed on campus for real use!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes & Perks */}
      <section id="prizes" className="section animate-on-scroll">
        <h2 style={{ fontSize: "5rem" }}>PRIZES & PERKS</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          Over 45,000 BDT in cash prizes, plus incredible perks for every participant. Whether you win or not, you leave with something valuable.
        </p>

        <div className="prizes-grid">
          <div className="prize-main">
            <h3 className="heading-font" style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>1ST PLACE</h3>
            <h2 className="heading-font text-green" style={{ fontSize: "5rem", lineHeight: 1 }}>15K BDT</h2>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>Cash prize, winner certificates, and crests for the champion team.</p>
          </div>
          
          <div className="prize-list">
            <div className="prize-item">
              <div style={{ background: "var(--accent-blue)", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>🥈</div>
              <div>
                <h4 style={{ fontSize: "1.5rem", color: "var(--accent-green)" }}>12K BDT</h4>
                <p>2nd Place</p>
              </div>
            </div>
            <div className="prize-item">
              <div style={{ background: "var(--accent-pink)", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>🥉</div>
              <div>
                <h4 style={{ fontSize: "1.5rem", color: "var(--accent-green)" }}>9K BDT</h4>
                <p>3rd Place</p>
              </div>
            </div>
            <div className="prize-item">
              <div style={{ background: "#ffb74d", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>⭐</div>
              <div>
                <h4 style={{ fontSize: "1.5rem", color: "var(--accent-green)" }}>9K BDT</h4>
                <p>Top Team with a Female Participant</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--accent-pink)", marginBottom: "1rem" }}>FREE AI TOOLS & REAL DEPLOYMENT</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Every selected team receives a premium AI code editor subscription for the entire 2-week build period, completely free.</p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>The best projects will be deployed and hosted on university infrastructure at no cost to you. Your name goes on a live product used by real people on campus.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--accent-green)", marginBottom: "1rem" }}>EVERY PARTICIPANT WINS</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Honourable mentions for standout ideas and creative solutions beyond the top 3.</p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Every single participant walks away with an official certificate, a writing pad, and a pen. No one leaves empty-handed.</p>
          </div>
        </div>
      </section>

      {/* How to Join & Judging Criteria */}
      <section id="rules" className="section animate-on-scroll">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "5rem", lineHeight: 0.9, marginBottom: "2rem" }}>
              <span className="text-outline">HOW TO</span><br/>
              JOIN
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent-pink)", fontSize: "1.5rem", fontFamily: "Anton" }}>01</span>
                <p style={{ fontSize: "1.1rem" }}>Build a team of exactly 3 members. Open to students from any university in Bangladesh.</p>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent-pink)", fontSize: "1.5rem", fontFamily: "Anton" }}>02</span>
                <p style={{ fontSize: "1.1rem" }}>Register with your idea during Phase 2. The strongest 20 ideas will be selected for the main event.</p>
              </li>
              <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent-pink)", fontSize: "1.5rem", fontFamily: "Anton" }}>03</span>
                <p style={{ fontSize: "1.1rem" }}>A registration fee of 600 BDT per team applies upon selection. Payment details will be shared after the screening process.</p>
              </li>
            </ul>
          </div>
          
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "5rem", lineHeight: 0.9, marginBottom: "2rem" }}>
              <span className="text-outline">JUDGING</span><br/>
              CRITERIA
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(212,255,0,0.15)" }}>
                <h4 style={{ fontSize: "1.2rem", color: "var(--accent-green)", marginBottom: "0.5rem" }}>IDEA</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>How original and relevant is your problem? Does your solution address a real need at JUST?</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(0,200,255,0.15)" }}>
                <h4 style={{ fontSize: "1.2rem", color: "var(--accent-blue)", marginBottom: "0.5rem" }}>EXECUTION</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>How well is it built? Functionality, AI integration, and completeness of your web application all matter.</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(255,42,133,0.15)" }}>
                <h4 style={{ fontSize: "1.2rem", color: "var(--accent-pink)", marginBottom: "0.5rem" }}>PRESENTATION</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Can you sell your vision? Clarity of your pitch and how effectively you demo your solution on Judgment Day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section animate-on-scroll">
        <h2 style={{ fontSize: "5rem", textAlign: "center", marginBottom: "3rem" }}>F.A.Q</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h4 style={{ fontSize: "1.2rem", color: "var(--accent-green)", marginBottom: "0.5rem" }}>Do I need a team to register?</h4>
            <p style={{ color: "var(--text-secondary)" }}>Yes! Teams of exactly 3 members are required. Grab two friends and start brainstorming.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h4 style={{ fontSize: "1.2rem", color: "var(--accent-pink)", marginBottom: "0.5rem" }}>Is there a registration fee?</h4>
            <p style={{ color: "var(--text-secondary)" }}>Yes, 600 BDT per team (not per person). Payment is only required after your idea has been selected in the top 20.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h4 style={{ fontSize: "1.2rem", color: "var(--accent-blue)", marginBottom: "0.5rem" }}>Do I have to be a CSE student?</h4>
            <p style={{ color: "var(--text-secondary)" }}>Absolutely not. This hackathon is open to students from any university across Bangladesh. All departments and all years are welcome.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h4 style={{ fontSize: "1.2rem", color: "#ffb74d", marginBottom: "0.5rem" }}>What kind of projects can I build?</h4>
            <p style={{ color: "var(--text-secondary)" }}>Any web application that solves a real problem at JUST. Think campus navigation, smart timetabling, lab booking systems, AI-powered study tools, the possibilities are endless.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h4 style={{ fontSize: "1.2rem", color: "#d500f9", marginBottom: "0.5rem" }}>Will there be any training or support?</h4>
            <p style={{ color: "var(--text-secondary)" }}>Yes! During the Registration phase, we will host training sessions led by experienced seniors and faculty to help you get up to speed with the tools and skills you need.</p>
          </div>
        </div>
      </section>

      {/* Registration Callout */}
      <section className="section animate-on-scroll" style={{ paddingBottom: "8rem" }}>
        <h2 style={{ fontSize: "5rem", lineHeight: 0.9 }}>
          <span className="text-outline">READY TO</span><br/>
          BUILD?
        </h2>
        
        <div className="ticket-box">
          <div>
            <h3 style={{ fontSize: "2rem" }}>TEAM REGISTRATION</h3>
            <p style={{ color: "#666" }}>Team of 3 members. Top 20 ideas get selected. Are you in?</p>
            <div style={{ marginTop: "1rem" }}>
              <Link href="/participate" className="btn-pink" style={{ padding: "0.75rem 2rem", fontSize: "1.1rem" }}>REGISTER YOUR TEAM</Link>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "4rem", color: "var(--accent-pink)", lineHeight: 1 }}>600<span style={{ fontSize: "2rem" }}>BDT</span></h2>
            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>per team, after selection</p>
          </div>
        </div>
      </section>

    </main>
  );
}
