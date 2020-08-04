const data = {
  name: '',
  email: '',
  phone: '',
  how: '',
  type: '',
  other: '',
};

const form = document.querySelector('.container');

form.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();

  let isValidate = true;

  Object.keys(data).forEach((key) => {
    // check normal input
    if (key !== 'type' && key !== 'other') {
      const input = document.querySelector(`input[name="${key}"]`);

      if (!input.value) {
        isValidate = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
        data[key] = input.value;
      }
    }

    // check radio input
    if (key === 'type') {
      const radioGroup = document.querySelector('.radio');
      const radioInputs = document.querySelectorAll(
        'input[name="type"]:checked'
      );
      if (!radioInputs.length) {
        isValidate = false;
        radioGroup.classList.add('error');
      } else {
        radioGroup.classList.remove('error');
        data.type = document.querySelector('input[name="type"]:checked').value;
      }
    }
    // check other input
    if (key === 'other') {
      data.other = document.querySelector('input[name="other"]').value;
    }
  });

  if (isValidate) {
    const { name, email, phone, type, how, other } = data;
    alert(`
      暱稱: ${name},
      電子郵件: ${email},
      電話: ${phone},
      報名類型: ${type},
      怎麼知道這個活動的?: ${how},
      其他: ${other}
    `);
  }
}
