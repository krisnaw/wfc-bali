import {Button} from "~/components/ui/button";
import React from "react";
import {useFetcher} from "react-router";

export function DeleteButton({cafeId} : {cafeId: number}) {
    const fetcher = useFetcher();
    return (
        <fetcher.Form
            method="post" className="inline-block">
            <input type="hidden" name="cafe_id" value={cafeId}/>
            <Button variant="destructive" size="sm">
                Delete
            </Button>
        </fetcher.Form>
    )
}