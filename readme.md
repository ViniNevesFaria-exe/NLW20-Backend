**# NLW Agents Back-end Project**

Este projeto representa o **Back-end** do sistema "Let me Ask" desenvolvido durante a **Next Level Week (NLW)** da **Rocketseat**.

---

## 📋 Descrição

O back-end fornece uma API RESTful construída com **Fastify** e **TypeScript**, utilizando **Drizzle ORM** para comunicação com um banco de dados **PostgreSQL**. A aplicação também integra a API de **GenAI** do Google para geração de respostas inteligentes.

## 🔧 Tecnologias

- **Node.js:** (>=16) Ambiente de execução JavaScript no lado do servidor.
- **TypeScript:** Superset do JavaScript com tipagem estática para maior robustez e manutenção do código.
- **Fastify:** Framework web leve e rápido utilizado para criar a API RESTful de forma performática.
- **Drizzle ORM:** ORM moderno, tipo-safe e leve que permite interação com o banco de dados utilizando queries em TypeScript.
- **PostgreSQL:** Banco de dados relacional robusto utilizado para armazenar as informações de salas e perguntas.
- **Google GenAI SDK:** SDK de IA generativa da Google usado para gerar respostas automáticas a partir de perguntas dos usuários.
- **Prisma ORM:** Abstração para comunicação com o banco de dados de forma tipada e segura.
- **ZOD:** Biblioteca de validação de dados que garante a integridade das informações recebidas nas requisições.
- **Express:** Framework web usado para criar rotas e lidar com requisições HTTP.
- **Docker:** Containerização da aplicação para facilitar o ambiente de desenvolvimento e deploy.

## 🚀 Funcionalidades Principais

- Cadastro e listagem de salas (`rooms`).
- Envio e listagem de perguntas em cada sala.
- Upload e processamento de arquivos de áudio.
- Geração de respostas automáticas via GenAI.

## 📂 Estrutura de Pastas

```
nlw/
├── docker/               # Scripts de setup do banco (setup.sql)
├── src/                  # Código-fonte em TypeScript
│   ├── db/               # Configuração de banco, migrações e seed
│   ├── http/             # Definição de rotas e handlers
│   └── services/         # Integrações externas (ex: GenAI)
├── .env.example          # Exemplo de variáveis de ambiente
├── Dockerfile?           # (se aplicável)
├── package.json          # Dependências e scripts
└── tsconfig.json         # Configuração TS
```

## ⚙️ Instalação e Setup

1. **Clonar o repositório**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd nlw
   ```

2. **Instalar dependências**

   ```bash
   npm install
   # ou yarn install
   ```

3. **Configurar variáveis de ambiente**

   ```bash
   cp .env.example .env
   # Ajuste as variáveis no .env conforme necessidade
   ```

4. **Iniciar banco de dados PostgreSQL**

   - **Opção Docker** (recomendado):

     ```bash
     docker run -d \
       --name nlw-postgres \
       -e POSTGRES_USER=docker \
       -e POSTGRES_PASSWORD=docker \
       -e POSTGRES_DB=agents \
       -p 5432:5432 \
       postgres:15
     ```

   - **Criar estrutura e seed**

     ```bash
     # Executar migrações
     npm run db:migrate

     # Popular dados iniciais (seed)
     npm run db:seed
     ```

## ▶️ Como Rodar

- **Modo Desenvolvedor** (com reload automático):

  ```bash
  npm run dev
  ```

- **Iniciar em Produção**:

  ```bash
  npm run build    # se houver script de build
  npm start        # npm run start
  ```

A API estará disponível em `http://localhost:3333` (porta definida no `.env`).

## 📖 Endpoints Principais

| Rota                          | Método | Descrição                     |
| ----------------------------- | ------ | ----------------------------- |
| `/rooms`                      | GET    | Listar salas                  |
| `/rooms`                      | POST   | Criar nova sala               |
| `/rooms/:roomId/questions`    | GET    | Listar perguntas de uma sala  |
| `/rooms/:roomId/questions`    | POST   | Enviar pergunta               |
| `/questions/:id/upload-audio` | POST   | Upload de áudio para pergunta |

## 🤝 Contribuição

1. Fork deste repositório
2. Crie uma branch para sua feature: `git checkout -b feature/nova-rota`
3. Commit suas mudanças: `git commit -m "feat: nova rota"`
4. Envie para o branch remoto: `git push origin feature/nova-rota`
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

> Desenvolvido durante a **Next Level Week** da **Rocketseat**. 🔥

