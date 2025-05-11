import type {Route} from "./+types/about";

export async function clientLoader() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log('clientLoader', data);
    return data
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function About({loaderData}: Route.ComponentProps) {
    console.log(loaderData)
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        </div>
    );
}