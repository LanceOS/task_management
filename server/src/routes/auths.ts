import express from "express";
import auth from "../lib/auth.ts"

const router = express.router();


router.post("/sign_up", async (req: Request, res: Response) => {
  const body = await req.json();
  
  const data = await auth.api.signUpEmail({
    name: body.name,
    email: body.email,
    password: body.password,
    image: body.image,
    callbackUrl: "http://localhost:3000"
  });

  console.log(data);
  
  return res.json("Signed up successfully!")
});


router.post("/sign_in", async (req: Request, res: Response) => {
  const body = await req.json();

  const data = await auth.api.signInEmail({
    body: {
        email: "john.doe@example.com", // required
        password: "password1234", // required
        rememberMe: true,
        callbackURL: "https://example.com/callback",
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  console.log(data);

  if(data) {
    return res.json(data)
  }
});

