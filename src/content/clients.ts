export interface ClientLogo {
  name: string;
  logo: string;
  url?: string;
}

// Intentionally empty: per the no-fake-content policy, client logos are only
// added here once verified publication approval exists. The homepage
// component automatically hides the "Klien Kami" section when this array is
// empty and shows the safer "Pengalaman & Implementasi" framing instead.
export const clients: ClientLogo[] = [];
