import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <h1 className="text-blue-400 text-2xl font-medium">📘NewsEra</h1>
            <div>
                <ul className="flex gap-5">
                    <li><Link href="/news" className="border-b-2 border-primary">News</Link></li>
                    <li><Link href="/dashboard" className="border-b-2 border-primary">Dashboard</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;