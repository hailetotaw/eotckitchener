// // components/BackgroundImage.tsx
interface BackgroundImageProps {
  children: React.ReactNode;
}

const BackgroundImage: React.FC = () => {
  return (
    // <div
    //   className="bg-cover bg-center fixed top-0 left-0 w-full h-full z-0"
    //   style={{ backgroundImage: `url('/background-image.jpeg')` }}
    // >
    //   {children}
    // </div>
    // <div
    //   className="absolute inset-0 bg-cover bg-center h-screen"
    //   style={{ backgroundImage: "url('/background-image.jpeg')" }}
    // ></div>
    <div
      className="fixed top-16 inset-0 bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/background-image-new.jpeg')" }}
    ></div>
  );
};

export default BackgroundImage;
