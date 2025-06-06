import {
    isRouteErrorResponse,
    Links,
    type LoaderFunctionArgs,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "react-router";

import type {Route} from "./+types/root";
import "./app.css";
import {Toaster} from "~/components/ui/sonner";
import {themeSessionResolver} from "~/sessions.server";
import {ThemeProvider, useTheme} from "remix-themes"
import {clsx} from "clsx";
import BookmarkProvider from "~/bookmark-context";

// Return the theme from the session storage using the loader
export async function loader({request}: LoaderFunctionArgs) {
    const {getTheme} = await themeSessionResolver(request)
    return {
        theme: getTheme(),
    }
}

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
    const data = useLoaderData<typeof loader>()
    return (
        <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
            <App/>
        </ThemeProvider>
    )
}

export function App() {
    const data = useLoaderData<typeof loader>()
    const [theme] = useTheme()
    return (
        <html lang="en" className={clsx(theme)}>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className="h-full">
        <BookmarkProvider>
            <Outlet/>
        </BookmarkProvider>

        <Toaster/>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
            )}
        </main>
    );
}
