let error_text = document.getElementById("error-txt");

function check() {
  let number = document.getElementById("numberinput").value;
  if (number.length == 0) {
    error_text.innerHTML = "input can't be Zer0 !";
    number.value = "";
  } else if (isNaN(number)) {
    error_text.innerHTML = "input Only can be Numbers";
    number.value = '';

  } else {
    error_text.innerHTML = '';
    number = Number(number);
    let count = 0;
    for (let i = 0; number / 10 != 0; i++) {
      number = Math.floor(number / 10);
      count++;
    }
    number.innerHTML = '';
    error_text.classList.remove("text-warning");
    error_text.classList.add("text-success");
    error_text.innerHTML = `totall length numbers is : ${count}`;
  }
  
}
