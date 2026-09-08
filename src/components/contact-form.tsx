import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "923008074958";

export function ContactForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    const data = new FormData(form);
    const text = [
      `New enquiry — Ali Properties`,
      `Name: ${String(data.get("name") ?? "")}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Email: ${String(data.get("email") ?? "")}`,
      `Interest: ${String(data.get("interest") ?? "")}`,
      `Message: ${String(data.get("message") ?? "")}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    form.reset();
    setStatus("sent");
  }

  if (status === "sent") return <div className="flex min-h-80 flex-col items-start justify-center border-y border-primary/30"><Check className="mb-6 size-8 text-primary" /><h3 className="text-4xl text-cream">Thank you.</h3><p className="mt-3 text-muted-foreground">Our advisory team will contact you shortly.</p></div>;

  const fieldClass = "w-full border-0 border-b border-border bg-transparent py-4 text-sm text-cream outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
  return <form onSubmit={submit} className="space-y-3">
    <div className="grid gap-3 sm:grid-cols-2"><input className={fieldClass} name="name" placeholder="Name" minLength={2} required /><input className={fieldClass} name="phone" type="tel" placeholder="Phone" minLength={7} required /></div>
    <div className="grid gap-3 sm:grid-cols-2"><input className={fieldClass} name="email" type="email" placeholder="Email" required /><select className={fieldClass} name="interest" defaultValue={defaultInterest} required><option value="" disabled>Property interest</option><option>Residential</option><option>Commercial</option><option>Plots</option><option>Investment consultation</option>{defaultInterest && !["Residential","Commercial","Plots","Investment consultation"].includes(defaultInterest) ? <option>{defaultInterest}</option> : null}</select></div>
    <textarea className={`${fieldClass} min-h-32 resize-none`} name="message" placeholder="Tell us what you are looking for" minLength={10} required />
    {status === "error" && <p className="text-sm text-destructive">We couldn’t send your enquiry. Please call us directly.</p>}
    <Button type="submit" variant="editorial" size="lg" disabled={status === "sending"} className="mt-6">{status === "sending" ? "Sending" : "Send enquiry"}<ArrowUpRight /></Button>
  </form>;
}