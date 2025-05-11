import {Outlet} from "react-router";
import Nav from "~/components/nav";

export default function Layout() {
    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden">
            <Nav />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
