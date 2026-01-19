import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Zap, Star, Crown, Rocket, Sparkles, ArrowLeft } from "lucide-react";

export default function Premium() {
  const plans = [
    {
      name: "Standard",
      price: "Free",
      description: "Essential moderation for every server",
      features: [
        "Basic Moderation Tools",
        "Server Information Logs",
        "Basic Roblox API (1 Game)",
        "Standard Support",
      ],
      button: "Current Plan",
      gradient: "from-gray-500/20 to-gray-600/20",
      icon: Zap,
    },
    {
      name: "Pro",
      price: "Free",
      period: "/mo",
      description: "Enhanced management for growing servers",
      features: [
        "Advanced Moderation Suite",
        "Full Roblox API (All Games)",
        "Custom Embed Colors",
        "Priority Support",
        "No Advertisement Links",
      ],
      button: "Claim Free Pro",
      popular: true,
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: Star,
    },
    {
      name: "Ultimate",
      price: "Free",
      period: "/mo",
      description: "The complete Oxelon experience",
      features: [
        "Everything in Pro",
        "Custom Bot Branding",
        "Automated Promotion Systems",
        "API Integration Analytics",
        "24/7 Dedicated Support",
        "Early Access Features",
      ],
      button: "Claim Ultimate (Free)",
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: Crown,
      premium: true,
    },
  ];

  const [checkoutStep, setCheckoutStep] = useState<null | 'success'>(null);

  if (checkoutStep === 'success') {
    return (
      <div className="min-h-screen gradient-dark flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Transaction Successful</h2>
          <p className="text-muted-foreground mb-8">Your premium features have been unlocked. No payment was required as per our "Everything Free" policy.</p>
          <Link href="/dashboard">
            <Button className="gradient-blurple w-full py-6">Enter Premium Dashboard</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-dark p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-blue-500/20 text-blue-400 mb-4 px-4 py-1">Premium Access</Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Elevate Your Server
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock powerful tools, customization, and exclusive features to take your Discord community to the next level.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`glass p-8 h-full relative border-white/5 flex flex-col ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white">Most Popular</Badge>
                )}
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm mb-8">{plan.description}</p>

                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => setCheckoutStep('success')}
                  className={`w-full py-6 h-auto text-lg ${
                    plan.name === 'Standard' ? 'bg-white/5 hover:bg-white/10 text-white' : 'gradient-blurple hover:opacity-90'
                  }`}
                >
                  {plan.button}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Rocket className="w-32 h-32 text-white" />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Custom Bot Branding</h2>
              <p className="text-muted-foreground mb-6">
                Want Oxelon to feel like your own server's bot? With our branding package, you can customize the bot's name, avatar, and presence messages across all your guilds.
              </p>
              <div className="flex gap-4">
                <Badge variant="outline" className="border-blue-500/30 text-blue-400">Custom Names</Badge>
                <Badge variant="outline" className="border-blue-500/30 text-blue-400">Custom Avatars</Badge>
                <Badge variant="outline" className="border-blue-500/30 text-blue-400">Personal IDs</Badge>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Card className="glass p-6 w-full max-w-sm border-blue-500/30 rotate-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500" />
                  <div>
                    <div className="font-bold text-white">Your Server Bot</div>
                    <div className="text-xs text-blue-400">BOT • Level 50</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded" />
                  <div className="h-2 w-3/4 bg-white/5 rounded" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
