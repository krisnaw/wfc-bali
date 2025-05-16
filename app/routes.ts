import {index, layout, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
            index("routes/home.tsx"),
            route("/search", "routes/search.tsx"),
            route("/:slug", "routes/detail.tsx"),

            ...prefix('manage', [
                index("routes/manage/index.tsx"),
                route("/create", "routes/manage/create.tsx"),
                route("/:cafeId/edit", "routes/manage/edit.tsx"),
                route("/delete", "routes/manage/delete-button.tsx")
            ])
        ]
    ),

] satisfies RouteConfig;
