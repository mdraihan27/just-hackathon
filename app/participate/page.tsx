"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface Member {
  name: string;
  studentId: string;
  department: string;
  year: string;
  email: string;
  phone: string;
}

interface FormState {
  teamName: string;
  members: [Member, Member, Member];
  projectTitle: string;
  problemStatement: string;
  proposedSolution: string;
  aiUsage: string;
  targetArea: string;
  videoLink: string;
  proposalPdfLink: string;
  agreeToRules: boolean;
}

const DEPARTMENTS = [
  "Computer Science and Engineering (CSE)",
  "Electrical and Electronic Engineering (EEE)",
  "Civil Engineering (CE)",
  "Mechanical Engineering (ME)",
  "Textile Engineering",
  "Business Administration (BBA)",
  "English",
  "Economics",
  "Pharmacy",
  "Biotechnology and Genetic Engineering (BGE)",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Other",
];

const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters"];

const TARGET_AREAS = [
  "Academic life and learning",
  "Campus infrastructure",
  "Student services",
  "Administration and communication",
  "Research tools",
  "Transportation",
  "Accessibility and safety",
  "Events and resource management",
  "Other",
];

const emptyMember = (): Member => ({
  name: "",
  studentId: "",
  department: "",
  year: "",
  email: "",
  phone: "",
});

