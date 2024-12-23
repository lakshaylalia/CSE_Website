import { CldImage } from "next-cloudinary";
import React from "react";

export default function Faculty() {
  return (
    <div className="h-screen w-full text-9xl bg-black text-white font-bold flex justify-center items-center">
      <CldImage
        width="960"
        height="600"
        src={product.publicId}
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  );
}
