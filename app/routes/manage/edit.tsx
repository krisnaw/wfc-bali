import {Form, redirect, useNavigate} from "react-router";
import {Input} from "~/components/ui/input";
import type {Route} from "./+types/edit";
import {db} from "../../../database/db";
import {areas, cafes} from "../../../database/schema";
import {eq} from "drizzle-orm";
import {Button} from "~/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "~/components/ui/select";
import {Label} from "~/components/ui/label";
import {useState} from "react";
import {Textarea} from "~/components/ui/textarea";

export async function action({request} : Route.ActionArgs) {
    let formData = await request.formData();
    let name = formData.get('cafeName') as string;
    let slug = formData.get('slug') as string;
    let description = formData.get('description') as string;
    let feature_image_url = formData.get('feature_image_url') as string;
    let address = formData.get('address') as string;
    let lat = parseInt(formData.get('lat') as string);
    let lng = parseInt(formData.get('lng') as string);
    let rating = formData.get('rating') as string;
    let area = formData.get('area') as string;

    const cafeId = formData.get('cafeId') as string;

    await db.update(cafes).set({
        name: name,
        slug: slug,
        description: description,
        feature_image_url: feature_image_url,
        address: address,
        area_id: parseInt(area),
        lat: lat,
        lng: lng,
        rating: rating,
    }).where(eq(cafes.id, parseInt(cafeId)));
    return redirect(`/manage`);
}

export async function loader({params} : Route.LoaderArgs) {
    const {cafeId} = params;
    const cafe = await db.select()
        .from(cafes).where(eq(cafes.id, parseInt(cafeId)));
    const area = await db.select().from(areas);
    return {cafe: cafe[0], areas: area};
}

export default function Edit({loaderData} : Route.ComponentProps) {
    const {cafe, areas} = loaderData;
    const navigate = useNavigate();
    const [selectedArea, setSelectedArea] = useState<string>(cafe.area_id?.toString() ?? areas[0].id.toString());


    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mb-6">Edit Cafe</h1>
                <Form className="space-y-4 max-w-md" method="put">
                    <input type="hidden" name="cafeId" value={cafe.id} />
                    <div className="space-y-2">
                        <label htmlFor="cafeName" className="text-sm font-medium">
                            Cafe Name
                        </label>
                        <Input
                            id="cafeName"
                            name="cafeName"
                            placeholder="Enter cafe name"
                            className="w-full"
                            defaultValue={cafe.name}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="slug" className="text-sm font-medium">
                            Slug
                        </label>
                        <Input
                            id="slug"
                            name="slug"
                            placeholder="Enter cafe slug"
                            className="w-full"
                            defaultValue={cafe.slug ?? ""}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="area">Area</Label>
                        <div className="mt-2">
                            <Select name="area" defaultValue={selectedArea}>
                                <SelectTrigger className="w-full capitalize">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    {areas.map(area => (
                                        <SelectItem value={area.id.toString()} key={area.id} className="capitalize">{area.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium">
                            Description
                        </label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Enter cafe description"
                            className="w-full"
                            defaultValue={cafe.description ?? ''}
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">

                        <div className="space-y-2">
                            <label htmlFor="rating" className="text-sm font-medium">
                                Rating
                            </label>
                            <Input
                                id="rating"
                                name="rating"
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="Enter rating (0-5)"
                                className="w-full"
                                defaultValue={cafe.rating ?? 0}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lat" className="text-sm font-medium">
                                Latitude
                            </label>
                            <Input
                                id="lat"
                                name="lat"
                                type="number"
                                step="any"
                                placeholder="Enter latitude"
                                className="w-full"
                                defaultValue={cafe.lat ?? ''}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lng" className="text-sm font-medium">
                                Longitude
                            </label>
                            <Input
                                id="lng"
                                name="lng"
                                type="number"
                                step="any"
                                placeholder="Enter longitude"
                                className="w-full"
                                defaultValue={cafe.lng ?? ''}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="address" className="text-sm font-medium">
                            Address
                        </label>
                        <Input
                            id="address"
                            name="address"
                            placeholder="Enter cafe address"
                            className="w-full"
                            defaultValue={cafe.address ?? ''}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="feature_image_url" className="text-sm font-medium">
                            Feature Image URL
                        </label>
                        <Input
                            id="feature_image_url"
                            name="feature_image_url"
                            placeholder="Enter feature image URL"
                            className="w-full"
                            defaultValue={cafe.feature_image_url ?? ''}
                        />
                    </div>

                    <div className="flex justify-between">
                        <Button variant="secondary" onClick={() => navigate(-1)} type="button">
                            Cancel
                        </Button>

                        <Button type="submit">
                            Save changes
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}