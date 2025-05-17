import {Button} from "~/components/ui/button";
import {Link} from "react-router";
import type {AreasModel} from "../../database/schema";

export function AreasFilter({areas}: {areas: AreasModel[]}) {
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
                    </Link>
                </Button>
            ))}
        </div>
    )
}