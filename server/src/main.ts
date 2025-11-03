import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.ts";

const app = express()
const PORT = 3000;

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json())

app.get("/", (req, res) => {
  return "Hello World";
});



app.listen(PORT, () => {
  console.log("LISTENING ON PORT: ", PORT)
})
