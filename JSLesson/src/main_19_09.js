$(document).ready(function () {

$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    type: "GET",
    success: function (data){
        for (key in data) {
            $("#ajaxPicture").append(key + ':' + data[key] + "<br>");
        }   
    }
    error: function (error) {
      $("#ajaxPicture").text(error);

    })
        $("#ajaxPicture").text(Date);
    })
    })
    
    
/*
$("p").append("Hello") - добавление значения в конце тега
$("p").prepend("Oh, man, Jesus Crist ...") - добавление значения в начало тега
$("p").remove() - удаление дочернего элемента (или указанного в методе)
$("p").empty() - удаление всех дочерних элементов
$("p").text() - текст установленный из jqwery
*/