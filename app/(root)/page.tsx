
"use client";

import ContactForm from "@hackerlabs/component/ContactForm";
import DecisionHelper from "@hackerlabs/component/DecisionHelper";
import { FaqProvider } from "@hackerlabs/component/DecisionHelper/FaqContext";
import Footer from "@hackerlabs/component/Footer";
import Header from "@hackerlabs/component/Header";
import LaunchYourIdea from "@hackerlabs/component/LaunchYourIdea";

import MainPage from "@hackerlabs/component/MainPage";
import PricingAndServicing from "@hackerlabs/component/PricingAndServicing";

import ProcessFlow from "@hackerlabs/component/ProcessFlow";

import ServiceDetails from "@hackerlabs/component/ServiceDetails";
import { useRef } from "react";
export default function Home() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  return (
    <main className=" {inter.variable} bg-background min-h-screen font-light antialiased __variable_aaf875n">
      <div className="font-inter border-color m-auto h-9 w-full border-l border-r max-w-clamp-custom "></div>
      <Header contactFormRef={contactFormRef} />
      <div className="border-color m-auto min-h-screen border-l border-r max-w-clamp-custom">
        <MainPage contactFormRef={contactFormRef} pricingRef={pricingRef} />
        <ServiceDetails />

        <ProcessFlow contactFormRef={contactFormRef} />
        <div ref={pricingRef}>
          <PricingAndServicing contactFormRef={contactFormRef} />
        </div>
        <FaqProvider>
          <DecisionHelper />
        </FaqProvider>


        <div ref={contactFormRef}>
          <ContactForm type={"contact-form"} />
        </div>
        <LaunchYourIdea contactFormRef={contactFormRef} />

      </div>
      <Footer />
    </main>
  );
}
