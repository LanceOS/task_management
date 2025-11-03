import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../auth.ts";


const authCheck = (req: Request) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers
  });

  return res.json(session);
}


