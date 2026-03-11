import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Ecosystem from "@/components/Ecosystem";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import BlockchainBg from "@/components/BlockchainBg";

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "linear-gradient(to bottom, #090e1a, #0f172a)" }}
    >
      {/* Background star particles — client component to avoid Math.random in server render */}
      <StarField />

      {/* Blockchain themed background animations */}
      <BlockchainBg />

      {/* Ambient glow orbs */}
      <div
        className="fixed top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed top-1/2 right-0 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Ecosystem />
        <Team />
        <Footer />
      </div>
    </main>
  );
}
