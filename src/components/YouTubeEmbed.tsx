import { useState } from 'react';
import { Play } from 'lucide-react';
import type { IShowcase } from '../types';
import { extractYouTubeId, getYouTubeThumbnail } from '../utils/youtube';

interface YouTubeEmbedProps {
  showcase: IShowcase;
}

export default function YouTubeEmbed({ showcase }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract clean video ID from whatever format was provided
  const videoId = extractYouTubeId(showcase.youtubeId);

  // Use custom thumbnail, or auto-generate from YouTube
  const posterUrl =
    showcase.thumbnail ||
    (videoId ? getYouTubeThumbnail(videoId, 'hqdefault') : '');

  // If ID extraction fails, show error state
  if (!videoId) {
    return (
      <div className="group relative">
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-charcoal-800 flex items-center justify-center">
          <p className="text-cream-300 text-sm">Invalid YouTube ID or URL</p>
        </div>
        <div className="mt-3">
          <h4 className="text-cream-100 font-medium text-sm">{showcase.title}</h4>
        </div>
      </div>
    );
  }

  if (isLoaded) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden bg-charcoal-900">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={showcase.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="group relative">
      <button
        onClick={() => setIsLoaded(true)}
        className="relative aspect-video w-full rounded-xl overflow-hidden bg-charcoal-900 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2"
        aria-label={`Play ${showcase.title}`}
      >
        {/* Poster image */}
        <img
          src={posterUrl}
          alt={`${showcase.title} — click to play`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-500/90 group-hover:bg-gold-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/30">
            <Play size={28} className="text-charcoal-950 ml-1" fill="currentColor" />
          </div>
        </div>
      </button>

      {/* Info below poster */}
      <div className="mt-3">
        <h4 className="text-cream-100 font-medium text-sm">{showcase.title}</h4>
        {showcase.description && (
          <p className="text-cream-300 text-xs mt-1">{showcase.description}</p>
        )}
        {showcase.features && showcase.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {showcase.features.map((feature, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 rounded-full bg-charcoal-700/50 text-cream-200 border border-charcoal-600/30"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
