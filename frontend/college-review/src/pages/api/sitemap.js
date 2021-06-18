// import { SitemapStream, streamToPromise } from "sitemap";
// // import graphlqlFetch from "lib/apollo";

// export default async (req, res) => {
//     // const { posts } = await graphlqlFetch(`
//     //     query getSitemapData {
//     //     projects: allWorks {
//     //         slug {
//     //         current
//     //         }
//     //         publishedAt
//     //     }
//     //     }
//     // `);

//     const smStream = new SitemapStream({
//         hostname: "https://college-review.netlify.app",
//     });
//     // Add frontpage
//     smStream.write({
//         url: "/",
//     });
//     // Add a static url to ex: about page
//     smStream.write({
//         url: "/test/",
//     });

//     // posts.forEach((element) => {
//     //     smStream.write({
//     //     url: `/${element.slug.current}`,
//     //     lastmod: element.publishedAt,
//     //     });
//     // });

//     smStream.end();

//     const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());
//     res.setHeader("Content-Type", "text/xml");
//     res.write(sitemap);
//     res.end();
// };