// Clinic contact details, map embed and SEO schema — identical across every page.

export const CLINIC = {
  address: "Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011",
  phoneDisplay: "+91 636 670 0736",
  phoneHref: "tel:+916366700736",
  email: "kneevorthopaediccenter@gmail.com",
  hours: {
    weekdays: "Mon to Sat: 9:00 AM to 7:00 PM",
    sunday: "Sunday: By appointment",
  },
  distanceMarkers: [
    "Jayanagar (0 min)",
    "JP Nagar (5 min)",
    "Basavanagudi (7 min)",
    "Banashankari (8 min)",
    "BTM Layout (10 min)",
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.538133410082!2d77.5821029!3d12.937379700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c37637b029%3A0x51dafb847ff38263!2sKneev%20Orthopaedic%20Center%20%7C%20Dr.%20Amith%20Shetty!5e0!3m2!1sen!2sin!4v1780162330680!5m2!1sen!2sin",
};

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Kneev Orthopaedic Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560011",
        "addressCountry": "IN",
      },
      "telephone": "+916366700736",
      "url": "https://kneev.in",
      "medicalSpecialty": "Orthopedic",
    },
  ],
};
