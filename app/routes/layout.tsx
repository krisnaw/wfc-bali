import {Outlet} from "react-router";
import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Hero from "~/components/hero";

export default function Layout() {
    return (
        <div>
            <Nav />
            <Hero />
            <Outlet />
            <Footer />
        </div>
    )
}