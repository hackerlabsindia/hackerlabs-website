import React from "react";
import "./page.css";

const ContactForm = () => {
  return (
    <div className="relative py-16 md:py-32" id="contact-form">
      <div className="absolute left-1/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px  bg-gray-300"></div>
      <div className="absolute left-3/4 top-0 h-full w-px  bg-gray-300"></div>
      <div className="relative m-auto max-w-[55rem] border bg-white px-6 py-9">
        <h2 className="mb-6 text-3xl font-medium">Ready to get started?</h2>
        <div className="grid gap-3">
          <div className="w-full items-center gap-2 mt-6 col-span-1">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Name
            </label>
            <input
              type="name"
              className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full items-center gap-2 mt-6 col-span-1">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <input
              type="email"
              className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full items-center gap-2 mt-6 col-span-2">
            <div
              role="radiogroup"
              aria-required="false"
              dir="ltr"
              className="grid gap-3 no-outline"
              tabIndex={0}
            >
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                What's your budget? (optional)
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="true"
                  data-state="checked"
                  value="not-sure"
                  className="aspect-square h-4 w-4 rounded-full border border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
                  id="not-sure"
                  tabIndex={-1}
                  data-radix-collection-item
                >
                  <span
                    className="flex items-center justify-center"
                    data-state="checked"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </span>
                </button>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I'm not sure
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="true"
                  data-state="checked"
                  value="not-sure"
                  className="aspect-square h-4 w-4 rounded-full border border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
                  id="not-sure"
                  tabIndex={-1}
                  data-radix-collection-item
                ></button>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  $1,000 - $5,000
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="true"
                  data-state="checked"
                  value="not-sure"
                  className="aspect-square h-4 w-4 rounded-full border border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
                  id="not-sure"
                  tabIndex={-1}
                  data-radix-collection-item
                ></button>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  $5,000 - $10,000
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="true"
                  data-state="checked"
                  value="not-sure"
                  className="aspect-square h-4 w-4 rounded-full border border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
                  id="not-sure"
                  tabIndex={-1}
                  data-radix-collection-item
                ></button>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  More than $10,000
                </label>
              </div>
            </div>
          </div>
          <div className="w-full items-center gap-2 mt-6 col-span-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              How can I help you?
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              placeholder="Type your message here."
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="min-h-10 pt-3"></div>
        <div className=""></div>
        <div className="mt-12 flex justify-center">
          <button
            className="cursor-pointer select-none rounded-2xl px-6 py-3 flex items-center gap-3 font-header bg-gray-900 text-white hover:bg-gray-800"
            tabIndex={0}
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
