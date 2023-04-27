import { Router } from "express";
import { methods as contactController } from "./../controllers/contact.controller.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let result = await contactController.getContact();
    console.log(result);
    res.render("./../../views/index.ejs", {
      contacts: result,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

export default router;
