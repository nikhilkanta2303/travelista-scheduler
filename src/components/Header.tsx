import { Plane } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Plane className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Travel Planner</h1>
        </div>
      </div>
    </header>
  );
}