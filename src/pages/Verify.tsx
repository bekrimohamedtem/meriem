import { useState, useRef } from "react";
import { Mail, Check } from "lucide-react";
import rescueBg from "@/assets/rescue-bg.jpg";
import droneHud from "@/assets/drone-hud.png";

const steps = [1, 2, 3];

const Verify = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) inputRefs.current[index - 1]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4" style={{ backgroundImage: `url(${rescueBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex w-full max-w-[900px] overflow-hidden rounded-2xl bg-card/90 shadow-2xl backdrop-blur-sm">
        {/* Left - Form */}
        <div className="flex w-full flex-col items-center justify-center px-8 py-10 md:w-1/2 md:px-12">
          <h1 className="mb-4 text-3xl font-bold text-foreground">Verify your Account</h1>
          <p className="mb-8 text-center text-sm leading-relaxed text-muted-foreground">
            A secure verification link has been sent to your email. Please enter the code below to activate your profile and access the rescue platform.
          </p>

          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/90">
            <Mail className="h-10 w-10 text-primary-foreground" />
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
              <label className="mb-3 block text-sm font-bold text-foreground">Enter verification code</label>
              <div className="flex justify-center gap-2">
                {code.map((digit, i) => (
                  <input key={i} ref={(el) => (inputRefs.current[i] = el)} type="text" inputMode="numeric" maxLength={1} value={digit}
                    onChange={(e) => handleChange(i, e.target.value)} onKeyDown={(e) => handleKeyDown(i, e)}
                    className="h-12 w-12 rounded-lg border border-border bg-input text-center text-lg font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                ))}
              </div>
            </div>

            <button type="submit" className="w-full rounded-full bg-primary py-3.5 text-lg font-bold text-primary-foreground transition-colors hover:bg-accent">
              Verify
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            didn't receive email?{" "}
            <button className="font-semibold text-foreground underline underline-offset-2 hover:text-primary">resend code</button>
          </p>
        </div>

        {/* Right - Image + Step indicator */}
        <div className="relative hidden md:block md:w-1/2">
          <div className="absolute left-1/2 top-6 z-10 flex -translate-x-1/2 items-center gap-0">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold ${
                  step <= 2 ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 bg-card/60 text-foreground"
                }`}>{step === 1 ? <Check className="h-5 w-5" /> : step}</div>
                {i < steps.length - 1 && <div className="h-0.5 w-12 bg-primary/40" />}
              </div>
            ))}
          </div>
          <img src={droneHud} alt="Drone SAR operational view" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Verify;
