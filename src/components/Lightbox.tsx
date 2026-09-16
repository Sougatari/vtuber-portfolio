import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { image: string; alt: string; title?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const current = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-cream-200 hover:text-white bg-charcoal-800/60 hover:bg-charcoal-700/80 rounded-full transition-colors z-10 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-cream-200 hover:text-white bg-charcoal-800/60 hover:bg-charcoal-700/80 rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={current.image}
            src={`${import.meta.env.BASE_URL}${current.image}`}
            alt={current.alt}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-cream-200 hover:text-white bg-charcoal-800/60 hover:bg-charcoal-700/80 rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Caption + counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            {current.title && (
              <p className="text-cream-100 font-medium mb-1">{current.title}</p>
            )}
            {images.length > 1 && (
              <p className="text-cream-300 text-sm">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
