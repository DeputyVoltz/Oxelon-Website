import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Gamepad2, Users, Globe, ExternalLink, ArrowLeft, Search, PlusCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const SERVERS: any[] = [];

export default function Directory() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen gradient-dark p-6 md:p-12">
      <AnimatePresence>
        {showRegister && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg"
            >
              <Card className="glass p-8 border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 gradient-blurple" />
                <button 
                  onClick={() => setShowRegister(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-white mb-6">Register Your Server</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Server Name</label>
                    <Input className="bg-white/5 border-white/10" placeholder="My Awesome Community" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Description</label>
                    <Textarea className="bg-white/5 border-white/10" placeholder="Tell us about your server..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Links</label>
                    <Input className="bg-white/5 border-white/10" placeholder="Discord Invite URL" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Tags</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['Roleplay', 'Design', 'Chatting', 'YouTube', 'Gaming'].map(tag => (
                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-white/5">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full gradient-blurple py-6 h-auto mt-4">Submit Registration</Button>
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold text-white mb-2">Server Directory</h1>
            <p className="text-muted-foreground text-lg">Browse and join private game servers</p>
          </div>
          <Button onClick={() => setShowRegister(true)} className="gradient-blurple">
            <PlusCircle className="w-4 h-4 mr-2" />
            Register Server
          </Button>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10 bg-white/5 border-white/10 h-12" placeholder="Search servers or games..." />
          </div>
          <Button variant="outline" className="h-12 border-white/10">Filters</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVERS.length > 0 ? (
            SERVERS.map((server) => (
              <Card key={server.name} className="glass p-6 hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Gamepad2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{server.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-[10px] uppercase py-0">{server.game}</Badge>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {server.region}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className={
                    server.status === 'Public' ? 'bg-green-500/20 text-green-400' : 
                    server.status === 'Private' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }>
                    {server.status}
                  </Badge>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-white font-medium">{server.players}</span>
                  </div>
                  <Button size="sm" className="gradient-blurple">
                    Join Server
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No servers found</h3>
              <p className="text-muted-foreground">The directory is currently empty. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
