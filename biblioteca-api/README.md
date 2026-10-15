---------- Biblioteca API -----------------------

API REST para gerenciamento de uma biblioteca, desenvolvida com Node.js, Express, Sequelize e SQLite.

===== Integrantes =====

- Geovani Marques
- Darlan Nóbrega

===== Tecnologias utilizadas =====

- Node.js
- Express
- Sequelize ORM
- SQLite
 
===== Requisitos =====

- Node.js instalado
- npm instalado

===== Instalação =====

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

npm install

===== Execução =====

Inicie o servidor:

npm start

A API ficará disponível em:

http://localhost:3000

O banco de dados SQLite fica em database/biblioteca.sqlite.

===== Rotas da API =====

===== Autores =====

| Método | Rota | Descrição |
|---|---|---|
| POST | /autores | Cadastrar autor |
| GET | /autores | Listar autores |
| GET | /autores/:id | Buscar autor por ID |
| PUT | /autores/:id | Atualizar autor |
| DELETE | /autores/:id | Excluir autor |

===== Livros =====

| Método | Rota | Descrição |
|---|---|---|
| POST | `/livros` | Cadastrar livro |
| GET | `/livros` | Listar livros com autor, categorias e paginação |
| GET | `/livros/:id` | Buscar livro por ID |
| PUT | `/livros/:id` | Atualizar livro |
| DELETE | `/livros/:id` | Excluir livro |
| POST | `/livros/:id/categorias` | Associar categoria a um livro |

===== Categorias =====

| Método | Rota | Descrição |
|---|---|---|
| POST | /categorias | Cadastrar categoria |
| GET | /categorias | Listar categorias |
| GET | /categorias/:id | Buscar categoria por ID |
| PUT | /categorias/:id | Atualizar categoria |
| DELETE | /categorias/:id | Excluir categoria |

===== Filtros e paginação de livros =====

A rota GET /livros aceita os seguintes parâmetros:

- titulo: filtra títulos que contenham o texto informado.
- ano: filtra pelo ano de publicação.
- disponivel: filtra pela disponibilidade (true ou false).
- page: número da página, começando em 1.
- limit: quantidade de livros por página, entre 1 e 100.

===== Exemplos =====

GET /livros?titulo=Dom
GET /livros?ano=1899
GET /livros?disponivel=true
GET /livros?page=1&limit=10
GET /livros?titulo=Dom&page=1&limit=5


A resposta da listagem possui os campos `data` e `pagination`.

Exemplo da estrutura de resposta:

json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 0,
    "totalPages": 0
  }
}


Os valores apresentados são ilustrativos; os dados retornados dependem do banco de dados e dos filtros utilizados.

------ Exemplos de requisições -----------

===== Cadastrar autor =====

Requisição POST /autores, com o corpo JSON:

json
{
  "nome": "Machado de Assis",
  "email": "machado@email.com",
  "nacionalidade": "Brasileiro"
}


===== Cadastrar livro =====

Requisição POST /livros, com o corpo JSON:

json
{
  "titulo": "Dom Casmurro",
  "isbn": "978-85-359-0275-5",
  "ano": 1899,
  "disponivel": true,
  "autorId": 2
}


O autorId deve corresponder a um autor existente no banco de dados. O ISBN deve ser único.

===== Cadastrar categoria =====

Requisição POST /categorias, com o corpo JSON:

json
{
  "nome": "Romance",
  "descricao": "Livros de romance"
}


===== Associar categoria a um livro =====

Requisição POST /livros/2/categorias, com o corpo JSON:

json
{
  "categoriaId": 2
}


O livro e a categoria informados devem existir no banco de dados.

===== Relacionamentos =====

- Um autor pode ter vários livros.
- Cada livro pertence a um autor.
- Um livro pode estar associado a várias categorias.
- Uma categoria pode estar associada a vários livros.

===== Banco de dados =====

O projeto utiliza SQLite com Sequelize ORM para mapear as entidades, definir os relacionamentos e executar operações no banco de dados.
