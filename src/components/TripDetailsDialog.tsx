import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

interface TripDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trip: {
    id: string;
    title: string;
    destination: string;
    dates: string;
  } | null;
  onDelete: (id: string) => void;
}

export function TripDetailsDialog({
  open,
  onOpenChange,
  trip,
  onDelete,
}: TripDetailsDialogProps) {
  if (!trip) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{trip.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{trip.destination}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{trip.dates}</span>
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button
            variant="destructive"
            onClick={() => {
              onDelete(trip.id);
              onOpenChange(false);
            }}
          >
            Delete Trip
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}