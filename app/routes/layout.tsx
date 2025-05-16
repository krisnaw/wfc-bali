import {Outlet} from "react-router";

export default function Layout() {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            <div>
                <Outlet />
            </div>
        </div>
    )
}
