import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProjectDetails from "@/pages/project-details";
import ProjectsPage from "@/pages/projects";
import Nav from "@/components/nav";
import BackToTop from "@/components/back-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { Helmet } from "react-helmet";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/project/:id" component={ProjectDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <title>Muhammad Aamir - React Native Developer</title>
          <meta
            name="description"
            content="Portfolio of Muhammad Aamir, a React Native developer specializing in building beautiful, performant mobile experiences."
          />
          <meta
            name="keywords"
            content="React Native, Mobile Development, iOS, Android, Portfolio"
          />
          <meta
            property="og:title"
            content="Muhammad Aamir - React Native Developer"
          />
          <meta
            property="og:description"
            content="Portfolio of Muhammad Aamir, a React Native developer specializing in building beautiful, performant mobile experiences."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Muhammad Aamir - React Native Developer"
          />
          <meta
            name="twitter:description"
            content="Portfolio of Muhammad Aamir, a React Native developer specializing in building beautiful, performant mobile experiences."
          />
        </Helmet>
        <Nav />
        <Router />
        <BackToTop />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
