import {TooltipShell} from "~/components/tooltip-shell";
import {Badge} from "~/components/ui/badge";
import {AirVent, DoorClosed, type LucideIcon, ParkingSquare, Power, Tent, Toilet, Zap} from "lucide-react";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import {AmenitiesOptions} from "~/routes/manage/amen";

// Define the type for amenity options
interface AmenityOption {
  value: string;
  label: string;
}

// Define icon components for each amenity type
const iconComponents: Record<string, LucideIcon> = {
    'Power Outlet': Power,
    'Toilet': Toilet,
    'Fast internet': Zap,
    'Air Conditioning': DoorClosed,
    'Outdoor Seating': Tent,
    'Indoor Seating': AirVent,
    'Parking': ParkingSquare,
};

// Create a mapping of amenities from the centralized options
const amenityIconMap: Record<string, LucideIcon> = (AmenitiesOptions as AmenityOption[]).reduce((map, option) => {
    if (iconComponents[option.value]) {
        map[option.value] = iconComponents[option.value];
    }
    return map;
}, {} as Record<string, LucideIcon>);

/**
 * CafeAmenities component displays a horizontal scrollable list of amenities with icons.
 * It uses the centralized AmenitiesOptions for consistency and maps each amenity to its icon.
 * 
 * @param amenities - Array of amenity strings to display
 * @returns A horizontal scrollable list of amenities with icons, or null if no amenities
 */
export function CafeAmenities({amenities}: { amenities: string[] }) {
    // Return null if no amenities are provided
    if (!amenities || amenities.length === 0) {
        return null;
    }

    return (
        <div className="z-40">
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                className="w-full">
                {(amenities as string[]).map((amenity) => {
                    const IconComponent = amenityIconMap[amenity];

                    return (
                        <SwiperSlide key={amenity} className="!w-auto first:pl-2 last:pr-6">
                            <TooltipShell descriptions={amenity}>
                                <Badge variant="outline">
                                    {IconComponent && <IconComponent />}
                                    {amenity}
                                </Badge>
                            </TooltipShell>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
