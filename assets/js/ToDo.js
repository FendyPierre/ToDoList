//Check Off Specific Todo by clicking
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

//click X to delete
$("ul").on("click","span", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var toDoInput = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoInput + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});