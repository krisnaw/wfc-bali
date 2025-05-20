import {Button} from "~/components/ui/button";
import React from "react";
import {useFetcher} from "react-router";
import {Loader2, Trash2} from "lucide-react";
import {TooltipShell} from "~/components/tooltip-shell";

export function DeleteButton({cafeId} : {cafeId: number}) {
    const fetcher = useFetcher();
    return (
        <fetcher.Form
            method="post" className="inline-block">
            <input type="hidden" name="cafe_id" value={cafeId}/>
            <TooltipShell descriptions="Delete">
                <Button type="submit" disabled={fetcher.state === "loading"} variant="destructive">
                    <Trash2 />
                    {fetcher.state === "loading" && <Loader2 className="animate-spin ml-2"/>}
                </Button>
            </TooltipShell>

        </fetcher.Form>
    )
}