function deleteMe() {
  document.getElementById('input').value = '';
}

function calculator(newValue) {
  document.getElementById('input').value += newValue;
}

function cut() {
  let a = document.getElementById('input').value;
  let cutA = a.slice(0, -1);
  document.getElementById('input').value = cutA;
}

function answer() {
  let a = document.getElementById('input').value;
  let b = eval(a);
  document.getElementById('input').value = b;
}