// server.ts
import express from "express";

const app = express();
const DEV_TOKEN = process.env.DEV_TOKEN!;

app.get("/developersonlyembed.html", (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token !== DEV_TOKEN) {
    return res.status(403).send("403 — devs only 🔐");
  }
  res.sendFile(__dirname + "/public/developersonlyembed.html");
});

app.use(express.static("public"));
app.listen(3000);