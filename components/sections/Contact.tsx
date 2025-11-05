import settings from '@/data/settings.json'

export function Contact() {
  return (
    <div className="card p-6">
      <div className="grid gap-4">
        <div>
          <div className="font-semibold">Address</div>
          <div className="text-cocoa/80">{settings.location.address}</div>
        </div>
        <div>
          <div className="font-semibold">Phone</div>
          <div className="text-cocoa/80">{settings.contact.phone}</div>
        </div>
        <div>
          <div className="font-semibold">Email</div>
          <a className="text-accent hover:underline" href={`mailto:${settings.contact.email}`}>{settings.contact.email}</a>
        </div>
        <div>
          <div className="font-semibold">Hours</div>
          <ul className="text-cocoa/80 list-disc pl-5">
            {settings.hours.map((h) => (
              <li key={h.day}>{h.day}: {h.time}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
