import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import YourKnowledge from "@/components/YourKnowledge";
import Features from "@/components/Features";
import CreateAssistant from "@/components/CreateAssistant";
import UseCases from "@/components/UseCases";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProposition />
      <YourKnowledge />
      <CreateAssistant />
      <Features />
      <UseCases />
      <Waitlist />
      <Footer />
    </main>
  );
}
