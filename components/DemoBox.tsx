export function DemoBox({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return (
    <div
      style={{
        padding: "16px 24px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        borderRadius: "12px",
        fontWeight: 600,
        fontSize: "1rem",
        textAlign: "center",
        boxShadow: "0 4px 16px rgba(102, 126, 234, 0.3)",
        minWidth: "100px",
        ...(props.style && typeof props.style === "object" ? props.style : {}),
      }}
      {...props}
    >
      {children}
    </div>
  );
}
