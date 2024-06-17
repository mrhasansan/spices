import { Hono } from "hono";
import { type Spices, dataSpices } from "./data/spices";

let spices = dataSpices;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "welcome to REST API Spices ",
    spices: "/spices",
  });
});

app.get("/spices", (c) => {
  if (spices.length <= 0) {
    return c.json({
      message: "There is no spices",
    });
  }
  return c.json(spices);
});

app.get("/spices/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      message: "There is no Id Spice",
    });
  }
  const spice = spices.find((spice) => spice.id === id);
  if (!spice) {
    return c.json({
      message: "Spice not found",
    });
  }
  return c.json(spice);
});

app.delete("/spices", async (c) => {
  spices = [];
  return c.json({
    message: "All Spices data have been deleted",
  });
});

app.delete("/spices/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      message: "There is no Id Spice",
    });
  }
  const spice = spices.find((spice) => spice.id === id);
  if (!spice) {
    return c.json({
      message: "Spice not found",
    });
  }
  spices = spices.filter((spice) => spice.id !== id);
  return c.json({
    message: `Spice with ${id} has been deleted`,
    deletedSpices: spice,
  });
});

app.post("/spices", async (c) => {
  const body = await c.req.json();

  const newSpice: Spices = {
    id: spices[spices.length - 1].id + 1,
    name: body.name,
    description: body.description,
    origin: body.origin,
    usage: body.usage,
    aroma: body.aroma,
    flavor: body.flavor,
    healthBenefits: body.healthBenefits,
    image: body.image,
  };

  const updateSpices = [...spices, newSpice];
  spices = updateSpices;
  return c.json(newSpice);
});

app.put("/spices/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      message: "There is no Id Spice",
    });
  }
  const spice = spices.find((spice) => spice.id === id);
  if (!spice) {
    return c.json({
      message: "Spice not found",
    });
  }
  const body = await c.req.json();

  const newSpice: Spices = {
    id: spice.id,
    name: body.name,
    description: body.description,
    origin: body.origin,
    usage: body.usage,
    aroma: body.aroma,
    flavor: body.flavor,
    healthBenefits: body.healthBenefits,
    image: body.image,
  };

  const updateSpices = spices.map((spice) => {
    if (spice.id === id) {
      return newSpice;
    } else {
      return spice;
    }
  });
  spices = updateSpices;
  return c.json(newSpice);
});

console.log(`API Spices is running`);
export default app;
