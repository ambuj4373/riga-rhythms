export enum ListingCategory {
  Restaurant = "Restaurant",
  Culture = "Culture",
  Event = "Event",
  Cafe = "Cafe",
  Park = "Park",
  Landmark = "Landmark",
  Shopping = "Shopping",
  Nightlife = "Nightlife",
}

export interface Listing {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  category: ListingCategory;
  image: string;
  isPremium: boolean;
  insiderTip?: string;
  offer?: {
    title: string;
    description: string;
  };
  audioGuideUrl?: string; // a dummy field for demonstration
}