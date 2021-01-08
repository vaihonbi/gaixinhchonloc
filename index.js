const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

const express = require('express');
const app = express();

const data = fs.readFileSync('data.json');
const data_final = JSON.parse(data);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { data: data_final });
});

app.listen(3000);

// const data = fs.readFileSync('data.json');
// const data_final = JSON.parse(data);
// for (let i = 1; i < 90; i++) {
//     // console.log(i);


//     const URL = `https://gaixinhchonloc.com/page/${i}`;

//     const options = {
//         uri: URL,
//         transform: function(body) {
//             //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
//             return cheerio.load(body);
//         },
//     };

//     (async function crawler() {
//         try {
//             // Lấy dữ liệu từ trang crawl đã được parseDOM
//             var $ = await rp(options);

//         } catch (error) {
//             return error;
//         }
//         // const data = [];
//         $("#grid > .gridItem").each((index, el) => {
//             const low = $(el).attr('data-photo-250'); // ảnh chất lượng thấp
//             const high = $(el).attr('data-photo-high'); // ảnh chất lượng cao
//             data_final.push({
//                 low,
//                 high
//             });
//         });
//         console.log(i);
//         fs.writeFileSync('data.json', JSON.stringify(data_final), function(err) {
//             if (err) throw console.log(err);
//         });

//     })();
// }