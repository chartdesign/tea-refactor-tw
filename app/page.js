import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Categories from "./components/Categories";
import PopularItems from "./components/PopularItems";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Categories />
      <PopularItems />
      <Footer />
    </main>
  );
}
