import ContactForm from "@hackerlabs/components/ContactForm";
import DecisionHelper from "@hackerlabs/components/DecisionHelper";
import Footer from "@hackerlabs/components/Footer";
import Header from "@hackerlabs/components/Header";
import LaunchYourIdea from "@hackerlabs/components/LaunchYourIdea";

import MainPage from "@hackerlabs/components/MainPage";
import PricingAndServicing from "@hackerlabs/components/PricingAndServicing";

import ProcessFlow from "@hackerlabs/components/ProcessFlow";

import ServiceDetails from "@hackerlabs/components/ServiceDetails";

export default function Home() {
  return (
    <main className="bg-background min-h-screen font-sans antialiased __variable_aaf875">
      <div className="border-color m-auto h-9 w-full border-l border-r max-w-clamp-custom"></div>
      <Header />
      <div className="border-color m-auto min-h-screen border-l border-r max-w-clamp-custom">
        <MainPage />
        <ServiceDetails />
        <ProcessFlow />
        <PricingAndServicing />
        <DecisionHelper />
        <ContactForm />
        <LaunchYourIdea />
      </div>
      <Footer />
    </main>
  );
}
