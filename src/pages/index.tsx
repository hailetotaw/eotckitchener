import BackgroundImage from "@/components/backgroundImage";
import BibleVerse from "@/components/bibleVerse";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WelcomeMessage from "@/components/welcomeMessage";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <BackgroundImage />
      <BibleVerse
        book="John"
        chapter={3}
        verse={16}
        text="For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
      />
      <WelcomeMessage />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
