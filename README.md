# Sistema de Gestão de Eventos

Este projeto consiste em uma versão simplificada de um sistema de gestão de eventos, desenvolvido utilizando as seguintes tecnologias: TypeScript, Prisma, Express, PostgreSQL, JWT (JSON Web Tokens) para autenticação, envio de notificações por e-mail e SMS, além de estratégias de teste unitário.

## Configuração do Ambiente

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js (versão 12 ou superior)
- PostgreSQL (instalado e em execução)

Após clonar o repositório, execute o seguinte comando na raiz do projeto para instalar as dependências:

```
npm install
```

Em seguida, configure as variáveis de ambiente criando um arquivo `.env` com as seguintes informações:

```
# PORT
PORT=porta que deseja inicial o localhost, exemplo:3000

# DATABASE
DATABASE_URL=postgresql://user:password@localhost:5432/database_name

# JWT
JWT_ACCESS_SECRET=sua_secret_jwt_access
JWT_REFRESH_SECRET=sua_secret_jwt_refresh

# EMAIL
SMTP_HOST=seu_host_smtp
SMTP_PORT=porta_smtp
SMTP_USER=seu_usuario_smtp
SMTP_PASS=sua_senha_smtp
SMTP_FROM=seu_email_de_origem

# TWILIO
TWILIO_ACCOUNT_SID=sua_conta_sid_do_twilio
TWILIO_TOKEN=seu_token_do_twilio
TWILIO_PHONE=seu_numero_de_telefone_twilio

# NODE_ENV
NODE_ENV=development
```

Certifique-se de preencher as informações corretas de acordo com o seu ambiente:

- `PORT`: Porta em que o servidor será executado (por exemplo, 3000).
- `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL.
- `JWT_ACCESS_SECRET` e `JWT_REFRESH_SECRET`: Chaves secretas usadas para assinar e verificar os tokens JWT.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` e `SMTP_FROM`: Configurações do provedor de e-mail SMTP.
- `TWILIO_ACCOUNT_SID`, `TWILIO_TOKEN` e `TWILIO_PHONE`: Credenciais e número de telefone do Twilio para envio de SMS.
- `NODE_ENV`: Ambiente de execução (por exemplo, development, production).

## Configuração do Banco de Dados

Certifique-se de ter um banco de dados PostgreSQL configurado. Crie um banco de dados e atualize o valor da variável `DATABASE_URL` no arquivo `.env` com as informações de conexão corretas.

Após configurar o banco de dados, execute as migrações do Prisma para criar as tabelas necessárias:

```
npx prisma migrate dev
```

## Executando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```
npm run dev
```

O servidor estará em execução em `http://localhost:3000`.

## Testes Unitários

Os testes unitários foram escritos utilizando a biblioteca Jest. Para executar os testes, execute o seguinte comando:

```
npm run test
```

## Rotas da API

A API

 possui as seguintes rotas:

- `POST /users`: Cria um novo usuário.
- `POST /login`: Autentica um usuário e retorna tokens de acesso e atualização.
- `POST /logout`: Invalida um token de atualização.
- `POST /events`: Cria um novo evento.
- `GET /events`: Retorna todos os eventos criados pelo usuário autenticado.
- `POST /events/:eventId/users`: Registra o usuário autenticado em um evento.
- `GET /users/:userId/events`: Retorna todos os eventos que o usuário está participando.
