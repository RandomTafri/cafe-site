export function Section({ id, title, sub, children }: { id: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container-tight">
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
