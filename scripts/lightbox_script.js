var output = "";
function lightbox(name) {
    output = "";
    $("#lightbox >  *").hide();
    switch (name) {
        case 'ASST':
            $("#ASST").show();
            break;
        case 'Parapluie':
            //output += "<h1 style='text-align:center; color:#FFD500;'><span class='stage5 then_hide'>우산 계획</span><span class='stage5'>우산 바이러스</span></h1>";
            //output += "<span class='stage5'>우산 계획</span>";
            $("#Parapluie").show();
            break;
        default:
            //output = "";
    }
    //$("#lightbox").html(output);
    //alert($("#lightbox").html());
    //document.getElementById("lightbox").innerHTML = output;
    //$("#lightbox").css('margin-left', (-1) * ($("#lightbox").width() / 2.0) + 'px');
    //$("#lightbox").css('margin-top', (-1) * ($("#lightbox").height() / 2.0) + 'px');
    $("#lightbox, #lightbox_shadow").show();
}
function close_lightbox() {
    //$("#lightbox").empty();
    $("#lightbox, #lightbox_shadow").hide();
}