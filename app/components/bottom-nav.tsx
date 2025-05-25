import {Link, useNavigation} from "react-router";

import {ModeToggle} from "./mode-toggle";
import {BookmarkIcon, HomeIcon, UserIcon} from "lucide-react";

export function BottomNav() {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div
            className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link viewTransition to="/" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <HomeIcon className="h-5 w-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span
                        className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                </Link>

                <Link to="/about" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <UserIcon className="h-5 w-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span
                        className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        About
                    </span>
                </Link>

                <Link to="/bookmark" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <div className="relative">
                        <BookmarkIcon className="h-5 w-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                            5
                        </span>
                    </div>
                    <span
                        className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Bookmarks
                    </span>
                </Link>


                <ModeToggle />
            </div>
        </div>

    )
}
