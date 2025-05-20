import {Button} from "~/components/ui/button";
import {redirect, useFetcher, useNavigate} from "react-router";
import type {Route} from "./+types/create-area";
import {Input} from "~/components/ui/input";
import {Label} from "~/components/ui/label";
import {db} from "../../../database/db";
import {areas} from "../../../database/schema";
import {Loader2} from "lucide-react";
import React from "react";
import {ButtonCancel} from "~/components/button-cancel";

export async function action({request} : Route.ActionArgs) {
    const formData = await request.formData();
    const name = formData.get('name') as string;

    await db.insert(areas).values({
        name: name,
    });
    return redirect('/manage')
}

export default function CreateArea() {
    const navigate = useNavigate();
    let fetcher = useFetcher();

    return (
        <div>
            <fetcher.Form method="post">
                <div>
                    <Label htmlFor="area">Area name</Label>
                    <div className="mt-2">
                        <Input name="name" id="area" />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <ButtonCancel />

                    <Button type="submit" disabled={fetcher.state === "loading"}>
                        {fetcher.state === "idle" ? "Save" : "Saving..."}
                        {fetcher.state === "loading" && <Loader2 className="animate-spin ml-2"/>}
                    </Button>
                </div>
            </fetcher.Form>
        </div>
    )
}