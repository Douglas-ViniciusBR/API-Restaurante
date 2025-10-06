import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
        title: "API Restaurante",
    version: "1.0.0",
    description: "Documentação da API Restaurante",
  },
  paths: {}, 
};

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
