import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Terminal, Clock, Construction, ArrowLeft } from "lucide-react";

export default function Commands() {
  return (
    <div className="min-h-screen gradient-dark flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl"
      >
        <div className="w-24 h-24 rounded-3xl gradient-blurple flex items-center justify-center mx-auto mb-8 glow-blurple">
          <Terminal className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-5xl font-display font-bold text-white mb-6">
          Commands Portal
        </h1>
        
        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-8 border border-blue-500/30">
          <Clock className="w-4 h-4" />
          <span className="font-medium">Coming Soon</span>
        </div>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Our command documentation is currently being reconstructed to include 
          interactive examples and full Roblox API documentation. Check back in the Beta!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="glass p-6 rounded-2xl text-left border-white/5">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <Construction className="w-4 h-4 text-orange-400" />
              New UI
            </h3>
            <p className="text-sm text-muted-foreground">Interactive command builder for better user experience.</p>
          </div>
          <div className="glass p-6 rounded-2xl text-left border-white/5">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <Construction className="w-4 h-4 text-blue-400" />
              Deep Docs
            </h3>
            <p className="text-sm text-muted-foreground">Detailed parameters and permission requirements for every slash command.</p>
          </div>
        </div>

        <Link href="/">
          <Button size="lg" className="gradient-blurple hover:opacity-90 px-8 py-6 h-auto text-lg shadow-xl">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
