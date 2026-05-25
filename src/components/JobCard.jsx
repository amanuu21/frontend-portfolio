function JobCard({ job }) {
  return (
    <div
      style={{
        background: "rgba(30, 41, 59, 0.9)",
        borderRadius: "20px",
        padding: "28px",
        border: "1px solid #334155",
        transition: "0.3s",
        backdropFilter: "blur(10px)",
        cursor: "pointer"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px"
        }}
      >
        <span
          style={{
            background: "#2563eb",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "14px"
          }}
        >
          Frontend
        </span>

        <span style={{ color: "#94a3b8" }}>
          Remote
        </span>
      </div>

      <h2
        style={{
          color: "white",
          marginBottom: "18px",
          lineHeight: "1.4"
        }}
      >
        {job.title}
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          lineHeight: "1.8",
          marginBottom: "24px"
        }}
      >
        {job.body.slice(0, 120)}...
      </p>

      <button
        style={{
          background:
            "linear-gradient(to right, #3b82f6, #8b5cf6)",
          border: "none",
          padding: "12px 20px",
          borderRadius: "12px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Apply Now
      </button>
    </div>
  )
}

export default JobCard