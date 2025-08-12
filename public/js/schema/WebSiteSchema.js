const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://drywallkingston.com",
  "name": "Drywall Repair Services Kingston Earnanswers",
  "datePublished": drywall_kingston_home_page.home_page_published_date,
  "dateModified": drywall_kingston_home_page.home_page_updated_date
};

const script1 = document.createElement('script');
script1.type = 'application/ld+json';
const text1 = JSON.stringify(websiteSchema)
// console.log("websiteSchema:" ,text1)
script1.text = text1
document.head.appendChild(script1);
