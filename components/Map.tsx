import settings from '@/data/settings.json'

export function Map() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden card">
      <iframe
        title="Cafe Location"
        className="w-full h-[320px] md:h-full"
        loading="lazy"
        src={settings.location.mapEmbedUrl}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
