const path = require("path");
const express = require("express");
const session = require("express-session");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const MongoStore = require("connect-mongodb-session")(session);
const cookieParser = require("cookie-parser");
const referrerPolicy = require("referrer-policy");
const port = process.env.PORT

module.exports = async (client) => {
    app.use(referrerPolicy({ policy: "strict-origin" }));

    app.set("views", path.join(__dirname, "/views"));

    const templateDir = path.resolve(`${process.cwd()}${path.sep}src/views`);
    app.use("/css", express.static(path.resolve(`${templateDir}${path.sep}assets/css`)));
    app.use("/js", express.static(path.resolve(`${templateDir}${path.sep}assets/js`)));
    app.use("/img", express.static(path.resolve(`${templateDir}${path.sep}assets/img`)));

    app.engine("ejs", ejs.renderFile);
    app.set("view engine", "ejs");
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    const store = new MongoStore({
        uri: process.env.MONGO_TOKEN,
        collection: "sessions"
    });


    app.use( session({
        store: store,
        secret: "#@%#&^$^$%@$^$&%#$%@#$%$^%&$%^#$%@#$%#E%#%@$FEErfgr3g#%GT%536c53cc6%5%tv%4y4hrgrggrgrgf4n",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 86400000 * 365 * 100 }
    }));
        app.get('/', async (req, res) => {
            res.render('index.ejs', {
                req: req,
                res: res
            })
        });
    app.listen(port)
}