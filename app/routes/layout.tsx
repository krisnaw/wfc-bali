import {Outlet} from "react-router";
import {BottomNav} from "~/components/bottom-nav";

export default function Layout() {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
                <Outlet/>
            </div>
            <BottomNav />
        </div>
    )
}
