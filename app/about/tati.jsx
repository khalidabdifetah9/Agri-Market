import Image from "next/image";

const Tati = () => {
  return (
    <div className="bg-[#e23f3e] text-white p-8 md:p-16">
      <div className="max-w-450 mx-auto">
        <h2 className="text-5xl capitalize md:text-5xl font-bold text-center mb-16">
          <span className="block">Guiding your business toward</span>
          <span className="block text-[#e4e5ba]">sustainable growth</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#e4e5ba]">
              Our Approach
            </h3>
            <p className="text-lg text-white">
              We offer personalized consultancy services that prioritize your
              business long-term success. Our dedicated team of experts works
              closely with you to understand your unique challenges and
              opportunities, delivering tailored solutions that drive
              sustainable growth.
            </p>
          </div>

          <div className="relative w-full h-96 md:h-[500px] rounded-md overflow-hidden shadow-xl">
            <Image
              src="/i9.jpg"
              alt="Two colleagues collaborating at a desk"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
          <div className="relative h-96 md:h-[500px] rounded-md overflow-hidden shadow-xl order-last md:order-first">
            <Image
              src="/farm3.jpg"
              alt="A man and a woman discussing information on a phone"
              fill
              className="rounded-md object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#e4e5ba]">
              Transforming Your Vision
            </h3>
            <p className="text-lg text-white">
              From initial strategy to final execution, we guide you every step
              of the way. Our holistic approach integrates cutting-edge market
              insights, data analysis, and strategic planning to transform your
              vision into actionable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tati;