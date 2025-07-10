# NLW Agents

Projeto desenvolvido durante o evento da Rocketseat.

## Descrição

O NLW Agents é uma aplicação fullstack composta por um backend em Node.js com Fastify e um frontend em React, utilizando TypeScript em ambos. O objetivo é gerenciar salas (rooms) com integração a banco de dados PostgreSQL.

---

## Tecnologias e Bibliotecas Utilizadas

### Backend (`nlw/`)
- **Node.js** + **TypeScript**
- **Fastify**: Framework web para Node.js
- **Zod**: Validação de esquemas e tipos
- **Drizzle ORM**: ORM para integração com PostgreSQL
- **drizzle-seed**: Seed de dados para o banco
- **PostgreSQL**: Banco de dados relacional
- **@fastify/cors**: Middleware CORS

### Frontend (`web/`)
- **React** + **TypeScript**
- **Vite**: Bundler e dev server
- **React Router DOM**: Gerenciamento de rotas
- **@tanstack/react-query**: Gerenciamento de dados assíncronos
- **TailwindCSS**: Estilização utilitária
- **class-variance-authority**, **clsx**, **tailwind-merge**: Utilitários para composição de classes CSS
- **Radix UI**: Componentes acessíveis

---

## Padrões de Projeto

- **Monorepo**: Separação clara entre backend (`nlw/`) e frontend (`web/`)
- **Barrel Files**: Exportação centralizada de schemas no backend
- **Type-safe API**: Uso de Zod para validação e tipagem de rotas
- **Componentização**: Componentes reutilizáveis no frontend

---

## Setup e Configuração

### Pré-requisitos

- Node.js (v18+)
- Docker (para banco de dados PostgreSQL)
- Yarn ou npm

### 1. Clonar o repositório

```sh
git clone <url-do-repo>
cd intermediario
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env` em `nlw/` e ajuste se necessário:

```sh
cp nlw/.env.example nlw/.env
```

### 3. Subir o banco de dados com Docker

```sh
cd nlw
docker compose up -d
```

### 4. Instalar dependências

```sh
cd nlw
npm install

cd ../web
npm install
```

### 5. Rodar as migrations e seed

```sh
# No diretório nlw/
npm run db:seed
```

### 6. Iniciar o backend

```sh
npm run dev
```

### 7. Iniciar o frontend

```sh
cd ../web
npm run dev
```

---

## Observações

- O backend roda por padrão na porta **3333**.
- O frontend roda por padrão na porta **5173**.
- Certifique-se de que o banco de dados está rodando antes de iniciar o backend.

---

Projeto desenvolvido durante o evento NLW Agents