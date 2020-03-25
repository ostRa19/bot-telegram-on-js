//429132804
//https://api.telegram.org/bot981982065:AAHiNopV8X9U4l8xwvrPYAUeXzV8eszLeOA/getUpdates

//https://api.telegram.org/bot981982065:AAHiNopV8X9U4l8xwvrPYAUeXzV8eszLeOA/sendMessage?chat_id=-353570340&text=hello_I_am_a_bot

//https://api.telegram.org/bot981982065:AAHiNopV8X9U4l8xwvrPYAUeXzV8eszLeOA/getUpdates

document.querySelector('button').onclick = function () {
  let message = document.querySelector('.message').value;
  const token = '981982065:AAHiNopV8X9U4l8xwvrPYAUeXzV8eszLeOA';
  const url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-353570340&text=';
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + message, true);
  xhttp.send();
};
