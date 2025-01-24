import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

interface TripCardProps {
  title: string;
  destination: string;
  dates: string;
  onClick: () => void;
}

export function TripCard({ title, destination, dates, onClick }: TripCardProps) {
  return (
    <Card className="card-hover cursor-pointer" onClick={onClick}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span>{destination}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{dates}</span>
        </div>
      </CardContent>
    </Card>
  );
}