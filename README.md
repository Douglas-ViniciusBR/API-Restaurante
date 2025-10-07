# API Restaurante

Pequena API de exemplo com Express + Prisma (Postgres).

Pré-requisitos
- Node.js (>=18)
- PostgreSQL local

Como rodar

1. Copie `.env` e atualize `DATABASE_URL` se necessário.
2. Instale dependências:

```
npm install
```

3. Gere o client do Prisma:

```
npm run prisma:generate
```

4. Aplique migrations (se houver):

```
npm run prisma:migrate
```

5. Rode em modo dev:

```
npm run dev
```

6. (Opcional) Rode os smoke tests que criam e validam dados no banco:

```
npm run smoke
```

Endereço local
- Rota raiz: `GET /`
- Swagger: `GET /api-docs`
- Endpoints: `/api/categorias`, `/api/pratos`, `/api/pedidos`

Observações
- Mantive o script `run_smoke_and_check_db.js` para testes rápidos locais.
