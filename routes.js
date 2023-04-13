
const express = require("express");
const router = express.Router();
const { connection, db } = require("./db");

// connection();
// let emaill = {};
router.route("/").get((req, res) => {
    res.render("index")
})
router.route("/allusers").post((req, res) => {


    const {
        fname,
        lname,
        email,
        phno,
        dob,
        gender,
        add1,
        add2,
        city,
        state,
        code,
        country,
    } = req.body;
    // emaill = email;
    console.log(req.body);
    db.query(
        "INSERT INTO formData(fname,lname,email,phno,dob,gender,add1,add2,city,state,code,country) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
        [
            fname,
            lname,
            email,
            phno,
            dob,
            gender,
            add1,
            add2,
            city,
            state,
            code,
            country,
        ],
        (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                console.log(resp);
                return res.redirect(`/${resp.insertId}`);
            }
        }
    );
});

router.route("/:uid").get(async (req, res) => {
    const { uid } = req.params;

    await db.query('SELECT * FROM formData WHERE uid = ?', [uid], (err, resp) => {
        if (err) {
            console.log(err);
        } else {
            const user = resp[0]
            console.log(resp);
            // res.render("users", { users })
            res.render("users", {
                user: user ? user : {
                    fname: '',
                    lname: '',
                    email: '',
                    phno: '',
                    dob: '',
                    gender: '',
                    add1: '',
                    add2: '',
                    city: '',
                    state: '',
                    code: '',
                    country: ''
                }
            })
        }
    });
});
module.exports = router;