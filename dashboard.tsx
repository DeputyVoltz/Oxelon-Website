import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Shield, 
  Power, 
  Terminal, 
  Zap, 
  Lock,
  LogOut,
  Bell,
  Search,
  Check,
  ChevronRight,
  Monitor,
  Cpu,
  Database,
  Radio,
  Crown,
  Sparkles,
  User,
  Clock,
  History,
  AlertTriangle,
  Play,
  Square,
  Plus,
  Star,
  Gamepad2,
  Car,
  Globe,
  Menu,
  X,
  CreditCard,
  Link as LinkIcon,
  RefreshCw,
  MoreHorizontal,
  ExternalLink
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsView from "@/components/dashboard/AnalyticsView";

const LOGO_URL = "https://cdn.discordapp.com/attachments/1448117461357432893/1460803623352008911/IMG_5117.jpg?ex=69683ee4&is=6966ed64&hm=caded6761e270848ce9b1c78678fd66d191580ebdc47332cf96c2d2bf881e013&";

function DashboardHome({ user, onNavigate }: { user: any, onNavigate: (tab: string) => void }) {
  const features = [
    { id: "bot", title: "Server Settings", desc: "Configure bot settings, channels and roles", icon: Settings },
    { id: "sessions", title: "Session Management", desc: "Schedule and manage Discord RP sessions", icon: Clock },
    { id: "staff", title: "Staff Management", desc: "Manage staff members, LOA tracking and staff tools", icon: BarChart3 },
    { id: "infractions", title: "Moderation", desc: "View and manage warnings, kicks, bans and timeouts", icon: Shield },
    { id: "economy", title: "Economy System", desc: "Configure currency and economy settings", icon: LinkIcon },
    { id: "premium", title: "Premium Features", desc: "Unlock more bot features with premium subscription", icon: Star, premium: true },
  ];

  return (
    <div className="space-y-8">
      <Card className="bg-[#1a1a1a] border-none p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[#2a2a2a] overflow-hidden">
            <img src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=vortex"} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Hello, {user?.username || "vortexplayz20"}</h2>
          <p className="text-muted-foreground mb-8">Managing 7 servers</p>
          
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Button className="bg-[#2a2a2a] hover:bg-[#333] text-white py-6 h-auto rounded-xl flex items-center justify-center gap-3">
              <Database className="w-5 h-5" />
              Manage Servers
            </Button>
            <Button 
              onClick={() => onNavigate("premium")}
              className="bg-transparent hover:bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 py-6 h-auto rounded-xl flex items-center justify-center gap-3"
            >
              <Star className="w-5 h-5" />
              Premium Features
            </Button>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-bold text-white mb-6">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              onClick={() => onNavigate(feature.id)}
              className="bg-[#1a1a1a] border-none p-6 hover:bg-[#222] transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${feature.premium ? 'bg-yellow-500/10 text-yellow-500' : 'bg-[#2a2a2a] text-muted-foreground'} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-bold ${feature.premium ? 'text-yellow-500' : 'text-white'}`}>{feature.title}</h4>
                    {feature.premium && <Badge className="bg-yellow-500/20 text-yellow-500 border-none">PREMIUM</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">{feature.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-white transition-colors">
                    Explore <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServersView() {
  const serversWith = [
    { name: "West London Role Play | WLRP", role: "Manager", icon: "WL" },
  ];
  const serversWithout = [
    { name: "DeputyBrent Central", role: "Manager" },
    { name: "VortexPlayz Central", role: "Owner" },
    { name: "Vortex Studios", role: "Owner" },
    { name: "Central London Roleplay", role: "Owner" },
    { name: "Oxelon Systems", role: "Owner" },
    { name: "Prime Customs", role: "Owner" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">My Servers</h2>
        <Button variant="ghost" className="bg-[#1a1a1a] text-muted-foreground hover:text-white rounded-xl">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Servers with Oxelon</h3>
          <div className="space-y-3">
            {serversWith.map(s => (
              <Card key={s.name} className="bg-[#1a1a1a] border-none p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white font-bold">{s.icon}</div>
                  <div>
                    <p className="text-white font-bold">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button className="bg-[#2a2a2a] hover:bg-[#333] text-white rounded-xl px-8">Dashboard <ChevronRight className="w-4 h-4 ml-2" /></Button>
                  <Button variant="ghost" size="icon" className="bg-[#2a2a2a] text-white rounded-xl"><Settings className="w-4 h-4" /></Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Servers without Oxelon</h3>
          <div className="space-y-3">
            {serversWithout.map(s => (
              <Card key={s.name} className="bg-[#1a1a1a] border-none p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white font-bold">?</div>
                  <div>
                    <p className="text-white font-bold">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.role}</p>
                  </div>
                </div>
                <Button className="bg-[#2a2a2a] hover:bg-[#333] text-white rounded-xl px-8">Add Bot to Server</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PremiumManagement({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-6">
      <Card className="bg-[#1a1a1a] border-none p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-500">
            <Crown className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-500">Oxelon Premium Management</h3>
            <p className="text-sm text-muted-foreground">Premium access is $4.99/mo</p>
          </div>
        </div>
        <Button variant="outline" className="bg-transparent border-[#2a2a2a] text-muted-foreground hover:text-white rounded-xl">
          <MessageSquare className="w-4 h-4 mr-2" /> Support
        </Button>
      </Card>

      <Card className="bg-[#1a1a1a] border-none p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-6 text-yellow-500">
          <Crown className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">No Oxelon Premium Access</h3>
        <p className="text-muted-foreground max-w-sm mx-auto mb-8 text-center">
          You currently don't have access to Oxelon Premium. Visit our store or Discord server to upgrade your account.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#0a0a0a] font-bold py-6 h-auto px-10 rounded-xl">
            <CreditCard className="w-5 h-5 mr-3" />
            Buy Premium ($4.99)
          </Button>
          <a href="https://discord.gg/3NZzQeUnJU" target="_blank" rel="noreferrer">
            <Button className="bg-[#2a2a2a] hover:bg-[#333] text-white py-6 h-auto px-10 rounded-xl w-full">
              <LogIn className="w-5 h-5 mr-3" />
              Join Discord
            </Button>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('oxelon_current_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('oxelon_current_user');
    setLocation('/');
  };

  const navItems = [
    { id: "home", label: "Dashboard", icon: LayoutDashboard },
    { id: "roblox", label: "Verify Roblox", icon: LinkIcon },
    { id: "servers", label: "My Servers", icon: Database },
  ];

  const resourceItems = [
    { id: "support", label: "Support Server", icon: Bell, external: "https://discord.gg/3NZzQeUnJU" },
    { id: "premium", label: "Premium", icon: Crown },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome user={user} onNavigate={setActiveTab} />;
      case "servers":
        return <ServersView />;
      case "premium":
        return <PremiumManagement onNavigate={setActiveTab} />;
      case "analytics":
        return <AnalyticsView />;
      default:
        return (
          <div className="py-20 text-center">
            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Coming Soon</h3>
            <p className="text-muted-foreground">This section is currently under development.</p>
            <Button onClick={() => setActiveTab("home")} className="mt-6 bg-[#2a2a2a] text-white">Return Home</Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar Mobile Toggle */}
      <div className="md:hidden h-16 bg-[#111] border-b border-[#222] flex items-center justify-between px-6 z-[100]">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} className="w-8 h-8 rounded-lg" alt="Logo" />
          <span className="font-bold text-white">Oxelon</span>
        </div>
        <Button size="icon" variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
          {sidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-0 z-50 bg-[#111] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-72 md:flex md:flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 md:p-8 flex flex-col h-full border-r border-[#222]">
          {/* User Profile in Sidebar */}
          <div className="mb-10 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=vortex"} 
                  className="w-12 h-12 rounded-full border-2 border-[#222]" 
                  alt="" 
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#111]" />
              </div>
              <div className="overflow-hidden">
                <p className="text-white font-bold truncate">{user?.username || "vortexplayz20"}</p>
                <p className="text-[10px] text-muted-foreground truncate">{user?.id || "1120700187770376325"}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8 overflow-y-auto">
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2 mb-4">General</p>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id 
                        ? "bg-[#2a2a2a] text-white shadow-lg" 
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2 mb-4">Resources</p>
              <div className="space-y-1">
                {resourceItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.external) window.open(item.external, '_blank');
                      else setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id 
                        ? "bg-[#2a2a2a] text-white shadow-lg" 
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.id === 'premium' ? 'text-yellow-500' : ''}`} />
                    <span className="font-medium text-sm">{item.label}</span>
                    {item.external && <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-[#222]">
            <Button 
              onClick={handleSignOut}
              variant="ghost" 
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/5 rounded-xl h-12"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#0a0a0a] min-h-0 relative">
        <header className="h-20 bg-[#0a0a0a] border-b border-[#222] flex items-center justify-between px-6 md:px-10 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <Button size="icon" variant="ghost" onClick={() => setSidebarOpen(true)} className="text-white">
                <Menu />
              </Button>
            </div>
            <h2 className="text-xl font-bold text-white">Central Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="md:hidden w-8 h-8 rounded-full border border-[#222] overflow-hidden">
              <img src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=vortex"} alt="" />
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
