import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Shield, 
  User, 
  History, 
  AlertTriangle, 
  FileText, 
  CheckCircle2, 
  Play, 
  Square,
  ChevronRight,
  Plus,
  Search,
  Filter
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StaffManagement() {
  const [onShift, setOnShift] = useState(false);
  const [shiftTime, setShiftTime] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (onShift) {
      interval = setInterval(() => setShiftTime(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [onShift]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const infractions = [
    { id: 1, user: "jake_dev", type: "Warning", reason: "Spamming in #general", staff: "amaze_jt", date: "2026-01-15" },
    { id: 2, user: "sarah_mod", type: "Note", reason: "Good participation in event", staff: "system", date: "2026-01-14" },
    { id: 3, user: "user_123", type: "Warning", reason: "Inappropriate language", staff: "amaze_jt", date: "2026-01-14" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Weekly Hours</p>
              <p className="text-xl font-bold text-white">14.5h</p>
            </div>
          </div>
        </Card>
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Shifts Completed</p>
              <p className="text-xl font-bold text-white">12</p>
            </div>
          </div>
        </Card>
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Warnings Issued</p>
              <p className="text-xl font-bold text-white">42</p>
            </div>
          </div>
        </Card>
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Staff Level</p>
              <p className="text-xl font-bold text-white">Admin</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Shift Control */}
        <div className="space-y-6">
          <Card className="glass border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/5">
              <h3 className="text-lg font-bold text-white">Shift Manager</h3>
              <p className="text-xs text-muted-foreground">Track your time and activity on the platform.</p>
            </div>
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className={`text-5xl font-mono font-bold transition-colors ${onShift ? 'text-blue-400 glow-text-blue' : 'text-muted-foreground'}`}>
                  {formatTime(shiftTime)}
                </div>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest font-bold">
                  {onShift ? 'Active Session' : 'Inactive'}
                </p>
              </div>
              <Button 
                onClick={() => setOnShift(!onShift)}
                className={`w-full py-8 h-auto text-lg transition-all ${
                  onShift 
                  ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20' 
                  : 'gradient-blurple shadow-lg hover:scale-[1.02]'
                }`}
              >
                {onShift ? (
                  <><Square className="w-5 h-5 mr-3 fill-current" /> End Shift</>
                ) : (
                  <><Play className="w-5 h-5 mr-3 fill-current" /> Start Shift</>
                )}
              </Button>
            </div>
            <div className="p-4 bg-blue-500/5 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${onShift ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className="text-[10px] text-muted-foreground font-bold uppercase">Discord Sync</span>
              </div>
              <Badge variant="outline" className="text-[8px] h-4 border-white/10 text-muted-foreground">AUTO</Badge>
            </div>
          </Card>

          <Card className="glass border-white/5">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">Recent Shifts</h4>
              <History className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="p-2 space-y-1">
              {[
                { date: "Today", time: "2h 15m", status: "Completed" },
                { date: "Yesterday", time: "4h 10m", status: "Completed" },
                { date: "14 Jan", time: "1h 45m", status: "Incomplete" },
              ].map((shift, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
                  <div>
                    <p className="text-xs font-medium text-white">{shift.date}</p>
                    <p className="text-[10px] text-muted-foreground">{shift.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-blue-400">{shift.time}</p>
                    <ChevronRight className="w-3 h-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Infractions & Staff Tools */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="infractions" className="w-full">
            <TabsList className="bg-white/5 border border-white/10 w-full justify-start h-12 p-1 gap-2">
              <TabsTrigger value="infractions" className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-400">
                Infractions
              </TabsTrigger>
              <TabsTrigger value="search" className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-400">
                User Lookup
              </TabsTrigger>
              <TabsTrigger value="notes" className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-400">
                Internal Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="infractions" className="mt-6 space-y-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search infractions..." 
                    className="bg-white/5 border-white/10 pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="gradient-blurple">
                  <Plus className="w-4 h-4 mr-2" /> New Entry
                </Button>
              </div>

              <Card className="glass border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Target User</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Type</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Reason</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Staff</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {infractions.map((inf) => (
                        <tr key={inf.id} className="hover:bg-white/5 transition-colors group">
                          <td className="px-6 py-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                              <User className="w-4 h-4 text-blue-400" />
                            </div>
                            <span className="text-sm font-medium text-white">{inf.user}</span>
                          </td>
                          <td className="px-6 py-4">
                            <Badge className={inf.type === 'Warning' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}>
                              {inf.type}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-xs text-muted-foreground truncate max-w-[200px]">{inf.reason}</p>
                          </td>
                          <td className="px-6 py-4 text-xs text-white/80 font-medium">{inf.staff}</td>
                          <td className="px-6 py-4 text-xs text-muted-foreground text-right">{inf.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="search" className="mt-6">
              <Card className="glass border-white/5 p-12 text-center border-dashed">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Global User Search</h4>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-8">Enter a Discord ID or username to view their history across the Oxelon network.</p>
                <div className="max-w-md mx-auto flex gap-2">
                  <Input placeholder="Discord ID / Username" className="bg-white/5 border-white/10" />
                  <Button className="gradient-blurple px-8">Lookup</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
