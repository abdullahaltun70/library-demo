export function DemoCard({
  title,
  description,
  children,
  wide = false,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        minHeight: "280px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        gridColumn: wide ? "span 2" : "span 1",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: "8px",
            color: "#2d3748",
          }}
        >
          {title}
        </h3>
        <p style={{ color: "#718096", fontSize: "0.95rem", margin: 0 }}>
          {description}
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "120px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
