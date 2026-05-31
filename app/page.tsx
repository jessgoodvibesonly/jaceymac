export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>
        Jacey MacKinnon
      </h1>

      <p style={{ fontSize: "1.3rem", color: "#d4af37" }}>
        Model Portfolio
      </p>

      <p style={{ marginTop: "30px", maxWidth: "700px", marginInline: "auto" }}>
        Prince Edward Island, Canada
      </p>

      <img
        src="/JaceyMacStudio.png"
        alt="Jacey MacKinnon"
        style={{
          maxWidth: "500px",
          width: "100%",
          marginTop: "40px",
          borderRadius: "12px",
        }}
      />
    </main>
  );
}
