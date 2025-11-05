import settings from '@/data/settings.json'

export function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40"/>
      </div>

      <div className="container-tight text-cream">
        <h1 className="h-serif text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
          {settings.heroTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cream/90">{settings.heroSubtitle}</p>
        <div className="mt-8 flex gap-4">
          <a href="#menu" className="btn btn-lg btn-primary">View Menu</a>
          <a href="#contact" className="btn btn-lg btn-outline">Find Us</a>
        </div>
      </div>
    </div>
  )
}
