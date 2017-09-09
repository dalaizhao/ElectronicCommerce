var error_time_out = null;
var success_time_out = null;
info_print = info_print_func;

$(window).ready(function () {
    set_active_list(get_list_id());
    $(".list-item").click(function () {
        set_active_list(parseInt($(this).attr("id").split("-")[1]));
    });
});

function get_list_id() {
    var temp=window.location.href.split("#");
    if (temp.length>1){
        return parseInt(temp[1].split("?")[0]);
    }else{
        return 1;
    }
}

function set_active_list(n) {
    var $list = $(".list-item");
    $list.removeClass("list-active");
    $("#list-"+n).addClass("list-active");
    $(".perDetail").addClass("hidden");
    var $detail= $("#list-detail-"+n);
    $detail.removeClass("hidden");
    if(!$detail.hasClass("loaded")){
        load_list_detail(n);
    }
}

function load_list_detail(n) {
    console.info("load "+n);
    switch(n){
        case 1:
            load_userinfo();
            $("#list-detail-1").addClass("loaded");
            break;
        case 2:
            load_shop();
            $("#list-detail-2").addClass("loaded");
            break;
        case 3:
        	load_order();
            $("#list-detail-3").addClass("loaded");
            break;
        case 4:
            load_address();
            $("#list-detail-4").addClass("loaded");
            break;
        case 5:
            $("#list-detail-5").addClass("loaded");
            break;
    }
}

function info_print_func(selector, state, flag) {
    if(flag&&success_time_out) clearTimeout(success_time_out);
    if(!flag&&error_time_out) clearTimeout(error_time_out);
    if(flag){
        $(selector).find(".success-info").eq(0).removeClass("hidden").html(state);
        time_out = setTimeout("$(\""+ selector +"\").find(\".success-info\").eq(0).addClass(\"hidden\")", 2000);
    }else{
        $(selector).find(".error-info").eq(0).removeClass("hidden").html(state);
        time_out = setTimeout("$(\""+ selector +"\").find(\".error-info\").eq(0).addClass(\"hidden\")", 2000);
    }
}