//////// code jQuery
// $(function () {
//   $("p").css("background-color", "cyan");
// })


/////// code js
// function changeColor() {
//   const p = document.getElementsByTagName('p');
//   for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "cyan"
//   }
// }
// changeColor();

//select id trong jquery
// $('title');
// console.log($('#title'));

// //select class trong query
// $('.h2');
// console.log($('.h2'))

// // style toàn bộ thẻ p với background color: pink
// $(function(){
//     $('p').css("background-color", "pink");
//   })

$("button.continue").html("Next Step...")
$("button.continue").on("click", function(){
    $("#banner-message").css("display", "none")
})


