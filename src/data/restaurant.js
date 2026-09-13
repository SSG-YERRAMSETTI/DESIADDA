// DESI ADDA — Restaurant configuration.
// All placeholder fields are editable. Replace bracketed placeholders with real details.

export const RESTAURANT = {
  name: "DESI ADDA",
  tagline: "Indian Cuisine",
  // Replace with the real Clover ordering URL when supplied.
  // All "Order Online" buttons across the site use this value.
  cloverOrderUrl: "CLOVER_ORDER_URL",
  address: {
    line1: "2114 Holly Hall St",
    line2: "Houston, TX 77054",
  },
  phone: "(713) 790-7888",
  email: "[Email]",
  hours: "Monday – Sunday: 8:00 AM – 1:00 AM",
  // Google Maps directions link.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2114+Holly+Hall+St+Houston+TX+77054",
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