import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4002;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hi from home!");

const handleLogin = (req, res) => res.send("Hi from login!");
const handleLogout = (req, res) => res.send("Hi from logout!");
const handleJoin = (req, res) => res.send("Hi from join!");
const handleFriends = (req, res) => res.send("Hi from friends!");
const handleMore = (req, res) => res.send("Hi from more!");
const handleCalendar = (req, res) => res.send("Hi from calendar!");
const handleSearch = (req, res) => res.send("Hi from search!");
const handleSettings = (req, res) => res.send("Hi from settings!");
const handleUpload = (req, res) => res.send("Hi from upload!");
const handleProfile = (req, res) => res.send("Hi from profile!");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/logout", handleLogout);
app.get("/join", handleJoin);
app.get("/friends", handleFriends);
app.get("/more", handleMore);
app.get("/calendar", handleCalendar);
app.get("/search", handleSearch);
app.get("/settings", handleSettings);
app.get("/upload", handleUpload);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
