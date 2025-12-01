import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found - Serge Cantin"
      description="The page you're looking for could not be found."
    >
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-8xl font-bold text-primary/20">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/eng.html">
              <Button className="gap-2" data-testid="button-go-home">
                <Home className="h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="gap-2"
              data-testid="button-go-back"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
