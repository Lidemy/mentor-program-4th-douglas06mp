// 參考資料 https://blog.bearer.sh/node-http-request/
const http = require('http');

const [action, input1, input2] = process.argv.slice(2);

const actions = {
  list: 'GET',
  read: 'GET',
  delete: 'DELETE',
  create: 'POST',
  update: 'PATCH',
};

if (!Object.keys(actions).includes(action)) {
  console.log('Please provide valid action');
  return;
}

const url = 'lidemy-book-store.herokuapp.com';
let options = {};
let body = '';

switch (action) {
  case 'list':
    options = {
      hostname: url,
      path: '/books?_limit=20',
      method: actions[action],
    };
    listBooks(options);
    break;

  case 'read':
    if (!input1) {
      console.log('Enter the id of the book you want to read');
      return;
    }
    options = {
      hostname: url,
      path: `/books/${input1}`,
      method: actions[action],
    };
    readBook(options);
    break;

  case 'delete':
    if (!input1) {
      console.log('Enter the id of the book you want to delete');
      return;
    }
    options = {
      hostname: url,
      path: `/books/${input1}`,
      method: actions[action],
    };
    deleteBook(options);
    break;

  case 'create':
    if (!input1) {
      console.log('Enter the name of the book');
      return;
    }
    body = JSON.stringify({ name: input1 });
    options = {
      hostname: url,
      path: '/books',
      method: actions[action],
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };
    createBook(options, body);
    break;

  case 'update':
    if (!input1 || !input2) {
      console.log('Enter the id or new name of the book');
      return;
    }
    body = JSON.stringify({
      name: input2,
    });

    options = {
      hostname: url,
      path: `/books/${input1}`,
      method: actions[action],
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };
    updateBook(options, body);
    break;

  default:
    break;
}

function listBooks(options) {
  http
    .request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        let books;
        try {
          books = JSON.parse(data);
        } catch (error) {
          console.log(error);
        }

        books.forEach((book) => {
          const { name, id } = book;
          console.log(`ID: ${id} Name: ${name}`);
        });
      });
    })
    .end();
}

function readBook(options) {
  http
    .request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        let book;
        try {
          book = JSON.parse(data);
        } catch (error) {
          console.log(error);
        }

        console.log(`Name: ${book.name}`);
      });
    })
    .end();
}

function createBook(options, body) {
  http
    .request(options, (res) => {
      console.log(`Create book with name: ${input1}`);
    })
    .end(body);
}

function deleteBook(options) {
  http
    .request(options, (res) => {
      console.log(`Delete book with id: ${input1}`);
    })
    .end();
}

function updateBook(options, body) {
  http
    .request(options, (res) => {
      console.log(`Update book with id: ${input1}`);
    })
    .end(body);
}
