import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.ts";

const app = express()
const PORT = 3000;

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.get("/", (req, res) => {
  return "Hello World";
});



app.listen(PORT, () => {
  console.log("LISTENING ON PORT: ", PORT)
})
