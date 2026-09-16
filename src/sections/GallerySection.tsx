import { useState } from 'react';
import { galleryItems, galleryCategories, showcaseItems } from '../data/gallery';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import YouTubeEmbed from '../components/YouTubeEmbed';
import NoTranslate from '../components/NoTranslate';
import type { GalleryCategory } from '../types';

type GalleryTab = 'art' | 'live2d';

export default function GallerySection() {
  const [galleryTab, setGalleryTab] = useState<GalleryTab>('art');
  const [activeCategory, setActiveCategory] = useState<'all' | GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const lightboxImages = filteredItems.map((item) => ({
    image: item.image,
    alt: item.alt,
    title: item.title,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle={<>A selection of my work —{' '}<NoTranslate>VTuber</NoTranslate>{' '}art and{' '}<NoTranslate>Live2D</NoTranslate>{' '}rigging showcases.</>}
        />

        {/* Art / Live2D toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-charcoal-800 rounded-xl p-1 border border-charcoal-700">
            <button
              onClick={() => setGalleryTab('art')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                galleryTab === 'art'
                  ? 'bg-gold-500 text-charcoal-950 shadow-md'
                  : 'text-cream-200 hover:text-cream-50'
              }`}
            >
              Art
            </button>
            <button
              onClick={() => setGalleryTab('live2d')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                galleryTab === 'live2d'
                  ? 'bg-gold-500 text-charcoal-950 shadow-md'
                  : 'text-cream-200 hover:text-cream-50'
              }`}
            >
              <NoTranslate>Live2D</NoTranslate>{' '}Showcases
            </button>
          </div>
        </div>

        {/* Art gallery tab */}
        {galleryTab === 'art' && (
          <div>
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as 'all' | GalleryCategory)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                      : 'bg-charcoal-800/50 text-cream-300 border border-charcoal-700/50 hover:border-charcoal-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-charcoal-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${item.thumbnail || item.image}`}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-cream-50 text-sm font-medium truncate">
                        {item.title}
                      </p>
                      {item.description && (
                        <p className="text-cream-300 text-xs truncate mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-cream-300 text-lg">
                  Gallery items coming soon. Stay tuned!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Live2D showcases tab */}
        {galleryTab === 'live2d' && (
          <div>
            {showcaseItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {showcaseItems.map((showcase) => (
                  <YouTubeEmbed key={showcase.id} showcase={showcase} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-cream-300 text-lg">
                  <NoTranslate>Live2D</NoTranslate>{' '}showcases coming soon. Stay tuned!
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((i) => (i + 1) % lightboxImages.length)}
        onPrev={() =>
          setLightboxIndex(
            (i) => (i - 1 + lightboxImages.length) % lightboxImages.length
          )
        }
      />
    </section>
  );
}
