import { Hono } from 'hono'
import postgres from "postgres";

const sql = postgres(
  "postgresql://****",
);

const app = new Hono()

app.get('/', async (c) => {
  const resp = await sql`SELECT 1`
  return c.json(resp)
})

export default {
  port: 3001,
  fetch: app.fetch,
}
