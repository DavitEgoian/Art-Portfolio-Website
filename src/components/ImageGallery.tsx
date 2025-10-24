import { useState } from "react";
import ImageModal from "./ImageModal";

// Portfolio images - add your own images to src/assets folder
const images = [
  { id: 1, src: "/placeholder.svg", alt: "Artwork 1" },
  { id: 2, src: "/placeholder.svg", alt: "Artwork 2" },
  { id: 3, src: "/placeholder.svg", alt: "Artwork 3" },
  { id: 4, src: "/placeholder.svg", alt: "Artwork 4" },
  { id: 5, src: "/placeholder.svg", alt: "Artwork 5" },
  { id: 6, src: "/placeholder.svg", alt: "Artwork 6" },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-card/50 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <ImageModal 
        imageSrc={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </>
  );
};

export default ImageGallery;
