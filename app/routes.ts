import {index, layout, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("coffee-detail","routes/coffee-detail.tsx"),
        route("about","routes/about.tsx"),
    ])
] satisfies RouteConfig;
