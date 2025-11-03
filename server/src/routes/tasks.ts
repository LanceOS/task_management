import express from "express";
const router = express.router();


router.get("/create", (req: Request, res: Response) => {
  return "Hello World";
})

router.delete("/remove_task", (req: Request, res: Response) => {
  return "Hello World";
})


module.exports = router;
