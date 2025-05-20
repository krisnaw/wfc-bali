import {index, layout, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
            index("routes/home.tsx"),
            route("/:name/search", "routes/home-filter.tsx"),
            route("/search", "routes/search.tsx"),
            route("/about", "routes/about.tsx"),
            route("/:slug", "routes/detail.tsx"),

            ...prefix('manage', [
                index("routes/manage/index.tsx"),
                route("/create", "routes/manage/create.tsx"),
                route("/create-area", "routes/manage/create-area.tsx"),
                route("/:cafeId/edit", "routes/manage/edit.tsx"),
                route("/delete", "routes/manage/delete-button.tsx")
            ]),
            ...prefix('manage-areas', [
                index("routes/manage-areas/index.tsx"),
            ])
        ]
    ),

] satisfies RouteConfig;
