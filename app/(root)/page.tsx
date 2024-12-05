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

export default function Home() {
  return (
    <main className=" {inter.variable} bg-background min-h-screen font-light antialiased __variable_aaf875n">
      <div className="font-inter border-color m-auto h-9 w-full border-l border-r max-w-clamp-custom "></div>
      <Header />
      <div className="border-color m-auto min-h-screen border-l border-r max-w-clamp-custom">
        <MainPage />
        <ServiceDetails />
        <ProcessFlow />
        <PricingAndServicing />
        <FaqProvider>
          <DecisionHelper />
        </FaqProvider>

        <ContactForm type={"contact-form"} />
        <LaunchYourIdea />
      </div>
      <Footer />
    </main>
  );
}
