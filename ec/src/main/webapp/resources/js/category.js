var page_cate_id = get_cate_id();
var page = 0;
var orderby = "new";
var is_end = false;

$(window).on('load', function () {
    // waterFall();
    loadcate();
    $("#of_main_body").empty();
    loadgoods(get_goods_data_url(page_cate_id, orderby, page));
    $(".order-container button").click(order_click);
    $(window).scroll(function () {
        // console.info("window.scrolltop"+ $(window).scrollTop());
        // console.info("window.height"+ $(window).height());
        // console.info("document.height"+ $(document).height());
        if($(window).scrollTop() + $(window).height() >= $(document).height()){
            // console.info("end");
            page += 1;
            loadgoods(get_goods_data_url(page_cate_id, orderby, page))
        }
    })
});

function waterFall() {
    // console.info("waterfall");
    var $boxs = $(".main_box");
    var w = $boxs.eq(0).outerWidth();
    var cols = 4;
    var index = 0;
    var hArr = [0,0,0,0];
    for(index=0; index<$boxs.length; index++) {
        var value = $boxs.eq(index);
        var h = $boxs.eq(index).outerHeight();
        var minH = Math.min.apply(null, hArr);
        var minHIndex = $.inArray(minH, hArr);
        $(value).css({
            'position': 'absolute',
            'top': minH + 'px',
            'left': minHIndex * w + 'px'
        });
        // console.info("index:" + index + " h:" + h + " minH:" + minH + " minHIndex:" + minHIndex + " hArr:" + hArr);
        hArr[minHIndex] += h;
        var new_height = Math.max.apply(null, hArr)+10;
        var $main_body = $("#of_main_body");
        if($main_body.height() < new_height){
            $main_body.height(new_height);
        }
    }
}

function get_goods_data_url(page_cate_id, orderby, page) {
    var url = goods_data_url + "?";
    if(page_cate_id) url+="cate_id="+page_cate_id+"&";
    return url + "orderby=" + orderby + "&page=" + page;
}

function order_click(){
    $(".order-active").addClass("order-method").removeClass("order-active");
    $(this).addClass("order-active").removeClass("order-method");
    page = 0;
    // console.info($(this).attr("id"));
    switch($(this).attr("id")){
        case "order-sale":
            orderby = "sale";
            break;
        case "order-comment":
            orderby = "comment";
            break;
        case "order-new":
            orderby = "new";
            break;
        case "order-pricedown":
            orderby = "pricedown";
            break;
        case "order-priceup":
            orderby = "priceup";
            break;
    }
    $("#of_main_body").empty();
    loadgoods(get_goods_data_url(page_cate_id, orderby, page));
}

function get_cate_id() {
    var temp=window.location.href.split("?");
    if (temp.length>1){
        return temp[1].split("=")[1];
    }else{
        return null;
    }
}
function loadcate(){
    var url = cate_data_url;
    if (page_cate_id){
        url = cate_data_url + "?cate_id="+page_cate_id;
    }
    $.getJSON(url, function (data, status) {
        $(".cate-wrap").height(Math.ceil(data.cate_child.length/14) * 35);
        $.each(data.cate_path, function (i, item) {
            var content = "<li class=\"cate-nav-item\">" +
                "<a class=\"cate-nav-link\" href=\"toCategory.do?cate_id="+item.id+"\">"+item.name+"<span class=\"cate-nav-connector\">></span></a>" +
                "</li>";
            $(".cate-nav-container").append(content)
        });
        $.each(data.cate_child, function (i, item) {
            $(".value-container").append(
                "<li class=\"value-item\" >" +
                "<a class=\"cate-link\" href=\"toCategory.do?cate="+item.id+"\">"+item.name+"</a>" +
                "</li>"
            )
        });
    })
}

function loadgoods(url) {
    $.getJSON(url, function (data) {
        var content =
            "<div class=\"box_item\">"+
            "<a href=\"toGoodsDetail.do?goods={goods_id}\">"+
            "<img src=\"/ecwebsite/resources{goods_image}\">"+
            "</a>"+
            "<p class=\"pPrice\">¥{goods_price}</p>"+
            "<a class=\"pName\" href=\"toGoodsDetail.do?goods={goods_id}\"><p>{goods_name}</p></a>"+
            "</div>";
        $.each(data, function (i, item) {
            var block = document.createElement("div");
            var $block = $(block);
            $block.addClass("main_box");
            $block.html(content.format(item));
            $("#of_main_body").append($block);
            $img = $block.find("img").eq(0);
            $img.on("load", waterFall);
        });
        if(data.length<20){
            console.info("it is end");
            is_end = true;
        }
    })
}

