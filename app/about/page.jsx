import React from "react";
import NavBar from "../../components/landingpage/NavBar";
import Footer from "../../components/landingpage/Footer";
import Image from "next/image";
import Tati from "./tati";
const Page = () => {
  return (
    <>
      <NavBar />
      <section className="w-full min-h-screen bg-black pb-70 flex flex-col justify-between overflow-hidden text-white">
        <div className="relative mt-17 w-full h-screen">
          <Image
            src={"/coffee.jpg"}
            alt="Main background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-20 top-180 right-110 px-6 sm:px-12 md:px-20 max-w-7xl w-full mx-auto">
            <h1 className="font-serif capitalize text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-normal max-w-3xl">
              We make it easier for farmers, buyers, and businesses to connect
              and grow.
            </h1>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative z-20 pb-16 h-200 px-6 sm:px-12 md:px-20 max-w-550 w-full  mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="relative w-full md:w-3/4 h-120 sm:h-64 md:h-190 rounded-md overflow-hidden shadow-2xl">
              <Image
                src={"/familyfarm.jpg"}
                alt="Architecture detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="w-full md:w-2/4 flex flex-col items-center space-y-5">
              <p className="font-sans text-base sm:text-lg md:text-[18px] text-gray-300 leading-relaxed">
                AgriMarket is a digital agricultural marketplace built to make
                buying, selling, and accessing agricultural products and
                services easier. We connect farmers, suppliers, businesses, and
                customers in one platform where agricultural products can be
                discovered, promoted, and traded more efficiently. Our goal is
                to reduce the gap between producers and consumers while helping
                farmers reach more customers and better market their products.
                AgriMarket also provides useful agricultural tools and
                information, including farm management, crop recommendations,
                and product discovery, helping users make better decisions
                throughout the agricultural process. Whether you are a farmer
                looking to sell your products, a customer searching for
                agricultural goods, or a business looking to connect with
                producers, AgriMarket provides a simple digital platform to
                bring everyone together.
              </p>
              <button className="px-20 py-4 bg-[#e23f3e] cursor-pointer text-white text-lg">Start For Free</button>
            </div>
          </div>
        </div>
      </section>
      <Tati/>
      <Footer/>
    </>
  );
};

export default Page;
