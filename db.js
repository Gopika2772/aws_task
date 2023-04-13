const mysql = require("mysql");

const db = mysql.createConnection({
    host: "bdqjlewkplafwx6q3qtb-mysql.services.clever-cloud.com",
    database: "bdqjlewkplafwx6q3qtb",
    user: "u4j8qdlbrgy4h9pa",
    password: "4nt1iEvnH9agaMN5AsL",
    port: 20213,
});
// const connection = () => {
//     db.connect((err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("CONNECTED");
//         }
//     });
// };

module.exports = { db };