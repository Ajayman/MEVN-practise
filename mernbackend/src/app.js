require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const bcrypt = require("bcryptjs");
// const { json } = require("express");
// const 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());

// show form data without showing undefined
app.use(express.urlencoded({ extended: false }));
// console.log(path.join(__dirname, "../public"));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(process.env.SECRET_KEY);

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword: cpassword
            })
            console.log(registerEmployee);
            //concept of middleware
            const token = await registerEmployee.generateAuthToken();
            //generating tokens
            

            const registered = await registerEmployee.save();
            console.log(registered);
            res.status(201).render("index");
        } else {
            res.send("invalid login detail")
        }
    } catch(error) {
        res.status(400).send(error);
    }
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({ email: email });

        const isMatch = bcrypt.compare(password, useremail.password)

        if (isMatch) {
            res.status(201).render("index");
        } else {
            res.send("password are not matching");
        }
    } catch (error) {
        res.status(400).send("Invalid Email");
    }
})


// const bcrypt = require("bcryptjs");

// const securePassword = async (password) => {
//     const passwordHash = await bcrypt.hash(password, 10);
//     // console.log(passwordHash);
//     const passwordMatch = await bcrypt.compare(password, passwordHash);
//     // console.log(passwordMatch);
// }

// securePassword("thapa@123");

// const jwt = require("jsonwebtoken");

// const createToken = async () => {
//     const token = await jwt.sign({ _id: "62d36b0bb7b8e04f52198706" }, "mynameisajayawalthatisyoutuberegis", {
//             expiresIn: "2 seconds"
//     });
//     console.log(token);

//     const userVerification = jwt.verify(token, "mynameisajayawalthatisyoutuberegis");
//     console.log(userVerification);
// }

// createToken();

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})
