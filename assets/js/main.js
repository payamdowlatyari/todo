//Check off items 
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Fade out and remove items 
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new items
$("input[type='text'").keypress(function(event){
    if (event.which === 13) {
       var newTodo = $(this).val();
       $(this).val(""); 

       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
    }
});

//Fade out and in the input
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});