import BackgroundImage from "@/components/backgroundImage";
import BibleVerse from "@/components/bibleVerse";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WelcomeMessage from "@/components/welcomeMessage";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <Navbar />
      <BackgroundImage />
      <div className="relative z-10 p-8">
        <div className="container">
          <BibleVerse
            book="John"
            chapter={3}
            verse={16}
            text="For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
          />
          <div className="mt-16">
            <WelcomeMessage />
          </div>
        </div>

        {/* Placeholder content to enable scrolling 
        <div className="mt-16">
          <p className="text-black text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Maecenas sit amet turpis libero. Phasellus egestas tellus
            rutrum tellus consequat congue. Nullam dapibus cursus augue, a
            pretium libero tempus a. Cras mattis diam nec purus facilisis, ac
            gravida dui condimentum.
          </p>
          <p className="text-black text-lg mt-8">
            Integer vel augue nec nisl condimentum sodales. Nullam vehicula urna
            non nisi vestibulum, at tincidunt nisi scelerisque. Fusce in
            fermentum turpis. Curabitur eu feugiat ex. Nulla facilisi. Proin ac
            gravida nisi. Donec tempor elit vel ex ullamcorper, id vestibulum ex
            malesuada.
          </p>
        </div>*/}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
