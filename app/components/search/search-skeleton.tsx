export function SearchSkeleton() {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-5">
                <div className="col-span-2">
                    {/* Skeleton for CaffeList */}
                    <div className="h-screen pb-24 overflow-y-auto px-8 pt-12">
                        <div className="space-y-4">
                            {/* Generate 5 skeleton items */}
                            {Array(10).fill(0).map((_, index) => (
                                <div key={index} className="flex animate-pulse">
                                    <div className="mr-4 shrink-0">
                                        {/* Skeleton for image */}
                                        <div className="size-16 border border-gray-200 bg-gray-200 rounded" />
                                    </div>
                                    <div className="w-full">
                                        {/* Skeleton for title */}
                                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                                        {/* Skeleton for description */}
                                        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-3 h-screen">
                    {/* Skeleton for MainMaps */}
                    <div className="h-screen pb-24 px-8">
                        <div className="h-full w-full bg-gray-200 rounded-2xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}