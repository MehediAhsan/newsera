import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
    return (
        <div className="overflow-hidden">
            <Navbar />
            {children}
        </div>
    );
}
