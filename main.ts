import { Hono } from "jsr:@hono/hono";

const app = new Hono();
app.get("/", (ctx) => ctx.text(`${JSON.stringify(ctx.req)}`));

Deno.serve(app.fetch);
