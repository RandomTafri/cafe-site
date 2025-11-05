import events from '@/data/events.json'

export function Events() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {events.items.map((e) => (
        <article key={e.title} className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="h-serif text-2xl font-semibold">{e.title}</h3>
            {e.date && <span className="text-sm text-cocoa/70">{e.date}</span>}
          </div>
          {e.subtitle && <p className="mt-1 text-cocoa/80">{e.subtitle}</p>}
          {e.content && <p className="mt-3 leading-relaxed">{e.content}</p>}
          {e.link && <a className="mt-3 inline-block text-accent hover:underline" href={e.link} target="_blank">Learn more</a>}
        </article>
      ))}
    </div>
  )
}
