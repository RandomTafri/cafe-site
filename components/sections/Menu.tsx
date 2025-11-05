import menu from '@/data/menu.json'

export function Menu() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {menu.categories.map((cat) => (
        <div key={cat.name} className="card p-6">
          <div className="h-serif text-2xl font-semibold">{cat.name}</div>
          <div className="mt-4 space-y-4">
            {cat.items.map((i) => (
              <div key={i.name} className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="font-medium">{i.name}</div>
                  {i.desc && <div className="text-sm text-cocoa/70">{i.desc}</div>}
                </div>
                <div className="font-semibold">{i.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
