import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, Send, User, Shield, ArrowLeft, X, Paperclip } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const INITIAL_MESSAGES = [
  { id: 1, sender: "Oxelon Support", text: "Hello! How can we help you today?", type: "staff", time: "10:00 AM" },
];

export default function Chat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      text: inputValue,
      type: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputValue("");

    // Mock staff response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "Staff Member",
        text: "Thanks for your message. A staff member will be with you shortly.",
        type: "staff",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-dark p-4 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-4xl h-[80vh] flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white font-medium">Support Online</span>
          </div>
        </div>

        <Card className="flex-1 glass border-white/10 flex flex-col overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-blurple flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Oxelon Support Chat</h3>
                <div className="flex items-center gap-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold bg-white/5 px-1.5 rounded">Staff View Enabled</p>
                  <p className="text-xs text-muted-foreground">Typical response time: 5 minutes</p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <X className="w-4 h-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-6">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2 ml-3' : 'order-1 mr-3'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-blue-600' : 'bg-white/10'}`}>
                      {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Shield className="w-4 h-4 text-blue-400" />}
                    </div>
                  </div>
                  <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white">{msg.sender}</span>
                      <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                    </div>
                    <div className={`p-4 rounded-2xl text-sm ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white/5 text-white/90 rounded-tl-none border border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground shrink-0">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Input 
                className="bg-transparent border-white/10 focus-visible:ring-blue-500" 
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button className="gradient-blurple shrink-0" onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
