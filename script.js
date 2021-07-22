let count = 0;
$(".button").click(function() {
    let inputOne = $(".inputOne").val();
    let inputTwo = $(".inputTwo").val();
    $(".results").append("<p>You are " + inputOne + " years old and you like " + inputTwo + ".</p>");
    $(".results").show();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");
    $(".header").append("<img src='https://media.farandwide.com/be/92/be9270671333472aa82ee60310cd5151.jpg'>");

});