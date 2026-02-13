const path = require('path');
const fs = require('fs');

const createSiteMap = require('../../../miscellaneous/utils/custom-sitemap')

async function cont1(req, res, next) {
  // Set cache-control headers to prevent caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  res.setHeader('Pragma', 'no-cache');
  res.set('Pragma', 'no-cache');

  res.setHeader('Expires', '0');
  res.set('Expires', '0');

  res.set('Surrogate-Control', 'no-store');

  const PROJECT_ROOT = path.join(__dirname, '../../../');
  const xmlFilePath = path.join(PROJECT_ROOT, 'public', 'sitemap', 'sitemap.xml');
  const backlinksDir = path.join(__dirname, '../../../backlinks');

  // const xmlFilePath = path.join(__dirname, 'public', 'sitemap', 'sitemap.xml');

  // Delete the existing XML file if it exists
  if (fs.existsSync(xmlFilePath)) {
    fs.unlinkSync(xmlFilePath);
    console.log('Deleted existing sitemap.xml file');
  }


  const now = new Date();
  console.log('Now -> ', now);

  let last_modified_1 = '2024-06-02T15:07:49.699Z';
  let last_modified_1_date = new Date(last_modified_1);

  let last_modified_3 = '2024-06-21T15:04:37.758Z';
  let last_modified_3_date = new Date(last_modified_3);

  let last_modified_4 = '2024-06-24T13:13:22.821Z';
  let last_modified_4_date = new Date(last_modified_4);

  let last_modified_5 = '2024-10-07T18:42:50.563Z';
  let last_modified_5_date = new Date(last_modified_4);

  let last_modified_6 = '2024-10-28T15:38:48.402Z';
  let last_modified_6_date = new Date(last_modified_6);

  let last_modified_8 = '2025-09-21T15:17:55.711Z';
  let last_modified_8_date = new Date(last_modified_8);

  const drywall_kingston_home_page = await db.drywall_kingston_home_page.findAll({
    attributes: ['id', 'home_page_updated_date', 'home_page_published_date'],
    raw: true
  });

  if (!drywall_kingston_home_page) {
    const error = new Error("No drywall_kingston_home_page found!")
    return next(error)
  }


  console.log("\n\ndrywall_kingston_home_page.home_page_updated_date\n\n", drywall_kingston_home_page[0].home_page_updated_date)

  let last_modified_7_date = new Date(drywall_kingston_home_page[0].home_page_updated_date);


  const urls = [
    {
      URL: '/',
      lastmod: last_modified_7_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/request-free-quote',
      lastmod: last_modified_1_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/organization',
      lastmod: last_modified_1_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/about',
      lastmod: last_modified_1_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/car',
      lastmod: last_modified_5_date,
      changefreq: "monthly",
      priority: 1
    },
    {
      URL: '/sitemap',
      lastmod: last_modified_5_date,
      changefreq: "yearly",
      priority: 0.5
    },
  ];





  const main_services = await db.main_services.findAll({
    // attributes: ['id', 'home_page_updated_date', 'home_page_published_date'],
    raw: true
  });

  if (!main_services) {
    const error = new Error("No main_services found!")
    return next(error)
  }


  console.log(main_services)



  main_services.forEach(main_service => {

    let url = main_service.slug;

    console.log(main_service.service_page_edited)
    console.log(new Date(main_service.service_page_edited))

    let lastmod = new Date(main_service.service_page_edited)


    urls.push({
      URL: url,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1
    });


  });


  const service_pages = await db.service_page.findAll({
    attributes: ['slug', 'title', 'last_modified'],
    raw: true
  });



  if (!service_pages) {
    const error = new Error("No service pages found!")
    return next(error)
  }


  // console.log('\n\nservice_pages-> ', service_pages)

  service_pages.forEach(service_page => {

    let url = `/service/${service_page.slug}`;

    console.log(service_page.last_modified)
    let lastmod = new Date(service_page.last_modified)


    urls.push({
      URL: url,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 1
    });


  });


  const blog_elements = await db.blog_element.findAll({
    attributes: ['slug', 'title', 'datetime_edited'],
    include: [
      {
        model: db.category,
        as: 'category',
        attributes: ['category_name', 'slug']
      }
    ],
    raw: true,
    nest: true
  });


  if (!blog_elements) {
    const error = new Error("No blog elements found!")
    return next(error)
  }


  // console.log('\n\nblog_elements-> ', blog_elements)

  blog_elements.forEach(blog_element => {
    // console.log(blog_element);

    let url = `/blog/${blog_element.category.slug}/blog-posting/${blog_element.slug}`;

    let datetime_edited = new Date(blog_element.datetime_edited)


    urls.push({
      URL: url,
      lastmod: datetime_edited,
      changefreq: "monthly",
      priority: 0.8
    });


  });


  // return res.end()


  const backlink_pages_edited_date = '2026-02-13T18:27:54.977Z'
  const lastmod = new Date(backlink_pages_edited_date);

  const files = fs.readdirSync(backlinksDir);

  for (const file of files) {
    const match = file.match(/^backlink(\d+)\.txt$/i);
    if (!match) continue;

    const number = match[1];

    urls.push({
      URL: `/backlink/${number}`,
      lastmod: lastmod,
      changefreq: "monthly",
      priority: 0.8
    });
  }


  console.log(JSON.stringify(urls, null, 2));

  const xml = createSiteMap(urls);

  // console.log(xml)

  fs.writeFileSync(xmlFilePath, xml, 'utf-8');
  console.log('New sitemap.xml file generated');

  // return res.render('sitemap');
  // return res.sendFile('sitemap.html', { root: 'public' });
  return res.redirect(301, '/sitemap');
  // return res.end()
}




module.exports = {
  cont1
}