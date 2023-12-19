// Import Components
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const NotFound = () => {
    return (
        <main>
            <Header bg="bg-black" />
            <section>
                <div className="h-screen flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-black font-normal leading-none mt-10">404 - Page Not Found</h1>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default NotFound;