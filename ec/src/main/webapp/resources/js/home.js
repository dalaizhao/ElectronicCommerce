/**
 * Created by Administrator on 2017/7/11.
 */


$(window).on("load", function (){
    // $(".mainProNav dl dt").mouseover(function () {
    //     $(".mainProNav dl").removeClass("dlHover");
    //     $(this).parent().addClass("dlHover");
    // });
    // $(".mainProNav").mouseover(function () {
    //     $(this).addClass("mainProNavHover");
    // }).mouseout(function () {
    //     $(this).removeClass("mainProNavHover");
    //     $(".mainProNav dl").removeClass("dlHover");
    // });
    $(function () {
        // 循环轮播到某个特定的帧
        $(".slide-one").click(function () {
            $("#myCarousel").carousel(0);
        });
        $(".slide-two").click(function () {
            $("#myCarousel").carousel(1);
        });
        $(".slide-three").click(function () {
            $("#myCarousel").carousel(2);
        });
    });
    var temp_url = goods_data_url + "?cate_id=1&page_size=6&orderby=new";
    $.getJSON(temp_url, function (data) {
        var template = "<div class=\"col-xs-4\">" +
            "<div class=\"pro\">" +
            "<a href=\"toGoodsDetail.do?goods={goods_id}\"><img class=\"pic\" src=\"/ecwebsite/resources/{goods_image}\"></a>" +
            "<p class=\"pro-name\">{goods_name}</p><br/>" +
            "<p class=\"pro-price\">￥{goods_price}</p><br/>" +
            "</div></div>";
        for(var i=0; i<data.length && i<3; i++){
            $("#goods_list_11").append(template.format(data[i]));
        }
        for(var j=3; j<data.length && j<6; j++){
            $("#goods_list_12").append(template.format(data[j]));
        }
    });

    temp_url = goods_data_url + "?cate_id=290&page_size=6&orderby=new";
    $.getJSON(temp_url, function (data) {
        var template = "<div class=\"col-xs-4\">" +
            "<div class=\"pro\">" +
            "<a href=\"toGoodsDetail.do?goods={goods_id}\"><img class=\"pic\" src=\"/ecwebsite/resources/{goods_image}\"></a>" +
            "<p class=\"pro-name\">{goods_name}</p><br/>" +
            "<p class=\"pro-price\">￥{goods_price}</p><br/>" +
            "</div></div>";
        for(var i=0; i<data.length && i<3; i++){
            $("#goods_list_21").append(template.format(data[i]));
        }
        for(var j=3; j<data.length && j<6; j++){
            $("#goods_list_22").append(template.format(data[j]));
        }
    })
});