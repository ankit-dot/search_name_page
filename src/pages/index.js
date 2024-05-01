import Image from "next/image";
import { Inter } from "next/font/google";
import Search from "@/components/search";
import HomePage from "@/components/homePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
        <Search/>
        <HomePage/>
    </main>
  );
}
