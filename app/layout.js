import "./globals.css";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import Courses from "@/components/Courses";
import StudentStories from "@/components/StudentStories";
import LevelUpSection from "@/components/LevelUpSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Website",
  description: "Next.js frontend project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <FeaturesSection />
        <Courses />
        <StudentStories />
        <LevelUpSection   />
        <Footer />
        {children}
      </body>
    </html>
  );
}
