import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Ban, ArrowLeft, ShieldAlert } from "lucide-react";

export default function Banned() {
  return (
    <div className="min-h-screen bg-[#0a0b14] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center relative z-10"
      >
        <div className="w-24 h-24 rounded-3xl bg-red-500/20 flex items-center justify-center mx-auto mb-8 border border-red-500/30">
          <Ban className="w-12 h-12 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-display font-bold text-white mb-4">Access Denied</h1>
        <p className="text-red-400 text-xl font-medium mb-4">You have been banned</p>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Your access to the Oxelon web portal has been revoked due to a violation of our terms of service. 
          If you believe this is an error, please appeal through our support server.
        </p>

        <div className="flex flex-col gap-4">
          <a href="https://discord.gg/3NZzQeUnJU" target="_blank" rel="noreferrer">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12">
              <ShieldAlert className="w-4 h-4 mr-2" />
              Appeal Ban
            </Button>
          </a>
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Safety
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
