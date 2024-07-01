import { Hono } from "hono";
import { prisma } from "./libs/prisma";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "welcome to REST API Spices ",
    spices: "/spices",
  });
});

app.get("/spices", async (c) => {
  try {
    const spices = await prisma.spice.findMany();
    return c.json(spices);
  } catch (error) {
    console.error("Error fetching spices:", error);
    return c.json({ error: "Error fetching spices" }, 500);
  }
});

app.get("/spices/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      message: "There is no Id Spice",
    });
  }
  try {
    const spice = await prisma.spice.findUnique({
      where: { id: id },
    });
    if (!spice) {
      c.status(404);
      return c.json({
        message: "Spice not found",
      });
    }
    return c.json(spice);
  } catch (error) {
    console.error("Error fetching spice:", error); // Added error handling
    return c.json({ error: "Error fetching spice" }, 500);
  }
});

app.delete("/spices", async (c) => {
  try {
    await prisma.spice.deleteMany();

    return c.json({
      message: "All Spices data have been deleted",
    });
  } catch (error) {
    console.error("Error deleting spices:", error); // Added error handling
    return c.json({ error: "Error deleting spices" }, 500);
  }
});

app.delete("/spices/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      message: "There is no Id Spice",
    });
  }

  try {
    const deletedSpice = await prisma.spice.delete({
      where: { id: id },
    });
    return c.json({
      message: `Spice with ${id} has been deleted`,
      deletedSpice,
    });
  } catch (error) {
    console.error("Error deleting spice:", error);
    return c.json({ error: "Error deleting spice" }, 500);
  }
});

app.post("/spices", async (c) => {
  const body = await c.req.json();
  console.log("Received body:", body); // Log the received body

  try {
    const newSpice = await prisma.spice.create({
      data: {
        name: String(body.name),
        description: String(body.description),
        origin: String(body.origin),
        usage: String(body.usage),
        flavor: String(body.flavor),
        health_Benefits: String(body.health_Benefits),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return c.json(newSpice);
  } catch (error) {
    console.error("Error creating spice:", error);
    return c.json({ error: "Error creating spice" }, 500);
  }
});

app.put("/spices/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      message: "There is no Id Spice",
    });
  }
  const body = await c.req.json();
  try {
    const newSpice = await prisma.spice.update({
      where: { id },
      data: {
        name: body.name ? String(body.name) : undefined,
        description: body.description ? String(body.description) : undefined,
        origin: body.origin ? String(body.origin) : undefined,
        usage: body.usage ? String(body.usage) : undefined,
        flavor: body.flavor ? String(body.flavor) : undefined,
        health_Benefits: body.healthBenefits ? String(body.healthBenefits) : undefined,
      },
    });

    return c.json(newSpice);
  } catch (error) {
    console.error("Error updating spice:", error);
    return c.json({ error: "Error updating spice" }, 500);
  }
});

console.log(`API Spices is running`);
export default app;
