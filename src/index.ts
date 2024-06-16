import { Hono } from "hono";
import { dataSpices } from "./data/spices";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "welcome to REST API Spices ",
  });
});

app.get("/spices", (c) => {
  return c.json(dataSpices);
});

app.get("/spices/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      messafe: "There is no Id Spice",
    });
  }
  const spice = dataSpices.find((spice) => spice.id === id);
  if (!spice) {
    return c.json({
      messafe: "Spice not found",
    });
  }
  return c.json(spice);
});

console.log(`API Spices is running`);
export default app;
