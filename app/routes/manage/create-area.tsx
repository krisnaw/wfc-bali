import {Button} from "~/components/ui/button";
import {Form, redirect, useNavigate} from "react-router";
import type {Route} from "./+types/create-area";
import {Input} from "~/components/ui/input";
import {Label} from "~/components/ui/label";
import {db} from "../../../database/db";
import {areas} from "../../../database/schema";

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
    return (
        <div>
            <Form method="post">
                <div>
                    <Label htmlFor="area">Area name</Label>
                    <div className="mt-2">
                        <Input name="name" id="area" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button variant="secondary" onClick={() => navigate(-1)} type="button">
                        Cancel
                    </Button>

                    <Button type="submit">
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    )
}