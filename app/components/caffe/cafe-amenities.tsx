import {TooltipShell} from "~/components/tooltip-shell";
import {Badge} from "~/components/ui/badge";
import {AirVent, DoorClosed, ParkingSquare, Power, Tent, Toilet, Zap} from "lucide-react";
import React from "react";

export function CafeAmenities({amenities}: { amenities: string[] }) {
    if (!amenities || amenities.length === 0) {
        return null;
    }
    return (
        <div className="flex flex-wrap justify-start gap-2 z-40 px-4">
            {(amenities as string[]).map((amenity) => (
                <TooltipShell key={amenity} descriptions={amenity}>
                    <Badge variant="outline">
                        {amenity === 'Power Outlet' && <Power/>}
                        {amenity === 'Toilet' && <Toilet/>}
                        {amenity === 'Fast internet' && <Zap/>}
                        {amenity === 'Air Conditioning' && <DoorClosed/>}
                        {amenity === 'Outdoor Seating' && <Tent/>}
                        {amenity === 'Indoor Seating' && <AirVent/>}
                        {amenity === 'Parking' && <ParkingSquare/>}
                        {amenity}
                    </Badge>
                </TooltipShell>
            ))}

        </div>
    )
}