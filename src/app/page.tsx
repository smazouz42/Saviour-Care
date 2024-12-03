import { HomePage } from "@/components/Home";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative overflow-hidden h-screen">
      <NavBar />
      <HomePage />
    </div>
  );
}
