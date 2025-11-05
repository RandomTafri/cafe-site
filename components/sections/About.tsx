import settings from '@/data/settings.json'

export function About() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="card p-6">
        <h3 className="h-serif text-2xl font-semibold">{settings.brandStory.title}</h3>
        <p className="mt-3 leading-relaxed">{settings.brandStory.paragraph1}</p>
        <p className="mt-3 leading-relaxed">{settings.brandStory.paragraph2}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img className="rounded-2xl object-cover w-full h-40 md:h-56" src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=1200&auto=format&fit=crop" alt="Daylight interior"/>
        <img className="rounded-2xl object-cover w-full h-40 md:h-56" src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop" alt="Night interior"/>
        <img className="rounded-2xl object-cover w-full h-40 md:h-56" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop" alt="Coffee close-up"/>
        <img className="rounded-2xl object-cover w-full h-40 md:h-56" src="https://images.unsplash.com/photo-1481391319762-47dff72954d7?q=80&w=1200&auto=format&fit=crop" alt="Ambience"/>
      </div>
    </div>
  )
}
