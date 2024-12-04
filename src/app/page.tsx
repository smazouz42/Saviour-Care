import { HomePage } from "@/components/Home";
import { NavBar } from "@/components/NavBar";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      <NavBar />
      <HomePage />
      <Services />
    </div>
  );
}
