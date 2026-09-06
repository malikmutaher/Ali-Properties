import heroVilla from "@/assets/hero-villa.jpg";
import courtyard from "@/assets/property-courtyard.jpg";
import commercial from "@/assets/property-commercial.jpg";
import plots from "@/assets/property-plots.jpg";
import interior from "@/assets/interior-living.jpg";

export type Property = {
  id: string;
  title: string;
  type: "Residential" | "Commercial" | "Plots";
  location: string;
  price: string;
  priceValue: number;
  size: string;
  bedrooms: string;
  image: string;
  description: string;
};

export const properties: Property[] = [
  { id: "noor-residence", title: "Noor Residence", type: "Residential", location: "Lake City", price: "PKR 18.5 Cr", priceValue: 18.5, size: "2 Kanal", bedrooms: "6 Bedrooms", image: heroVilla, description: "A sculptural family residence where limestone, water and warm light create an atmosphere of enduring calm." },
  { id: "m7-courtyard-house", title: "M7 Courtyard House", type: "Residential", location: "Lake City", price: "PKR 9.8 Cr", priceValue: 9.8, size: "1 Kanal", bedrooms: "5 Bedrooms", image: courtyard, description: "Private courtyards and precise stonework shape a home made for quiet, contemporary living." },
  { id: "boulevard-one", title: "Boulevard One", type: "Commercial", location: "Gulberg", price: "PKR 24 Cr", priceValue: 24, size: "18,000 sq ft", bedrooms: "Grade A Offices", image: commercial, description: "A commanding commercial address with flexible floorplates, refined finishes and exceptional visibility." },
  { id: "orchard-estates", title: "Orchard Estates", type: "Plots", location: "Raiwind Road", price: "From PKR 2.4 Cr", priceValue: 2.4, size: "1–2 Kanal", bedrooms: "Possession Ready", image: plots, description: "Generous, green plots in a low-density enclave positioned for long-term capital appreciation." },
  { id: "the-atelier", title: "The Atelier", type: "Residential", location: "DHA Phase 6", price: "PKR 13.2 Cr", priceValue: 13.2, size: "1 Kanal", bedrooms: "5 Bedrooms", image: interior, description: "An interior-led residence pairing crafted walnut, travertine and garden-facing volumes." },
];

export const heroImage = heroVilla;
export const interiorImage = interior;