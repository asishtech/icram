import Navbar from "@/components/Navbar";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function RegistrationPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Registration />
      </div>
      <Footer />
    </main>
  );
}
