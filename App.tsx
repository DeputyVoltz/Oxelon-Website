import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Commands from "@/pages/commands";
import TOS from "@/pages/tos";
import Premium from "@/pages/premium";
import Staff from "@/pages/staff";
import Directory from "@/pages/directory";
import Moderation from "@/pages/moderation";
import Chat from "@/pages/chat";
import Banned from "@/pages/banned";
import Dashboard from "@/pages/dashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/commands" component={Commands} />
      <Route path="/tos" component={TOS} />
      <Route path="/premium" component={Premium} />
      <Route path="/staff" component={Staff} />
      <Route path="/directory" component={Directory} />
      <Route path="/moderation" component={Moderation} />
      <Route path="/chat" component={Chat} />
      <Route path="/banned" component={Banned} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
