import { MapPin, Phone, Mail, CheckCircle, AlertTriangle, User, Shield, Heart, Clock, Pencil } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import rescueBg from "@/assets/rescue-bg.jpg";

const Profile = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${rescueBg})` }}>
      <div className="min-h-screen bg-background/20">
        <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-8 pt-28">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-secondary border-2 border-border flex items-center justify-center shrink-0">
            <User className="w-10 h-10 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Sarah Ali</h1>
            <p className="text-sm text-gray-700">Emergency assistance user · Oran, Algeria</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Pencil className="w-3.5 h-3.5" />
            Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Personal Information */}
          <Card className="lg:col-span-2 border-none bg-white/20 backdrop-blur-md shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Full Name", "Sarah Ali"],
                  ["Birthday", "16/06/1998"],
                  ["Gender", "Female"],
                  ["Phone", "+213 546 987 034"],
                  ["Email", "Sarah.Ali@gmail.com"],
                  ["Location", "Oran, Algeria"],
                ].map(([label, value]) => (
                  <div key={label} className="space-y-1">
                    <p className="text-gray-700 text-xs uppercase tracking-wide">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="border-none bg-white/20 backdrop-blur-md shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <div className="w-8 h-8 rounded-lg bg-destructive/10 text-black flex items-center justify-center">
                  <Phone className="w-4 h-4 text-destructive" />
                </div>
                Emergency Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-black">
              <p className="font-semibold">Ahemed Ali</p>
              <div className="flex items-center gap-2 text-sm text-black">
                <Phone className="w-3.5 h-3.5" />
                <span>+213 555 987 654</span>
              </div>
            </CardContent>
          </Card>

          {/* Safety Settings */}
          <Card className="border-none bg-white/20 backdrop-blur-md shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                Safety Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-black">Share GPS location during emergencies</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-black">Receive rescue alerts</span>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Medical Information */}
          <Card className="border-none bg-white/20 backdrop-blur-md shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-destructive" />
                </div>
                Medical Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-700 text-xs uppercase tracking-wide">Blood Type</p>
                  <p className="font-bold text-lg">O+</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-700 text-xs uppercase tracking-wide">Allergies</p>
                  <p className="font-bold text-lg">None</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Requests */}
          <Card className="border-none bg-white/20 backdrop-blur-md shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                Recent Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { type: "Flood", date: "Jan 20, 2025" },
                { type: "Earthquake", date: "Jan 05, 2025" },
              ].map((req) => (
                <div key={req.type} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm  font-medium">{req.type}</span>
                  </div>
                  <span className="text-xs text-gray-700">{req.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Emergency Button */}
        <div className="mt-8 flex justify-center">
          <Button variant="destructive" size="lg" className="gap-2 px-8">
            <AlertTriangle className="w-5 h-5" />
            Request emergency drone assistance
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
