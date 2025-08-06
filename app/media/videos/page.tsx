"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, X, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

const videos = [
  { id: 1, title: "Company Overview 2024", thumbnail: "/placeholder.jpg", duration: "2:45", category: "Corporate",  height: 280 },
  { id: 2, title: "Tech Innovation Showcase", thumbnail: "/placeholder.jpg", duration: "4:12", category: "Technology",  height: 350 },
  { id: 3, title: "Team Culture & Values", thumbnail: "/placeholder.jpg", duration: "3:28", category: "Culture", height: 320 },
  { id: 4, title: "Product Demo: AI Solutions", thumbnail: "/placeholder.jpg", duration: "5:33", category: "Product",  height: 300 },
  { id: 5, title: "Client Success Stories", thumbnail: "/placeholder.jpg", duration: "6:15", category: "Testimonials", height: 380 },
  { id: 6, title: "Behind the Scenes", thumbnail: "/placeholder.jpg", duration: "3:47", category: "Culture",  height: 260 },
  { id: 7, title: "Office Tour", thumbnail: "/placeholder.jpg", duration: "2:15", category: "Culture",  height: 340 },
  { id: 8, title: "New Product Launch", thumbnail: "/placeholder.jpg", duration: "3:22", category: "Product",  height: 290 },
  { id: 9, title: "Developer Interview", thumbnail: "/placeholder.jpg", duration: "4:45", category: "Technology",  height: 360 },
]

const categories = ["All", "Corporate", "Technology", "Culture", "Product", "Testimonials"]

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set())
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory)

  const toggleLike = (videoId: number) => {
    setLikedVideos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(videoId)) {
        newSet.delete(videoId)
      } else {
        newSet.add(videoId)
      }
      return newSet
    })
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="min-h-screen ">
      
      <section className="pb-20 pt-30 px-6 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50 relative overflow-hidden">
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
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
              Video <span className="text-gradient">Gallery</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Watch our story unfold through engaging videos showcasing our innovations, culture, and success stories
              </p>
            </div>
          </AnimatedSection>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12 relative z-20"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Video Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our story unfold through engaging videos showcasing our innovations, culture, and success stories
          </p>
        </motion.div> */}

        {/* Category Filter */}
        

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-4 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
                style={{ height: video.height }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="rounded-full w-12 h-12 bg-white/90 hover:bg-white text-black hover:text-black shadow-lg">
                    <Play className="h-5 w-5 ml-0.5" />
                  </Button>
                </div>
                
                <Badge className="absolute bottom-3 right-3 bg-black/80 text-white text-xs">{video.duration}</Badge>
                <Badge variant="secondary" className="absolute top-3 left-3 text-xs">{video.category}</Badge>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <h3 className="text-white font-medium text-sm mb-1 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-xs">
                    {/* <span className="text-white/70">{video.views} views</span> */}
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(video.id)
                        }}
                        className="text-white hover:text-red-400 p-1 h-5 w-5"
                      >
                        {/* <Heart className={`h-3 w-3 ${likedVideos.has(video.id) ? 'fill-red-400 text-red-400' : ''}`} /> */}
                      </Button>
                      {/* <span className="text-white/70">{video.likes}</span> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-6xl mx-4 bg-black rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <video
                    ref={videoRef}
                    className="w-full h-full"
                    poster={selectedVideo.thumbnail}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="/placeholder-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={togglePlay}
                          className="text-white hover:bg-white/20 rounded-full p-2"
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={toggleMute}
                          className="text-white hover:bg-white/20 rounded-full p-2"
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </Button>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20 rounded-full p-2"
                      >
                        <Maximize className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
                
                {/* Video Info */}
                <div className="p-6 bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{selectedVideo.title}</h3>
                      {/* <p className="text-muted-foreground">{selectedVideo.description}</p> */}
                    </div>
                    <Badge variant="secondary">{selectedVideo.category}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      {/* <span>{selectedVideo.views} views</span> */}
                      <span>{selectedVideo.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {/* <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleLike(selectedVideo.id)}
                        className="flex items-center gap-2"
                      >
                        <Heart 
                          className={`h-4 w-4 ${likedVideos.has(selectedVideo.id) ? 'fill-red-400 text-red-400' : ''}`} 
                        />
                        {selectedVideo.likes}
                      </Button> */}
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}