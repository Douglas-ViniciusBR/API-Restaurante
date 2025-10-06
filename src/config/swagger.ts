import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export function setupSwagger(app: Express) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API Restaurante",
        version: "1.0.0",
        description: "API para gerenciamento de restaurante",
      },
      servers: [{ url: "http://localhost:3000/api" }],
    },
    apis: ["./src/routes/*.ts"], // <-- ESSENCIAL para ler as rotas
  };

  const swaggerSpec = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
