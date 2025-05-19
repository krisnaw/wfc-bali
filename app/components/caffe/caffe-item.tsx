import type {CafesModel} from "../../../database/schema";
import {Link, useNavigation} from "react-router";
import {Loader2, Power, Toilet, Zap} from "lucide-react";
import {Badge} from "~/components/ui/badge";
import {TooltipShell} from "~/components/tooltip-shell";
import React from "react";

interface Props {
    cafe: CafesModel
}

export function CaffeItem({cafe}: Props) {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 ">
            <img
                alt={cafe.name}
                src={cafe.feature_image_url ?? ''}
                className="aspect-3/4 w-full  object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
            />
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <div className="flex space-x-2 z-40">
                    <TooltipShell descriptions="Internet connections">
                        <Badge variant="outline">
                            <Zap/>
                            Fast internet
                        </Badge>
                    </TooltipShell>
                    <TooltipShell descriptions="Power outlet">
                        <Badge variant="outline">
                            <Power/>
                            Available
                        </Badge>
                    </TooltipShell>
                    <TooltipShell descriptions="Price range">
                        <Badge variant="outline">
                            <Toilet/>
                            Available
                        </Badge>
                    </TooltipShell>
                </div>

                <h3 className="text-sm font-medium ">
                    <Link to={`/${cafe.slug}`} viewTransition prefetch="intent">
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {cafe.name}
                        {isNavigating && navigation.location?.pathname === `/${cafe.slug}` &&
                            <Loader2 className="animate-spin"/>}
                    </Link>
                </h3>

                <p className="text-sm text-gray-500">{cafe.description}</p>
            </div>
        </div>
    )
}
