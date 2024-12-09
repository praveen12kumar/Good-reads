import Navbar from "@/components/molecules/navbar/Navbar";
import Footer from "@/components/molecules/footer/Footer";


function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className="h-[85vh] w-screen ">
        <div className="max-w-7xl">
            {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
