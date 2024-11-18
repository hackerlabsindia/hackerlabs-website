import React from "react";
import "./page.css";

const PricingAndServicing = () => {
  return (
    <div className="relative px-6 pt-32 sm:px-12" id="pricing">
      <div className="absolute left-1/4 top-0 h-full w-px bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300"></div>
      <div className="absolute left-3/4 top-0 h-full w-px bg-gray-300"></div>
      <div className="relative flex flex-col items-center gap-3 pb-20 pt-12">
        <span className="font-semibold uppercase tracking-wider text-blue-500">
          Let's Work together
        </span>
        <div className="relative">
          <h2 className="text-center text-4xl font-bold sm:text-5xl">
            Our services:
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-12 ">
        <div className="border-color relative min-h-[22rem] flex-1 border bg-white px-6 py-6 transition-all duration-200 ease-in-out hover:border-gray-300 sm:px-9 min-w-[24rem] no-transform">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80 mb-3 uppercase">
            Fixed Price
          </div>
          <h3 className="font-header text-xl font-semibold">Landing Page</h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">
              We create a fully fledged landing page that converts visitors into
              customers.
            </p>
            <p className="mt-3">
              Custom design, copywriting, and development - we don't use
              templates here.
            </p>
          </div>
          <div className="mt-12 flex items-center justify-between">
            <button
              className="cursor-pointer select-none rounded-2xl px-6 py-3 font-header border border-gray-900 bg-white text-gray-900 flex items-center gap-3 font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-50"
              tabIndex={0}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path>
              </svg>
            </button>
            <div className="flex gap-1.5">
              from
              <p className="font-semibold">$2000</p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[22rem] flex-1 border bg-white px-6 transition-all duration-200 ease-in-out sm:px-9 min-w-[24rem] border-blue-100 py-9 shadow hover:border-blue-200 hover:shadow no-transform">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80 mb-3 uppercase">
            Custom
          </div>
          <h3 className="font-header text-xl font-semibold">
            Software Development
          </h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">
              We will work closely to understand your goals and create an MVP
              for your next big SaaS.
            </p>
            <p className="mt-3">
              You also have the option for ongoing support & development to
              scale even further!
            </p>
          </div>
          <div className="mt-12 flex items-center justify-between">
            <button
              className="cursor-pointer select-none rounded-2xl px-6 py-3 font-header border border-gray-900 flex items-center gap-3 font-semibold transition-colors duration-200 ease-in-out border-none bg-blue-500 fill-white text-white hover:bg-blue-600"
              tabIndex={0}
            >
              Let's talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"></path>
              </svg>
            </button>
            <div className="flex gap-1.5">
              from
              <p className="font-semibold">$2500</p>
            </div>
          </div>
        </div>

        <div className="border-color relative min-h-[22rem] flex-1 border bg-white px-6 py-6 transition-all duration-200 ease-in-out hover:border-gray-300 sm:px-9 min-w-[24rem] no-transform">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80 mb-3 uppercase">
            Per Hour
          </div>
          <h3 className="font-header text-xl font-semibold">
            Consulting / Mentoring
          </h3>
          <div className="mt-6 min-h-[10rem]">
            <p className="mt-3">
              Need help with your career path or startup? Let's talk about your
              goals and how we can help you achieve them.
            </p>
          </div>
          <button
            className="cursor-pointer select-none rounded-2xl px-6 py-3 font-header border border-gray-900 bg-white text-gray-900 flex items-center gap-3 font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-50"
            tabIndex={0}
          >
            Book a call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="m720-560-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Zm78 440q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"></path>
            </svg>
          </button>
          <div className="flex gap-1.5">
            from
            <p className="font-semibold">$50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndServicing;
