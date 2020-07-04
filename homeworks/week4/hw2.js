const request = require('request');

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

const url = 'https://lidemy-book-store.herokuapp.com/books';
let options = {};

switch (action) {
  case 'list':
    options = {
      url: `${url}?_limit=20`,
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
      url: `${url}/${input1}`,
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
      url: `${url}/${input1}`,
      method: actions[action],
    };
    deleteBook(options);
    break;

  case 'create':
    if (!input1) {
      console.log('Enter the name of the book');
      return;
    }
    options = {
      url,
      method: actions[action],
      form: {
        name: input1,
      },
    };
    createBook(options);
    break;

  case 'update':
    if (!input1 || !input2) {
      console.log('Enter the id or new name of the book');
      return;
    }
    options = {
      url: `${url}/${input1}`,
      method: actions[action],
      form: { name: input2 },
    };
    updateBook(options);
    break;

  default:
    break;
}

function listBooks(options) {
  request(options, (err, res, body) => {
    if (err) {
      console.log(`Error: ${err}, please try again`);
      return;
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      console.log(error);
    }

    data.forEach((book) => {
      const { id, name } = book;
      console.log(`Id: ${id} Name: ${name}`);
    });
  });
}

function readBook(options) {
  request(options, (err, res, body) => {
    if (err) {
      console.log(`Error: ${err}, please try again`);
      return;
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      console.log(error);
    }

    console.log(`Name: ${data.name}`);
  });
}

function createBook(options) {
  request(options, (err) => {
    console.log(
      !err
        ? `Create book with name: ${input1}`
        : `Error: ${err}, please try again`
    );
  });
}

function deleteBook(options) {
  request(options, (err) => {
    console.log(
      !err
        ? `Delete book with id: ${input1}`
        : `Error: ${err}, please try again`
    );
  });
}

function updateBook(options) {
  request(options, (err) => {
    console.log(
      !err
        ? `Update book with id: ${input1}`
        : `Error: ${err}, please try again`
    );
  });
}
