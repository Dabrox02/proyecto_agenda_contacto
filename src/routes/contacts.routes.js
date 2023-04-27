import { Router } from "express";
import { methods as contactController } from "./../controllers/contact.controller.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    console.log(req.body);
    let result = await contactController.getContact();
    res.render("./../../views/index.ejs", {
      contacts: result,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

router.post("/insert", async (req, res, next) => {
  try {
    const contacto = req.body;
    await contactController.addContact(contacto);
    res.redirect("/");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

router.delete("/borrar/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await contactController.delContact(id);
    res.redirect("/");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

export default router;
