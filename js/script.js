$( "document" ).ready(function() { 
$("#button").click(function(){
let userInput = $("#input").val();
$(".road").text(userInput);
});