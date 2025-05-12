import {type Cafe, cafes} from "~/cafes";
import {Button} from "~/components/ui/button";
import {NavLink} from "react-router";

export interface Props {
    caffe: Cafe[];
}
export default function CaffeItemVer({caffe}: Props) {
    const date = new Date().toDateString()
    const areas = Array.from(new Set(cafes.map(cafe => cafe.area)));
    
    const onClickHandler = () => {
        console.log("clicked");
    }
    
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Find the best place to work
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                        {areas.map((area) => (
                            <Button variant="outline" key={area}>{area}</Button>
                        ))}
                    </div>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caffe.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
                        >
                            <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                                <time dateTime={date} className="mr-8">
                                    {date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <img alt="" src={post.imageUrl} className="size-6 flex-none rounded-full bg-white/10" />
                                        {post.name}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg/6 font-semibold text-white">
                                <NavLink to={`/${post.id}`} className="relative z-10">
                                    <span className="absolute inset-0" />
                                    {post.name}
                                </NavLink>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
