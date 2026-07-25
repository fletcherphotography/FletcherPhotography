export type BrandLogo = {
  id: string;
  name: string;
  href?: string;
};

// "Trusted by Brands and Organisations Across Switzerland" — 8 logos.
// TODO: replace with real client/brand logo files in /public/images/logos and set `src`.
export const brandLogos: BrandLogo[] = [
  { id: "b1", name: "Brand One" },
  { id: "b2", name: "Brand Two" },
  { id: "b3", name: "Brand Three" },
  { id: "b4", name: "Brand Four" },
  { id: "b5", name: "Brand Five" },
  { id: "b6", name: "Brand Six" },
  { id: "b7", name: "Brand Seven" },
  { id: "b8", name: "Brand Eight" },
];
