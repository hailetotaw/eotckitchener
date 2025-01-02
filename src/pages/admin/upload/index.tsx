"use client";

import ImageUpload from "@/components/imageUpload";
import Navbar from "@/components/navbar";

export default function UploadPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Image Upload</h1>
        <ImageUpload
          onUploadComplete={(url) => {
            console.log("Upload successful:", url);
          }}
          onError={(error) => {
            console.error("Upload failed:", error);
          }}
        />
      </div>
    </>
  );
}
