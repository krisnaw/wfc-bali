import {Button} from "~/components/ui/button";
import {Link, useNavigation} from "react-router";
import type {AreasModel} from "../../database/schema";
import {Loader2} from "lucide-react";

export function AreasFilter({areas}: {areas: AreasModel[]}) {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div className="space-x-2 flex items-center mt-6">
            <Button variant="outline" className="capitalize">
                <Link to={`/`}>
                    All
                </Link>
            </Button>
            {areas.map(area => (
                <Button key={area.id} variant="outline" className="capitalize">
                    <Link to={`/${area.name}/search`} viewTransition prefetch="intent">
                        {area.name}
                        {isNavigating && navigation.location?.pathname === `/${area.name}` &&  <Loader2 className="animate-spin" />}
                    </Link>
                </Button>
            ))}
        </div>
    )
}