import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, ArrowLeft, Lock, Users, UserPlus, Crown, Search, Check, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

// Mock user database for search
const MOCK_DISCORD_USERS = [
  { username: "amaze_jt", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amaze", id: "123" },
  { username: "amazing_dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev", id: "456" },
  { username: "amaz_oxelon", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ox", id: "789" },
  { username: "jt_official", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jt", id: "101" },
];

export default function StaffPortal() {
  const [staffSearch, setStaffSearch] = useState("");
  const [premiumSearch, setPremiumSearch] = useState("");
  const [staffResults, setStaffResults] = useState<typeof MOCK_DISCORD_USERS>([]);
  const [premiumResults, setPremiumResults] = useState<typeof MOCK_DISCORD_USERS>([]);

  useEffect(() => {
    if (staffSearch.length > 1) {
      setStaffResults(MOCK_DISCORD_USERS.filter(u => u.username.toLowerCase().includes(staffSearch.toLowerCase())));
    } else {
      setStaffResults([]);
    }
  }, [staffSearch]);

  useEffect(() => {
    if (premiumSearch.length > 1) {
      setPremiumResults(MOCK_DISCORD_USERS.filter(u => u.username.toLowerCase().includes(premiumSearch.toLowerCase())));
    } else {
      setPremiumResults([]);
    }
  }, [premiumSearch]);

  return (
    <div className="min-h-screen gradient-dark flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-3xl gradient-blurple flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Lock className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-display font-bold text-white mb-4">Staff Area</h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Manage the Oxelon ecosystem and authorized personnel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="glass p-6 border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Total Users</span>
              </div>
              <div className="text-3xl font-bold text-white">12,402</div>
            </Card>
            <Card className="glass p-6 border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Active Tickets</span>
              </div>
              <div className="text-3xl font-bold text-white">42</div>
            </Card>
          </div>

          <Card className="glass border-white/5 p-8 mb-8 text-center border-dashed">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Administrative Console</h3>
            <p className="text-muted-foreground mb-6">
              Grant premium status and manage staff permissions.
            </p>
            <div className="flex gap-3 justify-center">
               <a href="https://discord.gg/3NZzQeUnJU" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-white/10">View Discord Tickets</Button>
              </a>
            </div>
          </Card>

          <Card className="glass border-yellow-500/20 p-6 mb-8 text-left overflow-visible">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-400" />
              Administrative Access Control
            </h3>
            <div className="space-y-6">
              {/* Staff Search */}
              <div className="relative">
                <label className="text-xs text-muted-foreground mb-2 block">Grant Staff Access</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">@</span>
                  <input 
                    className="bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-sm w-full text-white focus:outline-none focus:border-blue-500/50" 
                    placeholder="Search username..." 
                    value={staffSearch}
                    onChange={(e) => setStaffSearch(e.target.value)}
                  />
                </div>
                
                <AnimatePresence>
                  {staffResults.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 left-0 right-0 mt-2 glass border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                      {staffResults.map((user) => (
                        <button 
                          key={user.id}
                          className="w-full flex items-center gap-3 p-3 hover:bg-white/5 text-left transition-colors border-b border-white/5 last:border-0"
                          onClick={() => {
                            setStaffSearch(user.username);
                            setStaffResults([]);
                          }}
                        >
                          <img src={user.avatar} className="w-8 h-8 rounded-full bg-white/10" alt="" />
                          <div className="flex-1">
                            <div className="text-sm font-bold text-white">{user.username}</div>
                            <div className="text-[10px] text-muted-foreground">ID: {user.id}</div>
                          </div>
                          <Button size="sm" className="h-7 text-[10px] gradient-blurple">Grant</Button>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Premium Search */}
              <div className="relative pt-4 border-t border-white/5">
                <label className="text-xs text-muted-foreground mb-2 block">Grant Premium Access</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">@</span>
                  <input 
                    className="bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-sm w-full text-white focus:outline-none focus:border-yellow-500/50" 
                    placeholder="Search username..." 
                    value={premiumSearch}
                    onChange={(e) => setPremiumSearch(e.target.value)}
                  />
                </div>

                <AnimatePresence>
                  {premiumResults.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 left-0 right-0 mt-2 glass border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                      {premiumResults.map((user) => (
                        <button 
                          key={user.id}
                          className="w-full flex items-center gap-3 p-3 hover:bg-white/5 text-left transition-colors border-b border-white/5 last:border-0"
                          onClick={() => {
                            setPremiumSearch(user.username);
                            setPremiumResults([]);
                          }}
                        >
                          <img src={user.avatar} className="w-8 h-8 rounded-full bg-white/10" alt="" />
                          <div className="flex-1">
                            <div className="text-sm font-bold text-white">{user.username}</div>
                            <div className="text-[10px] text-muted-foreground">ID: {user.id}</div>
                          </div>
                          <Button size="sm" className="h-7 text-[10px] bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 hover:bg-yellow-500/30">Grant</Button>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Card>

          <div className="flex flex-col gap-3">
            <Link href="/moderation">
              <Button className="w-full bg-white/5 hover:bg-white/10 border-white/10 py-6 h-auto">
                Access Status Panel
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