export default function ParticipatePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormState>({
    teamName: "",
    members: [emptyMember(), emptyMember(), emptyMember()],
    projectTitle: "",
    problemStatement: "",
    proposedSolution: "",
    aiUsage: "",
    targetArea: "",
    videoLink: "",
    proposalPdfLink: "",
    agreeToRules: false,
  });

  const updateMember = (idx: number, field: keyof Member, value: string) => {
    const updated = [...form.members] as [Member, Member, Member];
    updated[idx] = { ...updated[idx], [field]: value };
    setForm((prev) => ({ ...prev, members: updated }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      router.push("/participate/success");
    }, 1800);
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: "5rem" }}>
      {/* Top nav */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src="/just_logo.png" alt="JUST Logo" style={{ width: "30px", height: "auto" }} />
            <span className="heading-font" style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>JUST AI HACKATHON</span>
          </Link>
        </div>
      </nav>

      <div className="container" style={{ maxWidth: 800, margin: "0 auto", paddingTop: "2rem", paddingBottom: "4rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge badge-green" style={{ marginBottom: "1rem" }}>Limited to 20 Teams</span>
          <h1 className="heading-lg" style={{ marginBottom: "0.75rem" }}>
            Register Your <span className="text-gradient-pink">Team</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto", fontSize: "0.95rem" }}>
            Fill in your team details and idea proposal. The top 20 teams will be selected based on idea quality.
          </p>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            {["Team Info", "Project Idea", "Submit"].map((label, i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: i + 1 < step ? "pointer" : "default",
                  opacity: i + 1 > step ? 0.4 : 1,
                  transition: "opacity 0.3s",
                }}
                onClick={() => i + 1 < step && setStep(i + 1)}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: i + 1 <= step ? "linear-gradient(135deg,#e91e8c,#7c3aed)" : "var(--bg-card)",
                    border: `2px solid ${i + 1 <= step ? "transparent" : "var(--border-subtle)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: i + 1 <= step ? "#fff" : "var(--text-muted)",
                    flexShrink: 0,
                    transition: "background 0.3s",
                  }}
                >
                  {i + 1 < step ? "✓" : i + 1}
                </div>
                <span style={{ fontSize: "0.82rem", fontWeight: 500, color: i + 1 <= step ? "var(--text-primary)" : "var(--text-muted)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ height: 3, background: "var(--bg-card)", borderRadius: 2, overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg,#e91e8c,#7c3aed)",
                borderRadius: 2,
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 - Team Info */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", animation: "fadeInUp 0.4s ease-out" }}>
              <div
                className="card"
                style={{ borderColor: "rgba(233,30,140,0.3)", padding: "1.5rem" }}
              >
                <h2 style={{ fontWeight: 500, fontSize: "1.1rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#128101;</span> Team Information
                </h2>
                <div>
                  <label className="form-label" htmlFor="teamName">Team Name *</label>
                  <input
                    id="teamName"
                    className="form-input"
                    type="text"
                    placeholder="e.g. CodeStorm"
                    required
                    value={form.teamName}
                    onChange={(e) => setForm((prev) => ({ ...prev, teamName: e.target.value }))}
                  />
                </div>
              </div>

              {([0, 1, 2] as const).map((idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{ padding: "1.5rem" }}
                >
                  <h2 style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "1rem", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: idx === 0 ? "#e91e8c" : idx === 1 ? "#7c3aed" : "#00ff94",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: idx === 2 ? "#0a0514" : "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                    Member {idx + 1}{idx === 0 ? " (Team Lead)" : ""}
                  </h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label className="form-label" htmlFor={`member-${idx}-name`}>Full Name *</label>
                      <input
                        id={`member-${idx}-name`}
                        className="form-input"
                        type="text"
                        placeholder="Full name"
                        required
                        value={form.members[idx].name}
                        onChange={(e) => updateMember(idx, "name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`member-${idx}-id`}>Student ID *</label>
                      <input
                        id={`member-${idx}-id`}
                        className="form-input"
                        type="text"
                        placeholder="e.g. 2021-CSE-001"
                        required
                        value={form.members[idx].studentId}
                        onChange={(e) => updateMember(idx, "studentId", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`member-${idx}-dept`}>Department *</label>
                      <select
                        id={`member-${idx}-dept`}
                        className="form-select"
                        required
                        value={form.members[idx].department}
                        onChange={(e) => updateMember(idx, "department", e.target.value)}
                      >
                        <option value="">Select department</option>
                        {DEPARTMENTS.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`member-${idx}-year`}>Year of Study *</label>
                      <select
                        id={`member-${idx}-year`}
                        className="form-select"
                        required
                        value={form.members[idx].year}
                        onChange={(e) => updateMember(idx, "year", e.target.value)}
                      >
                        <option value="">Select year</option>
                        {YEARS.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`member-${idx}-email`}>Email Address *</label>
                      <input
                        id={`member-${idx}-email`}
                        className="form-input"
                        type="email"
                        placeholder="university email"
                        required
                        value={form.members[idx].email}
                        onChange={(e) => updateMember(idx, "email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor={`member-${idx}-phone`}>Phone Number *</label>
                      <input
                        id={`member-${idx}-phone`}
                        className="form-input"
                        type="tel"
                        placeholder="+880..."
                        required
                        value={form.members[idx].phone}
                        onChange={(e) => updateMember(idx, "phone", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}



              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  id="step1-next-btn"
                  className="btn-primary"
                  onClick={() => setStep(2)}
                >
                  Next: Project Idea
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 2 - Project Idea */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", animation: "fadeInUp 0.4s ease-out" }}>
              <div className="card" style={{ padding: "1.5rem" }}>
                <h2 style={{ fontWeight: 500, fontSize: "1.1rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#128161;</span> Project Idea
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label className="form-label" htmlFor="projectTitle">Project Title *</label>
                    <input
                      id="projectTitle"
                      className="form-input"
                      type="text"
                      placeholder="A concise and descriptive title"
                      required
                      value={form.projectTitle}
                      onChange={(e) => setForm((prev) => ({ ...prev, projectTitle: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="targetArea">Target Area *</label>
                    <select
                      id="targetArea"
                      className="form-select"
                      required
                      value={form.targetArea}
                      onChange={(e) => setForm((prev) => ({ ...prev, targetArea: e.target.value }))}
                    >
                      <option value="">Select the primary area your project addresses</option>
                      {TARGET_AREAS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="problemStatement">Problem Statement *</label>
                    <textarea
                      id="problemStatement"
                      className="form-input"
                      rows={4}
                      placeholder="Describe the specific problem or challenge at JUST that your project addresses..."
                      required
                      value={form.problemStatement}
                      onChange={(e) => setForm((prev) => ({ ...prev, problemStatement: e.target.value }))}
                      style={{ resize: "vertical", minHeight: 100 }}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="proposedSolution">Proposed Solution *</label>
                    <textarea
                      id="proposedSolution"
                      className="form-input"
                      rows={4}
                      placeholder="Describe your web application solution and how it addresses the problem..."
                      required
                      value={form.proposedSolution}
                      onChange={(e) => setForm((prev) => ({ ...prev, proposedSolution: e.target.value }))}
                      style={{ resize: "vertical", minHeight: 100 }}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="aiUsage">AI Integration *</label>
                    <textarea
                      id="aiUsage"
                      className="form-input"
                      rows={3}
                      placeholder="Explain how your solution incorporates AI tools or techniques..."
                      required
                      value={form.aiUsage}
                      onChange={(e) => setForm((prev) => ({ ...prev, aiUsage: e.target.value }))}
                      style={{ resize: "vertical", minHeight: 80 }}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="proposalPdfLink">Idea Proposal PDF (Drive/Cloud Link) *</label>
                    <input
                      id="proposalPdfLink"
                      className="form-input"
                      type="url"
                      placeholder="https://drive.google.com/..."
                      required
                      value={form.proposalPdfLink}
                      onChange={(e) => setForm((prev) => ({ ...prev, proposalPdfLink: e.target.value }))}
                    />
                    <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.35rem", marginBottom: "1.25rem" }}>
                      Upload your detailed proposal PDF to a cloud storage (like Google Drive) and paste the public link here.
                    </p>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="videoLink">Idea Explanation Video (YouTube Link) *</label>
                    <input
                      id="videoLink"
                      className="form-input"
                      type="url"
                      placeholder="https://youtube.com/..."
                      required
                      value={form.videoLink}
                      onChange={(e) => setForm((prev) => ({ ...prev, videoLink: e.target.value }))}
                    />
                    <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.35rem" }}>
                      Upload a short video (2-5 min) explaining your idea to YouTube and paste the link here.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <button
                  type="button"
                  id="step2-back-btn"
                  className="btn-secondary"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  type="button"
                  id="step2-next-btn"
                  className="btn-primary"
                  onClick={() => setStep(3)}
                >
                  Review and Submit
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Review and Submit */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", animation: "fadeInUp 0.4s ease-out" }}>
              <div className="card" style={{ padding: "1.5rem" }}>
                <h2 style={{ fontWeight: 500, fontSize: "1.1rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>&#128203;</span> Review Your Submission
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {/* Team summary */}
                  <div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                      Team
                    </div>
                    <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1rem" }}>{form.teamName || "(no team name)"}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {form.members.map((m, i) => (
                        <div key={i} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", padding: "0.6rem 1rem", background: "rgba(255,255,255,0.03)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                          <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{m.name || `Member ${i + 1}`}</span>
                          {m.department && <span className="badge badge-purple" style={{ fontSize: "0.7rem" }}>{m.department.split("(")[0].trim()}</span>}
                          {m.year && <span className="badge" style={{ fontSize: "0.7rem" }}>{m.year}</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="divider" />

                  {/* Project summary */}
                  <div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                      Project
                    </div>
                    <div style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{form.projectTitle || "(untitled)"}</div>
                    {form.targetArea && <span className="badge badge-green" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>{form.targetArea}</span>}
                    {form.problemStatement && (
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                        {form.problemStatement.slice(0, 200)}{form.problemStatement.length > 200 ? "..." : ""}
                      </p>
                    )}
                    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
                      {form.videoLink && (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem" }}>
                          <span style={{ color: "#00ff94" }}>✓</span> Video Link Provided
                        </div>
                      )}
                      {form.proposalPdfLink && (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem" }}>
                          <span style={{ color: "#00ff94" }}>✓</span> PDF Link Provided
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules agreement */}
              <div
                className="card"
                style={{ padding: "1.5rem", borderColor: form.agreeToRules ? "rgba(0,255,148,0.4)" : "var(--border-subtle)" }}
              >
                <label
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start", cursor: "pointer" }}
                  htmlFor="agreeToRules"
                >
                  <input
                    id="agreeToRules"
                    type="checkbox"
                    required
                    checked={form.agreeToRules}
                    onChange={(e) => setForm((prev) => ({ ...prev, agreeToRules: e.target.checked }))}
                    style={{
                      width: 20,
                      height: 20,
                      accentColor: "#e91e8c",
                      flexShrink: 0,
                      marginTop: 2,
                      cursor: "pointer",
                    }}
                  />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    I confirm that all information provided is accurate. I understand that the registration fee of{" "}
                    <strong style={{ color: "var(--text-primary)" }}>BDT 600 per team</strong> is payable upon selection, and that the top 20 teams will be selected based on idea quality. I agree to comply with all hackathon rules.
                  </span>
                </label>
              </div>

              {/* Fee notice */}
              <div
                style={{
                  background: "rgba(124,58,237,0.06)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderRadius: 10,
                  padding: "1rem 1.25rem",
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#a855f7", fontSize: "1.1rem", marginTop: 1, flexShrink: 0 }}>&#128179;</span>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--text-primary)" }}>Registration fee:</strong> BDT 600 per team. Payment details will be shared with selected teams after the idea evaluation process.
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <button
                  type="button"
                  id="step3-back-btn"
                  className="btn-secondary"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  id="submit-btn"
                  type="submit"
                  className="btn-primary"
                  disabled={submitting}
                  style={{ opacity: submitting ? 0.7 : 1, backgroundColor: "var(--accent-green)" }}
                >
                  {submitting ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin-slow 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
