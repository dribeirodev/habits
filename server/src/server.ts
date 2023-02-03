import Fasify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fasify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 4001,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("HTTP Server running in port 4001");
  });
