Blog API with JWT Authentication
This project is a full-stack application that simulates a complete blog system with support for posts, comments, and user authentication using JWT. It is divided into three main parts: a RESTful API built with Express and Prisma, a public front-end for viewing posts and comments, and an admin dashboard for managing content.

✨ Features
Authors and Users: Authentication system based on JWT, supporting different user roles.

Posts: Create, edit, publish/unpublish, and delete posts. Each post has a title, content, timestamp, publication status, and author.

Comments: Any user can comment on posts. Comments include content, author name or email, and timestamp.

Admin Panel: Interface for authors to manage posts and comments, including actions like publishing/unpublishing, creating new content, and deleting comments.

Route Protection: Certain routes are protected and require JWT authentication.

Separate Deployment: API and front-ends are hosted independently, each with its own deployment.

🛠️ Tech Stack
Backend
Node.js + Express

Prisma ORM

PostgreSQL (or any relational database)

JWT for authentication

bcrypt for password hashing

Frontend
Plain HTML/CSS/JS or React.js (depending on your setup)

Fetch API for communication with the backend

LocalStorage for storing JWT tokens

Admin panel with optional rich-text editor (e.g., TinyMCE)

🔐 JWT Authentication
Authentication is handled using JWTs:

A successful login returns a JWT, which is stored in localStorage.

The token must be sent in the Authorization header using the Bearer schema to access protected routes.

Logging out removes the stored token from the client.

📂 Route Organization
The API follows RESTful standards, with routes organized around the following resources:

/api/posts

/api/comments

/api/users

/api/auth/login

Protected routes for creating and editing posts/comments

✅ Possible Future Enhancements
Authentication with refresh tokens

Image upload for posts

Like/dislike system for posts or comments

Improved user account management

🚀 Deployment
API deployed via [your preferred platform, e.g., Render/Heroku].

Public front-end and admin panel deployed separately via [e.g., Netlify, Vercel, or Cloudflare Pages].

🧪 Testing
Routes were tested using tools such as:

Postman

Insomnia

curl via terminal




\\----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

📝 Blog API com Autenticação JWT
Este projeto é uma aplicação full-stack que simula um sistema de blog com funcionalidades completas para posts, comentários e autenticação de usuários utilizando JWT. Ele é dividido em três partes principais: uma API RESTful construída com Express e Prisma, um front-end público para visualização de posts e comentários, e um painel administrativo para gerenciamento do conteúdo.

✨ Funcionalidades
Autores e Usuários: Sistema de autenticação baseado em JWT, com suporte a diferentes tipos de usuários.

Posts: Criação, edição, publicação/despublicação e exclusão de posts. Cada post possui título, conteúdo, data de criação, status de publicação e autor.

Comentários: Qualquer usuário pode comentar em posts. Os comentários incluem conteúdo, autor (com nome ou email) e data.

Painel Administrativo: Interface para autores gerenciarem posts e comentários, incluindo ações como publicar/despublicar posts, criar novos conteúdos e remover comentários.

Proteção de Rotas: Algumas rotas são protegidas e exigem autenticação via token JWT.

Deploy Separado: API e front-ends são hospedados separadamente, com deploys independentes.

🛠️ Tecnologias Utilizadas
Backend
Node.js + Express

Prisma ORM

PostgreSQL (ou outro banco relacional)

JWT para autenticação

bcrypt para hash de senhas

Frontend
HTML/CSS/JS puro ou React.js (dependendo da sua escolha)

Fetch API para comunicação com a API

LocalStorage para armazenamento do token JWT

Painel com funcionalidades para autores (possivelmente com editor rich-text como TinyMCE)

🔐 Autenticação JWT
A autenticação é feita com tokens JWT:

O login retorna um token JWT que é armazenado no localStorage.

Esse token deve ser enviado no cabeçalho Authorization com o esquema Bearer para acessar rotas protegidas.

Logout remove o token armazenado no cliente.

📂 Organização das Rotas
A API segue padrões RESTful, com rotas organizadas em torno dos seguintes recursos:

/api/posts

/api/comments

/api/users

/api/auth/login

Rotas protegidas para criação e edição de posts/comentários

✅ Possíveis Extensões Futuras
Autenticação com refresh tokens

Upload de imagens para posts

Like/dislike em posts ou comentários

Melhoria no gerenciamento de usuários

🚀 Deploy
API hospedada com [Plataforma de sua escolha, ex: Render/Heroku].

Front-end público e painel admin hospedados separadamente via [ex: Netlify, Vercel ou Cloudflare Pages].

🧪 Testes
As rotas foram testadas utilizando ferramentas como:

Postman

Insomnia

curl via terminal

