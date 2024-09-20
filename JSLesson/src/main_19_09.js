$(document).ready(function () {
$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    type: "GET",
    success: function (data) {
        for (key in data) {
            $("#ajaxPicture").append(key + ":" + data[key] + "<br>");
        }   
    },
    error: function (error) {
      $("#ajaxPicture").text(error);
         },
        });
        });