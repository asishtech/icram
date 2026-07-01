import Navbar from "@/components/Navbar";
import CallForPapers from "@/components/CallForPapers";
import Footer from "@/components/Footer";

export default function CallForPapersPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <CallForPapers />
      </div>
      <Footer />
    </main>
  );
}
