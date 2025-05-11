import {Outlet} from "react-router";
import Nav from "~/components/nav";
import Footer from "~/components/footer";

export default function Layout() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Nav />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
