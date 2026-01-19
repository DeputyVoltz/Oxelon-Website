import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ShieldCheck, Scale, FileText } from "lucide-react";

export default function TOS() {
  return (
    <div className="min-h-screen gradient-dark p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl gradient-blurple flex items-center justify-center shadow-lg">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-white">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </div>

        <Card className="glass p-8 border-white/5">
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  1. Acceptance of Terms
                </h2>
                <p>
                  By inviting Oxelon to your Discord server or using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  2. Usage Policy
                </h2>
                <p>
                  Oxelon is designed for moderation and management. You may not use the bot for illegal activities, harassment, or any purpose that violates Discord's own Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  3. Data Collection
                </h2>
                <p>
                  We collect minimal data necessary for bot functionality, including server IDs and basic user information for moderation logs. We never sell your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-400" />
                  4. Premium Subscriptions
                </h2>
                <p>
                  Premium features are provided on a subscription basis. Payments are non-refundable unless required by law. We reserve the right to modify pricing with prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  5. Termination
                </h2>
                <p>
                  We reserve the right to terminate access to Oxelon for any server or user that violates these terms or engages in behavior that harms our services or other users.
                </p>
              </section>
            </div>
          </ScrollArea>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Questions about our terms? Contact us on our <a href="https://discord.gg/3NZzQeUnJU" className="text-blue-400 hover:underline">Support Server</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
