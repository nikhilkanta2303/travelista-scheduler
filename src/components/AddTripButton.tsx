import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface AddTripButtonProps {
  onClick: () => void;
}

export function AddTripButton({ onClick }: AddTripButtonProps) {
  return (
    <Button 
      onClick={onClick}
      className="w-full h-[200px] border-2 border-primary border-dashed bg-background hover:bg-accent/50"
    >
      <Plus className="mr-2 h-5 w-5" />
      Add New Trip
    </Button>
  );
}