import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
    return (
        <div className="overflow-hidden bg-white text-black dark:bg-black dark:text-white min-h-screen">
            <Navbar />
            {children}
        </div>
    );
}
