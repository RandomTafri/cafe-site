import gallery from '@/data/gallery.json'

export function Gallery() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {gallery.photos.map((p) => (
        <figure key={p.src} className="relative group overflow-hidden rounded-2xl border border-sand">
          <img src={p.src} alt={p.alt} className="w-full h-60 object-cover group-hover:scale-105 transition" />
          <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-sm text-white bg-black/40 opacity-0 group-hover:opacity-100 transition">
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
