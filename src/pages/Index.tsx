import { Link } from "react-router-dom";
import { Target, MapPin, AlertTriangle, Facebook, Twitter, Instagram } from "lucide-react";
import landingDrone from "@/assets/landing-drone.jpg";
import landingBg from "@/assets/landing-bg.png";
import Navbar from "@/components/Navbar";
const features = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Real-Time Drone Monitoring",
    desc: "Track drones live during rescue missions.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Location Detection",
    desc: "Identifies missing people faster.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    title: "Emergency Response",
    desc: "Send alerts instantly.",
  },
];

const howItWorks = [
  { step: 1, title: "Submit Rescue Request", desc: "Enter critical mission details and request immediate aerial support." },
  { step: 2, title: "Drone Deployment", desc: "Our optimized drones are dispatched to the scene within seconds." },
  { step: 3, title: "Live Tracking & Rescue", desc: "Monitor high-definition thermal feeds and track progress in real-time." },
];

const stats = [
  { value: "10+", label: "Missions Completed" },
  { value: "30+", label: "People Rescued" },
  { value: "15+", label: "Active Drones" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img src={landingDrone} alt="Drone aerial view" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
        <div className="relative z-10 px-6 py-32 md:px-16">
          <h1 className="mb-4 max-w-lg text-4xl font-black leading-tight text-primary-foreground md:text-5xl">
            "Drone Platform For
            <br />
            SEARCH & RESCUE"
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/80">From request to rescue — instantly</p>
          <div className="flex gap-4">
            <Link to="/register" className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-accent">
              start rescue mission
            </Link>
            <a href="#features" className="rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-bold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20">
              explore platform
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-20" style={{ backgroundImage: `url(${landingBg})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">features</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card/80 p-6 text-center backdrop-blur-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">{f.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-20" style={{ backgroundImage: `url(${landingBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">how it works</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-primary bg-primary/10 text-lg font-bold text-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + CTA */}
      <section className="relative py-20" style={{ backgroundImage: `url(${landingBg})`, backgroundSize: "cover", backgroundPosition: "center bottom" }}>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-12 flex justify-center gap-12 md:gap-20">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-primary-foreground md:text-5xl">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-primary-foreground/80">{s.label}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-bold text-primary-foreground md:text-3xl">
            Empower Your Search & Rescue Team Today
          </h2>
          <Link to="/register" className="inline-block rounded-full border border-primary-foreground/40 px-8 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
            start rescue mission
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-10 text-center">
        <h2 className="mb-4 text-2xl font-bold text-primary-foreground">ResQAid</h2>
        <div className="mb-4 flex items-center justify-center gap-6 text-sm text-primary-foreground/70">
          <a href="#features" className="hover:text-primary-foreground">features</a>
          <a href="#" className="hover:text-primary-foreground">privacy policy</a>
          <a href="#" className="hover:text-primary-foreground">terms of service</a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-primary-foreground/60">EN</span>
          <Facebook className="h-5 w-5 text-primary-foreground/70 hover:text-primary-foreground cursor-pointer" />
          <Twitter className="h-5 w-5 text-primary-foreground/70 hover:text-primary-foreground cursor-pointer" />
          <Instagram className="h-5 w-5 text-primary-foreground/70 hover:text-primary-foreground cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
