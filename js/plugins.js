//loading-screen    
$(window).load(function()
{
    
    $(".loading-screen .main").fadeOut(2000,
    function()
    {
        $(this).parent().fadeOut(1000,
        function()
        {
            
            $("body").css("overflow","auto");
            
        $(this).remove();
            
        });
    });
});