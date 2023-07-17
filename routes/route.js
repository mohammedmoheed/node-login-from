import express from "express";
import apiKeyMiddleware from "../middlewares/apikey.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home page",
  });
});
router.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
  });
});
router.get("/download", (req, res) => {
  res.download(cwd + "/package.json");
});
router.get("/api/product", apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: 12,
      name: "apple",
    },
    {
      id: 13,
      name: "mango",
    },
  ]);
});

export default router;
