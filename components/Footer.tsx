import settings from '@/data/settings.json'

export function Footer() {
  return (
    <footer className="border-t border-sand py-10">
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cocoa/70">
        <div>© {new Date().getFullYear()} {settings.brandName}. All rights reserved.</div>
        <div className="flex gap-4">
          {settings.socials?.instagram && (
            <a className="hover:text-accent" href={settings.socials.instagram} target="_blank">Instagram</a>
          )}
          {settings.socials?.facebook && (
            <a className="hover:text-accent" href={settings.socials.facebook} target="_blank">Facebook</a>
          )}
          {settings.socials?.maps && (
            <a className="hover:text-accent" href={settings.socials.maps} target="_blank">Maps</a>
          )}
        </div>
      </div>
    </footer>
  )
}
