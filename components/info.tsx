import Image from "next/image";
export default function Info() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Life's too short for anything but great bread!
            </div>
            <h1 className="h2 mb-4">One product,quality sourdough bread</h1>
            <p className="text-xl text-gray-200">
              Traditionally baked sourdough fresh from Vredehoek. <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
