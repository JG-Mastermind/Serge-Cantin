import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import HomePage from "@/pages/home";
import SergeCantin from "@/pages/serge-cantin";
import Realisations from "@/pages/realisations";
import Stands from "@/pages/stands";
import Workshop from "@/pages/workshop";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/eng.html" component={HomePage} />
      <Route path="/sc_e.html" component={SergeCantin} />
      <Route path="/real_e.html" component={Realisations} />
      <Route path="/stand_e.html" component={Stands} />
      <Route path="/cw_e.html" component={Workshop} />
      <Route path="/contact_e.html" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/index.html" component={Blog} />
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
