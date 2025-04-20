import Navbar from "@/components/Navbar";
import Footer from "./_components/Footer";

export default function HomeLayout({ children }) {
    return (
        <div className="overflow-hidden bg-white text-black dark:bg-black dark:text-white min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
