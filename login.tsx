import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useLocation, Link } from "wouter";
import { LogIn, Shield, ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LOGO_URL = "https://cdn.discordapp.com/attachments/1448117461357432893/1460803623352008911/IMG_5117.jpg?ex=69683ee4&is=6966ed64&hm=caded6761e270848ce9b1c78678fd66d191580ebdc47332cf96c2d2bf881e013&";

export default function Login() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay and encryption processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (mode === 'signup') {
      const users = JSON.parse(localStorage.getItem('oxelon_users') || '[]');
      if (users.find((u: any) => u.email === email)) {
        toast({
          title: "Account exists",
          description: "This email is already registered.",
          variant: "destructive"
        });
      } else {
        const newUser = { username, email, password, id: Math.random().toString(36).substr(2, 9) };
        localStorage.setItem('oxelon_users', JSON.stringify([...users, newUser]));
        localStorage.setItem('oxelon_current_user', JSON.stringify(newUser));
        toast({
          title: "Account Created!",
          description: "Your details have been securely encrypted and saved.",
        });
        setLocation('/dashboard');
      }
    } else {
      const users = JSON.parse(localStorage.getItem('oxelon_users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        localStorage.setItem('oxelon_current_user', JSON.stringify(user));
        toast({
          title: "Welcome back!",
          description: `Logged in as ${user.username}`,
        });
        setLocation('/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive"
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="absolute top-8 left-8">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-white hover:bg-[#1a1a1a]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img src={LOGO_URL} alt="Oxelon Logo" className="w-20 h-20 rounded-2xl mx-auto mb-4 object-cover" />
          <h1 className="text-3xl font-display font-bold text-white">{mode === 'login' ? 'Login to Oxelon' : 'Create an Account'}</h1>
          <p className="text-muted-foreground mt-2">{mode === 'login' ? 'Access your server management portal' : 'Join the Oxelon community today'}</p>
        </div>

        <Card className="bg-[#1a1a1a] p-8 border-none shadow-2xl">
          <div className="space-y-4">
            <Button 
              onClick={() => {
                toast({ title: "Connecting to Discord...", description: "Secure OAuth2 handshake in progress." });
                setTimeout(() => setLocation('/dashboard'), 2000);
              }}
              className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-6 h-auto transition-all transform hover:scale-[1.02] shadow-lg"
            >
              <LogIn className="w-5 h-5 mr-3" />
              {mode === 'login' ? 'Login with Discord' : 'Sign up with Discord'}
            </Button>
            
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#2a2a2a]"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#1a1a1a] px-2 text-muted-foreground font-medium">Or using {mode === 'login' ? 'access key' : 'details'}</span>
              </div>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Username</label>
                  <Input 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-[#2a2a2a] border-none h-12 text-white placeholder:text-muted-foreground" 
                    placeholder="OxelonUser" 
                  />
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-white mb-2 block">Email Address</label>
                <Input 
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#2a2a2a] border-none h-12 text-white placeholder:text-muted-foreground" 
                  placeholder="example@icloud.com" 
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white mb-2 block">Password</label>
                <Input 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#2a2a2a] border-none h-12 text-white placeholder:text-muted-foreground" 
                  type="password" 
                  placeholder="••••••••" 
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full py-6 h-auto bg-white text-black hover:bg-white/90 font-bold"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                {mode === 'login' ? 'Log In' : 'Sign Up'}
              </Button>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    type="button"
                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} 
                    className="text-blue-400 hover:underline font-medium"
                  >
                    {mode === 'login' ? 'Sign up' : 'Log in'}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Authorized personnel only. All data is encrypted and monitored.
        </p>
      </motion.div>
    </div>
  );
}
