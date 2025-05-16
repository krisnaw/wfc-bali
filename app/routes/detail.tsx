import type {Route} from "./+types/detail";

import {Breadcrumb} from "~/components/breadcrumb";
import {db} from "../../database/db";
import {cafes} from "../../database/schema";
import {eq} from "drizzle-orm";

export async function loader({params} : Route.LoaderArgs) {
    const cafeId = params.cafeId;
    const cafe = await db.select()
        .from(cafes).where(eq(cafes.id, parseInt(cafeId)));
    return {cafe: cafe[0]};
}


export default function Detail({loaderData} : Route.ComponentProps) {

    const {cafe} = loaderData;

    return (
        <div>
            <div className="pt-6">
                <Breadcrumb cafe={cafe} />


                <div className="px-10">
                    {/* Image gallery */}
                    <div className="grid grid-cols-2 mx-auto max-w-xl gap-2">
                        {[
                            { index: 0, roundedClass: 'rounded-tl-md' }, // top-left
                            { index: 1, roundedClass: 'rounded-tr-md' }, // top-right
                            { index: 2, roundedClass: 'rounded-bl-md' }, // bottom-left
                            { index: 3, roundedClass: 'rounded-br-md' }  // bottom-right
                        ].map(({ index, roundedClass }) => (
                            <div key={index}>
                                <img
                                    className={roundedClass}
                                    src="https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV8Cb7RkhovGw3skSHVI9LdUuynRKe4QptXxrfg"
                                    alt={`Cafe image from Unsplash`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Product info */}
                    <div className="mt-10">
                        <div className="mx-auto lg:mx-0">
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                {cafe.name}
                            </h2>
                            <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                        </div>
                    </div>
                </div>


           </div>
        </div>
    )
}
