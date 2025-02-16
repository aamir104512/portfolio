import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  images: string[];
  trigger: React.ReactNode;
}

export function ImageModal({ images, trigger }: ImageModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [open, setOpen] = useState(false);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.5, 1));
  const handleReset = () => setScale(1);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-full p-0 overflow-hidden">
        <div className="relative h-full">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 z-50"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          {!selectedImage ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 max-h-[80vh] overflow-y-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[9/19] cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative h-[80vh] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm p-6"
              >
                <div className="overflow-hidden h-full w-full flex items-center justify-center">
                  <motion.img
                    src={selectedImage}
                    alt="Full size screenshot"
                    style={{ 
                      scale,
                      transition: "scale 0.2s ease-out"
                    }}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  <Button size="sm" onClick={handleZoomOut}>-</Button>
                  <Button size="sm" onClick={handleReset}>Reset</Button>
                  <Button size="sm" onClick={handleZoomIn}>+</Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}