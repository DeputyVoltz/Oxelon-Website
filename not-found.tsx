import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-dark flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="relative mb-8">
          <h1 className="text-[12rem] font-display font-black text-white/5 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <FileQuestion className="w-12 h-12 text-red-500" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-display font-bold text-white mb-4">You're Lost in Space</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <Card className="glass p-6 mb-8 border-white/5 text-left">
          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Home className="w-4 h-4 text-blue-400" />
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/" className="text-sm text-muted-foreground hover:text-white transition-colors">Home Page</Link>
            <Link href="/commands" className="text-sm text-muted-foreground hover:text-white transition-colors">Commands</Link>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-white transition-colors">Login Portal</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Support</a>
          </div>
        </Card>

        <Link href="/">
          <Button size="lg" className="gradient-blurple hover:opacity-90 w-full py-6 h-auto text-lg shadow-xl">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Take Me Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
