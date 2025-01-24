import { useState } from "react";
import { Header } from "@/components/Header";
import { TripCard } from "@/components/TripCard";
import { AddTripButton } from "@/components/AddTripButton";
import { useToast } from "@/hooks/use-toast";
import { AddTripDialog } from "@/components/AddTripDialog";
import { TripDetailsDialog } from "@/components/TripDetailsDialog";
import { format } from "date-fns";

interface Trip {
  id: string;
  title: string;
  destination: string;
  dates: string;
}

const Index = () => {
  const { toast } = useToast();
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: "1",
      title: "Summer Vacation",
      destination: "Paris, France",
      dates: "Jul 15 - Jul 30, 2024"
    },
    {
      id: "2",
      title: "Weekend Getaway",
      destination: "Lake Tahoe, USA",
      dates: "Aug 5 - Aug 7, 2024"
    }
  ]);
  const [isAddTripOpen, setIsAddTripOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [isTripDetailsOpen, setIsTripDetailsOpen] = useState(false);

  const handleAddTrip = (data: {
    title: string;
    destination: string;
    startDate: string;
    endDate: string;
  }) => {
    const newTrip: Trip = {
      id: (trips.length + 1).toString(),
      title: data.title,
      destination: data.destination,
      dates: `${format(new Date(data.startDate), "MMM d")} - ${format(
        new Date(data.endDate),
        "MMM d, yyyy"
      )}`,
    };
    setTrips([...trips, newTrip]);
    toast({
      title: "Success",
      description: "Your trip has been created!",
    });
  };

  const handleTripClick = (trip: Trip) => {
    setSelectedTrip(trip);
    setIsTripDetailsOpen(true);
  };

  const handleDeleteTrip = (tripId: string) => {
    setTrips(trips.filter((trip) => trip.id !== tripId));
    toast({
      title: "Success",
      description: "Trip has been deleted!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Your Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              title={trip.title}
              destination={trip.destination}
              dates={trip.dates}
              onClick={() => handleTripClick(trip)}
            />
          ))}
          <AddTripButton onClick={() => setIsAddTripOpen(true)} />
        </div>
      </main>
      <AddTripDialog
        open={isAddTripOpen}
        onOpenChange={setIsAddTripOpen}
        onSubmit={handleAddTrip}
      />
      <TripDetailsDialog
        open={isTripDetailsOpen}
        onOpenChange={setIsTripDetailsOpen}
        trip={selectedTrip}
        onDelete={handleDeleteTrip}
      />
    </div>
  );
};

export default Index;