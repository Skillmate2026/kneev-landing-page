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
      "@id": "https://kneev.in/#clinic",
      "name": "Kneev Orthopaedic Centre",
      "description": "Robotic knee replacement and orthopaedic care in Jayanagar, Bangalore.",
      "image": "https://kneev.in/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ground floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560011",
        "addressCountry": "IN",
      },
      "telephone": "+916366700736",
      "email": "kneevorthopaediccenter@gmail.com",
      "url": "https://kneev.in",
      "medicalSpecialty": "Orthopedic",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "00:00", "closes": "00:00", "description": "By appointment" },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "112",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "Physician",
      "@id": "https://kneev.in/#physician",
      "name": "Dr. Amith P. Shetty",
      "medicalSpecialty": "Orthopedic Surgery",
      "hospitalAffiliation": { "@type": "Hospital", "name": "Manipal Hospitals, Apollo Hospitals" },
      "worksFor": { "@id": "https://kneev.in/#clinic" },
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://kneev.in/#business",
      "name": "Kneev Orthopaedic Centre - Robotic Knee Replacement",
      "areaServed": { "@type": "City", "name": "Bengaluru" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Orthopaedic Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robotic Knee Replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Knee Replacement Surgery" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Joint Replacement" } },
        ],
      },
    },
  ],
};
