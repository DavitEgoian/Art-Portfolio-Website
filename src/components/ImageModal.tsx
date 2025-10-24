import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const ImageModal = ({ imageSrc, onClose }: ImageModalProps) => {
  useEffect(() => {
    if (imageSrc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [imageSrc]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (imageSrc) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [imageSrc, onClose]);

  if (!imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>
      
      <div 
        className="relative max-w-7xl max-h-[90vh] animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt="Expanded artwork"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ImageModal;
