import BackgroundImage from "@/components/backgroundImage";
import BibleVerse from "@/components/bibleVerse";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import WelcomeMessage from "@/components/welcomeMessage";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const Home: React.FC = () => {
  const { t } = useTranslation("common");
  
  return (
    <>
      <Navbar />
      <BackgroundImage />
      <BibleVerse
        book={t("home.book")}
        chapter={3}
        verse={16}
        text={t("home.verse")}
      />
      <WelcomeMessage />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
