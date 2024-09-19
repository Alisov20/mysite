let rectangle = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
}

function set_rectangle(o) {
  A = prompt("Введите координаты первой точки(через запятую):");
  o.A = A;
  B = prompt("Введите координаты первой точки(через запятую):");
  o.B = B;
  C = prompt("Введите координаты первой точки(через запятую):");
  o.C = C;
  D = prompt("Введите координаты первой точки(через запятую):");
  o.D = D;
}

function rectangleInfo(o) {
  alert(`Точка А: (${o.A})\nТочка B: (${o.B})\nТочка C: (${o.C})\nТочка D: (${o.D})`);

}

function getWidth(o){
  alert(`Ширина прямоугольника: ${Number(o.B[0]) - Number(o.A[0])}`)
}

function getHeight(o) {
  alert(`Высота прямоугольника: ${Number(o.А[2]) - Number(o.D[2])}`);
}

function getArea(o) {
  alert(`Площадь равна: ${(Number(o.B[0])) * (Number(o.A[2]))}`) 
}

function getPerimeter(o){
  alert(
    `Периметр равен: ${
      (Number(o.B[0])) - Number(o.A[0]) * 2 +
      (Number(o.A[2])) - Number(o.A[2]) * 2
    }`
  )
}