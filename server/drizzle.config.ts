import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/schemas/*.schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://user:user@localhost:5432/my_db"
  },
});
