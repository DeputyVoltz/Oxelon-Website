import { motion } from "framer-motion";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from "recharts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Zap, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Activity,
  AlertTriangle,
  History
} from "lucide-react";

const DATA = [
  { name: 'Mon', users: 400, api: 2400, revenue: 2400 },
  { name: 'Tue', users: 300, api: 1398, revenue: 2210 },
  { name: 'Wed', users: 200, api: 9800, revenue: 2290 },
  { name: 'Thu', users: 278, api: 3908, revenue: 2000 },
  { name: 'Fri', users: 189, api: 4800, revenue: 2181 },
  { name: 'Sat', users: 239, api: 3800, revenue: 2500 },
  { name: 'Sun', users: 349, api: 4300, revenue: 2100 },
];

export default function AnalyticsView() {
  return (
    <div className="space-y-8 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><TrendingUp className="w-5 h-5" /></div>
            <div><p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Growth</p><p className="text-xl font-bold text-white">+12.5%</p></div>
          </div>
        </Card>
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-400"><Activity className="w-5 h-5" /></div>
            <div><p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">API Uptime</p><p className="text-xl font-bold text-white">99.99%</p></div>
          </div>
        </Card>
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><Users className="w-5 h-5" /></div>
            <div><p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Active Nodes</p><p className="text-xl font-bold text-white">1,204</p></div>
          </div>
        </Card>
        <Card className="glass p-4 border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/10 text-red-400"><ShieldCheck className="w-5 h-5" /></div>
            <div><p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Blocked IPs</p><p className="text-xl font-bold text-white">8,432</p></div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass border-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Global User Activity</h3>
            <Badge variant="outline" className="border-blue-500/30 text-blue-400">7 Day Trend</Badge>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="users" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass border-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">API Usage Volume</h3>
            <Badge variant="outline" className="border-purple-500/30 text-purple-400">Real-time</Badge>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}
                />
                <Bar dataKey="api" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="glass border-white/5 p-6 lg:col-span-1">
          <h3 className="text-lg font-bold text-white mb-6">Automation Status</h3>
          <div className="space-y-4">
            {[
              { label: 'Auto-Expire Premium', status: 'Active', icon: Clock },
              { label: 'Auto-Close Shifts', status: 'Active', icon: Zap },
              { label: 'Database Cleanup', status: 'Active', icon: History },
              { label: 'Security Rate Limiter', status: 'Active', icon: ShieldCheck }
            ].map((task, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <task.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-white/90">{task.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">OK</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="glass border-white/5 p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Security & Audit Logs</h3>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-white">View All</Button>
          </div>
          <div className="space-y-3">
            {[
              { time: '14:32', event: 'Rate limit triggered', target: 'IP: 192.168.1.45', type: 'security' },
              { time: '14:30', event: 'Staff shift auto-closed', target: 'User: sarah_mod', type: 'auto' },
              { time: '14:28', event: 'IP Banned (Suspicious activity)', target: 'IP: 45.231.22.11', type: 'security' },
              { time: '14:25', event: 'Premium expired', target: 'Guild: 994821', type: 'auto' }
            ].map((log, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors group">
                <span className="text-xs font-mono text-muted-foreground">{log.time}</span>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">{log.event}</p>
                  <p className="text-xs text-muted-foreground">{log.target}</p>
                </div>
                <Badge variant="outline" className={log.type === 'security' ? 'border-red-500/30 text-red-400' : 'border-blue-500/30 text-blue-400'}>
                  {log.type}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
