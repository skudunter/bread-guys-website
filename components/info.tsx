import Image from "next/image";
import bread from "@/public/images/bread.png";
export default function Info() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 bg-breadImage bg-cover mb-20" data-aos-id-image>
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 bg-breadImage" data-aos="fade-up"
              data-aos-anchor="[data-aos-id-image]">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Life's too short for anything but great bread!
            </div>
            <h1 className="h2 mb-4">One product,quality sourdough bread</h1>
            <p className="text-lg text-white">
              Enjoy the tradition and taste of our sourdough bread from
              Vredehoek, crafted with care by two close friends. We pour our
              hearts into every loaf, following simple, time-tested recipes.
              You'll savor the genuine flavors of homemade goodness.We take
              pride in our naturally leavened bread, made with our special
              starter culture. Our dough ferments for a patient 18 hours and is
              delivered fresh within just 4 hours of baking. Our bread is all
              about soft and chewy textures, with subtle sour and salty hints
              that add to its charm. Its unique, wild crumb structure and dark
              caramelized crust make every bite a rustic delight.
            </p>
          </div>
          <div className="flex"> 
          </div>
        </div>
      </div>
    </section>
  );
}
