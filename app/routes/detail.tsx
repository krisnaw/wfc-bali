import type {Route} from "./+types/detail";
import {db} from "../../database/db";
import {cafes} from "../../database/schema";
import {eq} from "drizzle-orm";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/components/ui/accordion";
import {CaffeMaps} from "~/components/caffe/caffe-maps";

export async function loader({params} : Route.LoaderArgs) {
    const slug = params.slug as string;
    const cafe = await db.select()
        .from(cafes).where(eq(cafes.slug, slug));
    return {cafe: cafe[0]};
}

export function meta({data}: Route.MetaArgs) {
    const {cafe} = data;
    return [
        { title: cafe.name, type: "website" },
        {
            property: "og:title",
            content: "Very cool app",
        },
        {
            name: "description",
            content: "This app is the best",
        },
    ];
}


export default function Detail({loaderData} : Route.ComponentProps) {

    const {cafe} = loaderData;

    return (
        <div>
            <div className="pt-6">
                <div className="mt-6 max-w-md">
                    {/* Image gallery */}
                    <div className="grid grid-cols-2 gap-2">
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
                            <h2 className="text-xl font-semibold tracking-tight text-pretty text-gray-900 ">
                                {cafe.name}
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">Learn how to grow your business with our expert advice.</p>
                        </div>
                    </div>

                    <div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <h2 className="text-sm font-medium ">Address & location</h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm">{cafe.address ?? ''}</p>
                                    <div className="mt-4">
                                        <CaffeMaps />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <h2 className="text-sm font-medium ">Social Media</h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul role="list" className="mt-4 flex items-center space-x-6">
                                        <li>
                                            <a href="#" className="flex size-6 items-center justify-center text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Share on Facebook</span>
                                                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                                    <path
                                                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex size-6 items-center justify-center text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Share on Instagram</span>
                                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                                                    <path
                                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex size-6 items-center justify-center text-gray-400 hover:text-gray-500">
                                                <span className="sr-only">Share on X</span>
                                                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                                    <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
           </div>
        </div>
    )
}
