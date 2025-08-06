"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

const photos = [
  { id: 1, src: "https://picsum.photos/200/300", title: "Tech Innovation", category: "Technology", likes: 24, height: 300 },
  { id: 2, src: "https://picsum.photos/400", title: "Team Collaboration", category: "Team", likes: 18, height: 400 },
  { id: 3, src: "https://picsum.photos/600", title: "Modern Office", category: "Office", likes: 32, height: 250 },
  { id: 4, src: "https://picsum.photos/500/400", title: "Digital Solutions", category: "Technology", likes: 45, height: 350 },
  { id: 5, src: "https://picsum.photos/500/300", title: "Creative Workspace", category: "Office", likes: 28, height: 280 },
  { id: 6, src: "https://picsum.photos/400/200", title: "Innovation Hub", category: "Technology", likes: 36, height: 320 },
  { id: 7, src: "https://picsum.photos/500/400", title: "Team Meeting", category: "Team", likes: 22, height: 380 },
  { id: 8, src: "https://picsum.photos/600/400", title: "Tech Conference", category: "Events", likes: 41, height: 290 },
  { id: 9, src: "https://picsum.photos/500/300", title: "Product Launch", category: "Events", likes: 38, height: 340 },
  { id: 10, src: "https://picsum.photos/700/300", title: "Code Review", category: "Technology", likes: 29, height: 260 },
  { id: 11, src: "https://picsum.photos/500/300", title: "Office Space", category: "Office", likes: 33, height: 370 },
  { id: 12, src: "https://picsum.photos/600/400", title: "Workshop", category: "Events", likes: 27, height: 310 },
]

const categories = ["All", "Technology", "Team", "Office", "Events"]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set())

  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory)

  const toggleLike = (photoId: number) => {
    setLikedPhotos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(photoId)) {
        newSet.delete(photoId)
      } else {
        newSet.add(photoId)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

<section className="relative overflow-hidden pb-20 pt-30 px-6">
  <div className="absolute inset-0">
    <Image 
      fill 
      alt="referenceImage" 
      className="object-cover brightness-75" 
      src="/image-banner.png" 
      priority
      quality={100}
    />
    {/* Dark overlay with stronger gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
  </div>
  <div className="relative container mx-auto text-center z-20">
    <AnimatedSection>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
          Photo <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Gallery</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Explore our collection of moments, innovations, and achievements captured through the lens
        </p>
      </div>
    </AnimatedSection>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="relative flex flex-wrap justify-center gap-4 mb-12 z-20"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-6 py-2 transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

      </section>


      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Photo Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of moments, innovations, and achievements captured through the lens
          </p>
        </motion.div> */}

        {/* Category Filter */}
        

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-4 cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
                style={{ height: photo.height }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium text-sm mb-1">{photo.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-xs">{photo.category}</span>
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleLike(photo.id)
                          }}
                          className="text-white hover:text-red-400 p-1 h-6 w-6"
                        >
                          <Heart className={`h-3 w-3 ${likedPhotos.has(photo.id) ? 'fill-red-400 text-red-400' : ''}`} />
                        </Button>
                        <span className="text-white/70 text-xs">{photo.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
                
                {/* Photo Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-semibold text-xl mb-1">{selectedPhoto.title}</h3>
                  <p className="text-white/80">{selectedPhoto.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}