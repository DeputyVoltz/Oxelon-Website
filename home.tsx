
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Hammer, Ban, Clock, LayoutDashboard, Server, 
  FileWarning, Key, Users, Car, Radio, Gamepad2, 
  ChevronRight, Terminal, Sparkles, Zap, Globe, 
  ExternalLink, LogIn, Layout, Layers, Cpu, Crown, Star, Rocket, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const LOGO_URL = "https://cdn.discordapp.com/attachments/1448117461357432893/1460803623352008911/IMG_5117.jpg?ex=69683ee4&is=6966ed64&hm=caded6761e270848ce9b1c78678fd66d191580ebdc47332cf96c2d2bf881e013&";
const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1458952696974409929&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3D1458952696974409929&integration_type=0&scope=identify+connections+guilds+bot";
const SUPPORT_URL = "https://discord.gg/3NZzQeUnJU";

export default function Home() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    { icon: Shield, title: "Advanced Moderation", desc: "Keep your community safe with warns, kicks, bans, and timeouts. Robust logging included." },
    { icon: Cpu, title: "Roblox Integration", desc: "Real-time game API support for ERLC, Maple County, and more. Live status updates." },
    { icon: Layout, title: "Public Web Dashboard", desc: "Manage your server settings from our beautiful, mobile-friendly web interface." },
    { icon: Layers, title: "Infraction System", desc: "Formal logging and professional embeds for all disciplinary actions across your community." },
    { icon: Users, title: "Staff & Management", desc: "Tools for application systems, tickets, and internal staff communication." },
    { icon: Zap, title: "Lightning Fast", desc: "Global distribution ensures your commands are processed instantly anywhere in the world." },
    { icon: Radio, title: "Announcement System", desc: "Automated community updates and scheduled server announcements." },
    { icon: Terminal, title: "Command Center", desc: "Full control via Discord or our custom web-based console interface." },
    { icon: Globe, title: "Global Economy", desc: "Built-in server economy with shops, trading, and cross-server balances." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={LOGO_URL} alt="Oxelon Logo" className="w-10 h-10 rounded-xl object-cover glow-blurple" />
              <span className="font-display text-xl font-bold text-white">Oxelon</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/commands">
                <Button variant="ghost" className="text-muted-foreground hover:text-white">Commands</Button>
              </Link>
              <Link href="/directory">
                <Button variant="ghost" className="text-muted-foreground hover:text-white">Directory</Button>
              </Link>
              <Link href="/premium">
                <Button variant="ghost" className="text-muted-foreground hover:text-white">Premium</Button>
              </Link>
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
                <Button variant="ghost" className="text-muted-foreground hover:text-white">Support</Button>
              </a>
              <Link href="/login">
                <Button variant="ghost" className="text-muted-foreground hover:text-white">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <a href={INVITE_URL} target="_blank" rel="noreferrer">
                <Button className="bg-white text-black hover:bg-white/90 transition-opacity shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Invite Now
                </Button>
              </a>
            </div>
            <div className="md:hidden">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] p-6 space-y-4 flex flex-col"
            >
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white">Login or Sign Up</Button>
              </Link>
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white">Dashboard</Button>
              </Link>
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white">Support</Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-[#1a1a1a] text-muted-foreground border-none mb-6 px-4 py-2 text-sm font-medium">
              <Zap className="w-3 h-3 mr-2 text-yellow-500" />
              Beta 1.0 | Operational
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-white">Elevate Your Discord</span>
              <br />
              <span className="text-muted-foreground">Community</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4">
              Oxelon provides all-in-one moderation, management, and game integration tools
              for the modern Discord experience.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 md:px-0">
                <a href={INVITE_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 h-auto w-full font-bold" 
                  >
                    Add Oxelon Now
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="bg-[#1a1a1a] text-white hover:bg-[#222] text-lg px-8 py-6 h-auto w-full sm:w-auto"
                  onClick={() => setShowInstructions(!showInstructions)}
                >
                  Quick Setup Guide
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
             {features.map((feature, i) => (
              <Card key={feature.title} className="bg-[#1a1a1a] p-8 border-none hover:bg-[#222] transition-all cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Badge className="bg-yellow-500/10 text-yellow-500 mb-4 px-4 py-1 border-none">Premium Features</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Built for Success</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Unlock the full potential of Oxelon with custom branding, advanced analytics, and automated promotion systems.
            </p>
            <Link href="/premium">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-6 h-auto">View Premium Plans</Button>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <Card className="bg-[#1a1a1a] p-6 text-center border-none">
              <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-white font-bold">Custom Logos</div>
            </Card>
            <Card className="bg-[#1a1a1a] p-6 text-center border-none">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-white font-bold">Fast API</div>
            </Card>
            <Card className="bg-[#1a1a1a] p-6 text-center border-none">
              <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-white font-bold">Priority Help</div>
            </Card>
            <Card className="bg-[#1a1a1a] p-6 text-center border-none">
              <Rocket className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-white font-bold">Early Access</div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="Oxelon Logo" className="w-10 h-10 rounded-xl object-cover" />
              <span className="font-display text-2xl font-bold text-white">Oxelon</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering Discord communities with the world's most advanced moderation and Roblox integration bot.
            </p>
          </div>
          <div className="md:ml-auto col-span-1">
            <h4 className="font-display font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/commands" className="text-muted-foreground hover:text-white">Commands</Link></li>
              <li><Link href="/directory" className="text-muted-foreground hover:text-white">Directory</Link></li>
              <li><Link href="/premium" className="text-muted-foreground hover:text-white">Premium</Link></li>
            </ul>
          </div>
          <div className="md:ml-auto col-span-1">
            <h4 className="font-display font-bold text-white mb-4">Internal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="text-muted-foreground hover:text-white">Sign Up</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#1a1a1a] text-center md:text-left">
          <span className="text-muted-foreground text-sm">© 2026 Oxelon. Build for the community.</span>
        </div>
      </footer>
    </div>
  );
}
