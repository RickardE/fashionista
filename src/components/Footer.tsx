const links = [
  { href: "#about", label: "About" },
  { href: "#privacy", label: "Privacy" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-ink">
              FASHIONISTA
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              AI-powered personal fashion discovery.
            </p>
          </div>

          <nav className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Fashionista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
