
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Navigated to:", location.pathname);
  }, [location.pathname]);

  const isTemporaryPage = ["/blog", "/help", "/community", "/login"].includes(location.pathname);

  return (
    <div className="min-h-screen peach-gradient flex flex-col items-center justify-center p-6 text-white">
      <div className="text-center max-w-xl">
        {isTemporaryPage ? (
          <>
            <h1 className="text-4xl font-serif font-medium mb-6 animate-fade-in">
              Coming Soon
            </h1>
            <p className="text-xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              The {location.pathname.substring(1)} page is under construction and will be available soon.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-serif font-medium mb-6 animate-fade-in">
              404
            </h1>
            <p className="text-xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Oops! The page you're looking for doesn't exist.
            </p>
          </>
        )}
        
        <Link to="/" className="inline-block animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="secondary" size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
