import {Input} from "~/components/ui/input";
import {Form, redirect} from "react-router";

import {db} from "../../../database/db";
import {cafes} from "../../../database/schema";
import type {Route} from "./+types/create";

export async function action({request} : Route.ActionArgs) {
    let formData = await request.formData();
    let name = formData.get('cafeName') as string;
    let description = formData.get('description') as string;
    let rating = formData.get('rating') as string;
    let lat = parseFloat(formData.get('lat') as string);
    let lng = parseFloat(formData.get('lng') as string);
    let address = formData.get('address') as string;
    let feature_image_url = formData.get('feature_image_url') as string;

    await db.insert(cafes).values({
        name: name,
        description: description,
        feature_image_url: feature_image_url,
        address: address,
        lat: lat,
        lng: lng,
        rating: rating,
    });
    redirect('/manage')
}

export default function Create() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">Create New Cafe</h1>
            <Form className="space-y-4 max-w-md" method="post">
                <div className="space-y-2">
                    <label htmlFor="cafeName" className="text-sm font-medium">
                        Cafe Name
                    </label>
                    <Input 
                        id="cafeName"
                        name="cafeName"
                        placeholder="Enter cafe name"
                        className="w-full"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">
                        Description
                    </label>
                    <Input 
                        id="description"
                        name="description"
                        placeholder="Enter cafe description"
                        className="w-full"
                    />
                </div>

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
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                    />
                </div>

                <button 
                    type="submit" 
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                >
                    Create Cafe
                </button>
            </Form>
        </div>
    )
}
