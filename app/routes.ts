import {index, layout, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
            index("routes/home.tsx"),
            route("/search", "routes/search.tsx"),
            route("/:cafeId", "routes/detail.tsx"),
            route("/create", "routes/create.tsx"),
        ]
    ),

] satisfies RouteConfig;
