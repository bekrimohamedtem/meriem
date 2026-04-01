import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff ,Check , User , CircleUser } from "lucide-react";
import rescueBg from "@/assets/rescue-bg.jpg";
import droneHud from "@/assets/drone-hud.png";

const steps = [1, 2, 3];

const Infos = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeGps, setAgreeGps] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{
        backgroundImage: `url(${rescueBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full max-w-[900px] overflow-hidden rounded-2xl bg-card/90 shadow-2xl backdrop-blur-sm">
        
        <div className="flex w-full flex-col justify-center px-8 py-3 pb-7 md:w-1/2 md:px-12">
          {/* fill   Here  */}
           <div className="flex flex-col items-center">
              <CircleUser className="w-20 h-20 mb-2" />
              <button className="bg-[#325c44] py-1 px-2 rounded-md text-white ">Upload a photo</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <input placeholder="Birth day date" className="w-[58%] inline sm:mr-5 sm:w-[45%] sm:pr-3 mr-2 rounded-full border border-border bg-input px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>
              <input placeholder="Gendre" className="w-[39%] rounded-full border sm:w-[35%] sm:pr-3 border-border bg-input pl-5 pr-2 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>
            </div>
            <input className="w-full mt-2 rounded-full border border-border bg-input px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="First Phone Number"/>
            <input className="w-full mt-2 rounded-full border border-border bg-input px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Second Phone Number"/>
            <input className="w-full mt-2 rounded-full border border-border bg-input px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Address"/>

          {/* Left - Form */}
           {/* second part */}
           <div>
            <label className="mt-5 mb-1 block text-sm font-bold text-foreground">Emergency Contact</label>
            <input placeholder="Phone Number" className="w-[48%] mr-3 inline rounded-full border border-border bg-input px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>
            <input placeholder="Contact Name" className="w-[48%] rounded-full border border-border bg-input pl-5 pr-2 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>  
           </div>
           <div>
            <label className="mt-2 mb-1 block text-sm font-bold text-foreground">Medical Information</label>
            <input placeholder="Blood Type" className="w-[48%] mr-3 inline rounded-full border border-border bg-input px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>
            <input placeholder="Allergies" className="w-[48%] rounded-full border border-border bg-input pl-5 pr-2 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>  
           </div>
           <div>
            <label className="mt-2 mb-1 block text-sm font-bold text-foreground">Physical Description </label>
            <input placeholder="Hight" className="w-[48%] mr-3 inline rounded-full border border-border bg-input px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>
            <input placeholder="Weight" className="w-[48%] rounded-full border border-border bg-input pl-5 pr-2 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>  
           </div>
           <label className="flex cursor-pointer text-red-600 mt-6 items-start gap-2 text-sm font-semibold text-foreground">Your data is private and used only during emergency operations.</label>
           <button type="submit"  className="w-full rounded-full bg-primary py-3.5 text-lg font-bold text-primary-foreground transition-colors hover:bg-accent">
              Save Profile
            </button>
    </form>
      </div>

        {/* Right - Image + Step indicator */}
        <div className="relative hidden md:block md:w-1/2">
        <div className="flex items-center justify-center gap-2 my-3">
  {/* Cercle vert avec Check */}
  <div className="w-[42px] h-[42px] rounded-full bg-[#325c44] flex items-center justify-center">
    <Check className="w-6 h-6 text-[#e4ddd3]" strokeWidth={3} />
  </div>

  {/* Trait */}
  <div className="h-[2px] w-[90px] bg-[#325c44]"></div>

  {/* Cercle 2 */}
  <div className="w-[42px] h-[42px] rounded-full bg-[#325c44] flex items-center justify-center">
    <Check className="w-6 h-6 text-[#e4ddd3]" strokeWidth={3} />
  </div>

  {/* Trait */}
  <div className="h-[2px] w-[90px] bg-[#325c44]"></div>

  {/* Cercle 3 */}
  <p className="rounded-full bg-[#325c44] w-[42px] h-[42px] flex text-[#e4ddd3] items-center justify-center text-2xl font-semibold">
    3
  </p>
</div>
          <div className=" border-black  w-[95%] h-[85%] overflow-hidden rounded-md">
  <img src={droneHud} alt="Drone SAR operational view" className="w-full h-full object-cover border-3 border-black" />
</div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
