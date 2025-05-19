import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "~/components/ui/tooltip";
import React from "react";

export function TooltipShell({children, descriptions} : {children: React.ReactNode, descriptions: string}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{descriptions}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}