const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Drywall Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Drywall Repair Services Kingston Earnanswers",
    "description": "We provide top-notch drywall installation and repair services for residential and commercial properties in the Kingston area.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1786 Bath Rd #18",
      "addressLocality": "Kingston",
      "addressRegion": "ON",
      "postalCode": "K7M 4Y2",
      "addressCountry": "Canada"
    },
    "telephone": "+1 (343) 477 1480",
    "email": "drywallkingston@outlook.com",

    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Service Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Drywall Installation",
            "name": "Drywall Installation",
            "description": "Expert Drywall Installation Services for Residential and Commercial Projects",
            "image": "https://drywallkingston.com/img/drywall-installation.avif",
            "url": "https://drywallkingston.com/service/drywall-installation-service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Drywall Repair Services Kingston Earnanswers"
            }
          },
          "priceCurrency": "CAD",
          // "price": "50.00"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Drywall Repair and Patching",
            "name": "Drywall Repair and Patching",
            "description": "Reliable Drywall Repair and Patching Services for Homes and Businesses",
            "image": "https://drywallkingston.com/img/drywall-repair.avif",
            "url": "https://drywallkingston.com/service/drywall-repair-and-patching-services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Drywall Repair Services Kingston Earnanswers"
            }
          },
          "priceCurrency": "CAD",
          // "price": "30.00"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Drywall Finishing and Texturing",
            "name": "Drywall Finishing and Texturing",
            "description": "Professional Drywall Finishing and Texturing for a Perfect Finish",
            "image": "https://drywallkingston.com/img/drywall-texturing.avif",
            "url": "https://drywallkingston.com/service/drywall-finishing-and-texturing-service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Drywall Repair Services Kingston Earnanswers"
            }
          },
          "priceCurrency": "CAD",
          // "price": "40.00"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Drywall Water Damage Repair Services",
            "name": "Drywall Water Damage Repair Services",
            "description": "Our team identifies the source of the damage, removes compromised sections, and installs new drywall with a seamless finish.",
            "image": "https://drywallkingston.com/img/water.webp",
            "url": "https://drywallkingston.com/service/drywall-water-damage-repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Drywall Repair Services Kingston Earnanswers"
            }
          },
          "priceCurrency": "CAD",
          // "price": "40.00"
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Walid Khan"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Drywall Repair Services Kingston Earnanswers did an outstanding job on my project. Their team was professional, efficient, and delivered top-quality work. They kept me informed throughout the process and made sure everything was completed on time and within budget. I highly recommend them for anyone looking for reliable and expert drywall services!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Zona G"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "I recently hired this drywall service contractor for a renovation, and I was really impressed with their professionalism and attention to detail. The team was punctual and worked efficiently, making sure the project met high standards. I also appreciated their clear communication throughout the entire process. I would definitely recommend them to anyone looking for drywall services!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Hal 'Haly' Lowie"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.5",
          "bestRating": "5"
        },
        "reviewBody": "Top-notch drywall repair. Friendly team, quick service, and perfect results. Will definitely hire again."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "3"
    }
  }
}




const script2 = document.createElement('script');
script2.type = 'application/ld+json';
const text2 = JSON.stringify(serviceSchema)
// console.log("localbusinessSchema:", text2)
script2.text = text2
document.head.appendChild(script2);


