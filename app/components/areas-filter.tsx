import {Button} from "~/components/ui/button";
import {Link, useNavigation} from "react-router";
import type {AreasModelWithCafes} from "../../database/schema";
import {Loader2} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import {Badge} from "~/components/ui/badge";

export function AreasFilter({areas, setArea}: {areas: AreasModelWithCafes[], setArea:string | null}) {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div className="space-x-2 flex mt-4 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">

            <div className="border-r border-gray-200 dark:border-gray-700 pr-2">
                <Button variant="outline" size="lg" className="capitalize">
                    <Link to={`/`} viewTransition prefetch="intent" className="inline-block">
                        All
                        {isNavigating && navigation.location?.pathname === `/` &&  <Loader2 className="ml-2 animate-spin inline-block" />}
                    </Link>
                </Button>
            </div>

            <div className="overflow-hidden flex-1">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={5}
                    freeMode={true}
                    grabCursor={true}
                    preventClicksPropagation={true}
                    cssMode={true}
                    className="w-full">
                    {areas.map(area => (
                        <SwiperSlide key={area.id} className="!w-auto">
                            <Button variant={setArea == area.name ? "default" : "outline"} size="lg" className="capitalize">
                                <Link to={`/${area.name}/search`} viewTransition prefetch="intent" className="inline-block">
                                    {area.name} <Badge variant="secondary" className="rounded-full">{area.cafes > 0 && area.cafes}</Badge>
                                    {isNavigating && navigation.location?.pathname === `/${area.name}/search` &&  <Loader2 className="ml-2 animate-spin inline-block" />}
                                </Link>
                            </Button>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}
