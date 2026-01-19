import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, ArrowLeft, Search, Filter, Ban } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Moderation() {
  return (
    <div className="min-h-screen gradient-dark p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center shadow-xl">
              <ShieldAlert className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h1 className="text-4xl font-display font-bold text-white">Moderation Panel</h1>
              <p className="text-muted-foreground text-lg">Staff only administrative area</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass p-12 border-dashed border-white/10 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Panel is currently empty</h2>
              <p className="text-muted-foreground max-w-sm">
                There are currently no active moderation cases or flagged members to display.
              </p>
            </Card>

            <Card className="glass p-6 border-white/5">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-400" />
                Quick Search
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <Input className="bg-white/5 border-white/10 h-12 flex-1" placeholder="Search User ID..." />
                <Button className="h-12 gradient-blurple px-8">Search</Button>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="glass p-6 border-red-500/20">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Ban className="w-5 h-5 text-red-500" />
                Website Ban Control
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Directly revoke access to the Oxelon web portal for specific User IDs.
              </p>
              <div className="space-y-4">
                <Input className="bg-white/5 border-white/10" placeholder="User ID to ban..." />
                <Button variant="destructive" className="w-full py-6">
                  Revoke Web Access
                </Button>
              </div>
            </Card>

            <Card className="glass p-6 border-white/5">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-400" />
                Panel Settings
              </h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-xs hover:bg-white/5" disabled>Security Logs</Button>
                <Button variant="ghost" className="w-full justify-start text-xs hover:bg-white/5" disabled>Staff Permissions</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
