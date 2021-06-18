import React from 'react';

const Test = () => {
    return (
        <>
            <div>Test</div>
        </>
    )
}

// export default async(req, res) => {
//     const fs = require('fs')
//     const pages = fs.readdirSync('pages');
//     let box;
//     pages.map((array)=>{
//         if ( array.indexOf('.js') > 0 ) { //ファイル名の最後にjsがついてるかで、フォルダか判断
//         if ( array != '_app.js' && array != '_document.js' ) {
//             let string = array.replace('.js','') //.jsを無かったものにする
//             if ( string == 'index' ) { string = '' }
//             const url = "https://college-review.netlify.app/" + string;
//             const time = new Date().toISOString().split('T')[0];
//             const content = '<url><loc>'+url+'</loc><lastmod>'+time+'</lastmod><priority>1.0</priority><changefreq>weekly</changefreq></url>'
//             return box += content
//         }
//         } else {
//         const pagefile = fs.readdirSync('src/pages/'+array);
//         pagefile.map((filearray)=>{
//             if ( filearray.indexOf('.js') > 0 ) {
//             let string = filearray.replace('.js','') //.jsを無かったものにする
//             if ( string == 'index' ) { string = '' }
//             const url = "https://college-review.netlify.app/" + array + '/' + string;
//             const time = new Date().toISOString().split('T')[0];
//             const content = '<url><loc>'+url+'</loc><lastmod>'+time+'</lastmod><priority>1.0</priority><changefreq>weekly</changefreq></url>'
//             return box += content
//             }
//         })
//         }
//         return
//     })

//     const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+box+'</urlset>'
//     res.status(200).setHeader('content-type', 'application/xml');
//     await res.write(xml);
//     await res.end();
// }

export default Test