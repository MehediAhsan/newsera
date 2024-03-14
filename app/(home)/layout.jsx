import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
    return (
        <div className="container mx-auto px-5 overflow-hidden">
            <Navbar />
            {children}
        </div>
    );
}
