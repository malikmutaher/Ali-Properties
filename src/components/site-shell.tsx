import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const links = [{ to: "/", label: "Home" }, { to: "/properties", label: "Properties" }, { to: "/about", label: "About" }, { to: "/services", label: "Services" }, { to: "/reviews", label: "Reviews" }, { to: "/contact", label: "Contact" }] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? "border-border bg-ink/95 py-3 backdrop-blur-md" : "border-transparent bg-transparent py-5"}`}>
      <div className="mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link to="/" aria-label="Ali Properties home" className="flex min-w-0 items-center gap-3"><span className="grid size-9 shrink-0 place-items-center border border-primary font-serif text-xl text-primary">A</span><span className="truncate font-serif text-xl text-cream">Ali Properties</span></Link>
        <nav className="hidden items-center gap-7 lg:flex">{links.map((link) => <Link key={link.to} to={link.to} className={`editorial-label relative py-2 text-[0.62rem] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-primary after:transition-transform ${pathname === link.to || (link.to === "/properties" && pathname.startsWith("/properties/")) ? "text-primary after:scale-x-100" : "text-cream/75 after:scale-x-0 hover:text-cream hover:after:scale-x-100"}`}>{link.label}</Link>)}</nav>
        <div className="hidden justify-end lg:flex"><Button asChild variant="editorial" size="sm"><a href="tel:+923008074958"><Phone />Call now</a></Button></div>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="text-cream lg:hidden" onClick={() => setOpen(true)}><Menu /></Button>
      </div>
    </header>
    <div className={`fixed inset-0 z-[60] flex flex-col bg-ink transition-transform duration-700 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex items-center justify-between border-b border-border p-5"><span className="font-serif text-xl text-cream">Ali Properties</span><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}><X /></Button></div>
      <nav className="flex flex-1 flex-col justify-center px-8">{links.map((link, index) => <Link key={link.to} to={link.to} className="border-b border-border py-4 font-serif text-4xl text-cream transition-colors hover:text-primary"><span className="mr-4 align-middle font-sans text-[10px] text-primary">0{index + 1}</span>{link.label}</Link>)}</nav>
      <a href="tel:+923008074958" className="editorial-label border-t border-border p-6 text-primary">+92 300 8074958</a>
    </div>
    <main>{children}</main>
    <footer className="border-t border-border bg-ink px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1500px]"><div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]"><div><div className="font-serif text-5xl text-cream">Ali<br />Properties</div><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Considered real estate advisory for Lahore’s most discerning buyers, sellers and investors.</p></div><div><p className="editorial-label text-primary">Navigate</p><div className="mt-5 grid grid-cols-2 gap-3 text-sm text-cream/75">{links.slice(1).map((link) => <Link key={link.to} to={link.to} className="hover:text-primary">{link.label}</Link>)}</div></div><div><p className="editorial-label text-primary">Visit</p><p className="mt-5 text-sm leading-7 text-cream/75">Main Boulevard, Lake City<br />Sector M7 Mall, Lahore 54000</p><a href="tel:+923008074958" className="mt-3 inline-block text-sm text-primary">+92 300 8074958</a></div></div><div className="mt-16 flex flex-col gap-5 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Ali Properties. All rights reserved.</p><div className="flex gap-5"><a href="#" aria-label="Instagram"><Instagram className="size-4" /></a><a href="#" aria-label="Facebook"><Facebook className="size-4" /></a><a href="#" aria-label="LinkedIn"><Linkedin className="size-4" /></a></div></div></div>
    </footer>
    <a href="https://wa.me/923008074958" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full border border-primary bg-ink text-primary shadow-2xl transition-transform hover:scale-105"><span className="font-serif text-xl">W</span></a>
  </>;
}