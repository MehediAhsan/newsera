import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ label }) => {
    return (
        <div className="flex justify-between items-center mb-10 ">
            <span className="text-xl font-semibold text-gray-200">{label}</span>
            <nav className="text-sm">
                <ul className="flex items-center gap-2">
                    <li className="flex items-center">
                        <Link
                            href='/dashboard'
                            className={`hover:text-white text-gray-400 transition`}
                        >
                            Dashboard
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-third" />
                    </li>
                    <li className="flex items-center">
                        <Link
                            href=''
                            className={`text-gray-400 transition`}
                        >
                            {label}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Breadcrumb;
