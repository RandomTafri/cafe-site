import reviews from '@/data/reviews.json'

export function Reviews() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {reviews.list.map((r, idx) => (
        <div key={idx} className="card p-6">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{r.name}</div>
            <div className="text-accent">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
          </div>
          <p className="mt-3 text-cocoa/90">“{r.comment}”</p>
          {r.source && <a className="mt-2 inline-block text-sm text-accent hover:underline" href={r.source} target="_blank">View source</a>}
        </div>
      ))}
    </div>
  )
}
