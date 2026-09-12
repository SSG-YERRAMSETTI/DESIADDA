// DESI ADDA — Restaurant configuration.
// All placeholder fields are editable. Replace bracketed placeholders with real details.

export const RESTAURANT = {
  name: "DESI ADDA",
  tagline: "Indian Cuisine",
  // Replace with the real Clover ordering URL when supplied.
  // All "Order Online" buttons across the site use this value.
  cloverOrderUrl: "CLOVER_ORDER_URL",
  address: {
    line1: "[Street Address]",
    line2: "[City, State ZIP]",
  },
  phone: "[Phone]",
  email: "[Email]",
  hours: "[Restaurant Hours]",
  // Google Maps URL (directions) — replace when available.
  mapsUrl: "",
  social: {
    instagram: "#",
    facebook: "#",
  },
};

// True once a real Clover URL (starting with http) is configured.
export const isOrderConfigured = () => {
  const url = RESTAURANT.cloverOrderUrl;
  return typeof url === "string" && url.startsWith("http");
};

export const orderUrl = () => RESTAURANT.cloverOrderUrl;