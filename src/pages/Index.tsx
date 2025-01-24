import { useState } from "react";
import { Header } from "@/components/Header";
import { TripCard } from "@/components/TripCard";
import { AddTripButton } from "@/components/AddTripButton";
import { useToast } from "@/components/ui/use-toast";

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

  const handleAddTrip = () => {
    toast({
      title: "Coming Soon",
      description: "Trip creation will be available in the next update!",
    });
  };

  const handleTripClick = (tripId: string) => {
    toast({
      title: "Coming Soon",
      description: "Trip details will be available in the next update!",
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
              onClick={() => handleTripClick(trip.id)}
            />
          ))}
          <AddTripButton onClick={handleAddTrip} />
        </div>
      </main>
    </div>
  );
};

export default Index;