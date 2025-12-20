import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import Section from "../components/Section";
import { defaultReviews } from "../data/siteData";

export default function Reviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [reviews, setReviews] = useState(defaultReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRole, setNewReviewRole] = useState("");
  const [newReviewText, setNewReviewText] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewRole.trim() || !newReviewText.trim()) return;
    setReviews([...reviews, { name: newReviewName.trim(), role: newReviewRole.trim(), text: newReviewText.trim() }]);
    setNewReviewName("");
    setNewReviewRole("");
    setNewReviewText("");
  };

  return (
    <Section id="reviews" title="Client Reviews">
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}
      >
        {reviews.map((review, index) => (
          <Motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            style={{ padding: 40, borderRadius: 20, background: "var(--card-surface)", backdropFilter: "blur(20px)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)", position: "relative" }}
          >
            <div style={{ fontSize: 32, marginBottom: 20, opacity: 0.6 }}>"</div>
            <p style={{ marginBottom: 24, color: "var(--text-secondary)", lineHeight: 1.7, fontSize: 16 }}>{review.text}</p>
            <div>
              <p style={{ fontWeight: 600, marginBottom: 4, fontSize: 16, color: "var(--text-primary)" }}>{review.name}</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>{review.role}</p>
            </div>
          </Motion.div>
        ))}
      </Motion.div>

      <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? "Close" : "Write a Review"}
        </button>
      </div>

      {showForm && (
        <div style={{ marginTop: 24, maxWidth: 600, marginInline: "auto", padding: 24, borderRadius: 16, background: "var(--card-surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
          <h3 style={{ marginBottom: 16, fontSize: 18, fontWeight: 600, color: "var(--text-primary)" }}>Share Your Experience</h3>
          <form onSubmit={handleAddReview} style={{ display: "grid", gap: 12 }}>
            <input
              placeholder="Your name"
              value={newReviewName}
              onChange={(e) => setNewReviewName(e.target.value)}
              style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--card-surface)", color: "var(--text-primary)", fontSize: 14 }}
            />
            <input
              placeholder="Role / Company"
              value={newReviewRole}
              onChange={(e) => setNewReviewRole(e.target.value)}
              style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--card-surface)", color: "var(--text-primary)", fontSize: 14 }}
            />
            <textarea
              placeholder="Your review"
              rows={4}
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--card-surface)", color: "var(--text-primary)", fontSize: 14, resize: "vertical" }}
            />
            <button type="submit" style={{ alignSelf: "flex-end" }}>Add Review</button>
          </form>
        </div>
      )}
    </Section>
  );
}
