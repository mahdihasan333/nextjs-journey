"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div className="text-center flex items-center justify-center flex-col gap-4 min-h-screen">
      <h1 className="text-4xl">This is the Home page</h1>
      <Button>Click</Button>

      <button onClick={handleNavigation} className="btn btn-primary">
        Dashboard
      </button>
    </div>
  );
}
