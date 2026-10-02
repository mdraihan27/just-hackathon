import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Submitted | JUST AI Hackathon 2026",
  description: "Your team registration for JUST AI Hackathon 2026 has been submitted successfully.",
};

export default function SuccessPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,148,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "20%",
          right: "10%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 580,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Success icon */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg,rgba(0,255,148,0.15),rgba(0,229,255,0.1))",
            border: "2px solid rgba(0,255,148,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 2rem",
            animation: "pulse-glow 3s ease-in-out infinite, fadeIn 0.6s ease-out",
            boxShadow: "0 0 40px rgba(0,255,148,0.2)",
            fontSize: "3rem",
          }}
        >
          &#10003;
        </div>

        <div
          className="badge badge-green"
          style={{ marginBottom: "1.25rem", display: "inline-flex" }}
        >
          Submission Received
        </div>

        <h1
          className="heading-lg"
          style={{ marginBottom: "1rem", animation: "fadeInUp 0.5s ease-out 0.1s both" }}
        >
          You are <span className="text-gradient-green">In the Queue!</span>
        </h1>

        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            animation: "fadeInUp 0.5s ease-out 0.2s both",
          }}
        >
          Your team registration for{" "}
          <strong style={{ color: "var(--text-primary)" }}>JUST AI Hackathon 2026</strong> has been
          submitted successfully. The organizing team will review your idea proposal and notify
          you of the result.
        </p>

        {/* Info cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "2.5rem",
            animation: "fadeInUp 0.5s ease-out 0.3s both",
            textAlign: "left",
          }}
        >
          {[
            {
              icon: "&#128336;",
              title: "What happens next?",
              desc: "The top 20 teams will be selected based on idea quality. Selection results will be communicated via the email you provided.",
            },
            {
              icon: "&#128179;",
              title: "Registration Fee",
              desc: "BDT 600 per team. Payment instructions will be sent only to selected teams after the idea review.",
            },
            {
              icon: "&#127891;",
              title: "Training Sessions",
              desc: "Online sessions by senior students and faculty members will be held before the hackathon begins.",
            },
            {
              icon: "&#128187;",
              title: "AI Tools Access",
              desc: "Every selected team receives an AI code editor subscription for the 2-week hackathon duration.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card"
              style={{ padding: "1.25rem" }}
            >
              <div
                style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <div style={{ fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.35rem" }}>
                {item.title}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", lineHeight: 1.55 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Key dates */}
        <div
          style={{
            background: "rgba(233,30,140,0.06)",
            border: "1px solid rgba(233,30,140,0.2)",
            borderRadius: 10,
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
            textAlign: "left",
            animation: "fadeInUp 0.5s ease-out 0.4s both",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>&#128197;</span> Key Dates
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { date: "18-26 September", event: "Registration and idea submission window" },
              { date: "10-11 October", event: "Judgment Day and Prize Giving Ceremony" },
            ].map((kd) => (
              <div
                key={kd.date}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  fontSize: "0.85rem",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Space Mono",
                    color: "var(--accent-pink)",
                    flexShrink: 0,
                    fontSize: "0.78rem",
                  }}
                >
                  {kd.date}
                </span>
                <span style={{ color: "var(--text-secondary)" }}>{kd.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeInUp 0.5s ease-out 0.5s both",
          }}
        >
          <Link href="/" id="back-home-btn" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/participate" id="register-another-btn" className="btn-secondary">
            Register Another Team
          </Link>
        </div>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.78rem",
            marginTop: "2rem",
            animation: "fadeIn 0.5s ease-out 0.6s both",
          }}
        >
          Questions? Contact the organizing team at the Department of CSE, JUST.
        </p>
      </div>
    </div>
  );
}
