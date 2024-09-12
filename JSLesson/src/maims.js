window.onload = {
    function foo(){
    let x = Number(prompt("Введите число x: "));
    let a = Number(prompt("Введите число a: "));
    const k = 3.141592
    let y = k * x + a * x ** 2;
    alert("Результат выполнения функции равен " + y);
    }

window.onload = function () {
    foo();
}

}