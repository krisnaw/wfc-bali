import {Link} from "react-router";

export default function Home() {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-5">
                <Link to={'/search/'} className="col-span-1 bg-blue-500 text-white p-4 m-2 rounded">
                    Search Tokyo
                </Link>
            </div>
        </div>
    )
}
