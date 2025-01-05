import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Loading() {
  return (
    <div>
      <Header />

      <div className="px-36 justify-center items-center">
        <div className="py-10 flex justify-center">
          <h1><a className="btn-shine">Social Media Performance Analysis</a></h1>
        </div>

        <div className="flex justify-center items-center min-h-96 max-h-[32rem]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>

      </div>

      <hr className="border-t border-gray-300 w-full my-10" />

      <div className="px-36 justify-center items-center">
        <h1 id="about"><a className="btn-shine">About</a></h1>
        <About />
      </div>
      <Footer />
    </div>

  );
}
