import Contact from "../components/Contact/Contact";

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 24px", minHeight: "80vh" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Contact />
        </div>
      </section>
    </main>
  );
}
