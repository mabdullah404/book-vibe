
import Image from "next/image";
import BannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 my-12 bg-slate-200 rounded-3xl">
      <div className="">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 md:p-12 lg:p-16">
          
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Books to freshen
              <br />
              up your{" "}
              <span className="text-emerald-600">
                bookshelf
              </span>
            </h1>

            <div>
              <button className="btn btn-success rounded-full px-8 text-white shadow-md hover:shadow-lg transition">
                View The List
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-emerald-200/30 rounded-3xl blur-2xl" />

              <Image
                src={BannerImage}
                alt="Books on a bookshelf"
                className="relative w-full h-auto rounded-3xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
