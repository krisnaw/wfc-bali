import {TooltipShell} from "~/components/tooltip-shell";
import {Badge} from "~/components/ui/badge";
import {AirVent, DoorClosed, ParkingSquare, Power, Tent, Toilet, Zap} from "lucide-react";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';

export function CafeAmenities({amenities}: { amenities: string[] }) {
    if (!amenities || amenities.length === 0) {
        return null;
    }
    return (
        <div className="z-40 pl-2">
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                className="w-full">
                {(amenities as string[]).map((amenity) => (
                    <SwiperSlide key={amenity} className="!w-auto">
                        <TooltipShell descriptions={amenity}>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
