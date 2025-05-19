import {Button} from "~/components/ui/button";
import {Link, useNavigation} from "react-router";
import type {AreasModel} from "../../database/schema";
import {Loader2} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';

export function AreasFilter({areas}: {areas: AreasModel[]}) {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div className="space-x-2 flex mt-6">
            <Button variant="outline" className="capitalize">
                <Link to={`/`} viewTransition prefetch="intent" className="inline-block">
                    All
                    {isNavigating && navigation.location?.pathname === `/` &&  <Loader2 className="ml-2 animate-spin inline-block" />}
                </Link>
            </Button>

            <div className="max-w-md">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={40}
                    className="mySwiper"
                >
                    {areas.map(area => (
                        <SwiperSlide key={area.id}>
                            <Button variant="outline" className="capitalize">
                                <Link to={`/${area.name}/search`} viewTransition prefetch="intent" className="inline-block">
                                    {area.name}
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