/**
 * Created by Administrator on 2017/7/13.
 */
var goods_id = get_goods_id();

$(window).on("load", function () {
    loadgoods(goods_detail_url+"?goods_id="+goods_id);
    $(".shop-btn").on("click", add_cart);
});

function get_goods_id() {
    var temp=window.location.href.split("?");
    if (temp.length>1){
        return temp[1].split("=")[1];
    }else{
        return null;
    }
}

function loadgoods(url) {
    $.get(url, function (data) {
    	
    	console.log(data);
        var goods = data.goods;
        $(".goods-id-hidden").val(goods.id);
        $(".goods-image").attr("src", "/ecwebsite/resources"+goods.images[0].url);
        $(".goods-name").html(goods.name);
        $(".goods-detail").html(goods.detail);
        $("#original-price-num").html(goods.price);
        if(goods.onSale){
            $("#original-price-num").css("text-decoration", "line-through")
            $("#sale-price").html(goods.salePrice);
        }else{
            $("#special").hide();
        }
        $("#order-count-num").html(data.sale);
        $("#left-count-num").html(goods.left);
        $("#comment-count-num").html(data.comment);
        $(".goods-unit").html(goods.unit);

        $.each(data.cate_path, function (i, item) {
            var content = "<li class=\"nav-item\">" +
            "<a class=\"nav-link\" href=\"toCategory.do?cate_id={id}\">{name}</a>" +
                "</li>" +
                "<li class=\"nav-connector\">-></li>"
            $(".nav-container").append(content.format(item));
        });
    })
}
function add_cart() {
    var $shop_btn = $(".shop-btn");
    $shop_btn.attr("disabled", "disabled").addClass("btn-disabled");
    $shop_btn.html("处理中...");
    var data = {
        action: "add",
        goods_id: $(".goods-id-hidden").val(),
        amount: $(".amount-input").val()
    };
   /* $.post(shop_action_url, JSON.stringify(data),function (result, status) {
    	
    	console.log(result);
    	
        if(status==="success" && result.state!=="fail"){
            if(result.state==="success")
                $shop_btn.html("已加入");
            else if(result.state==="unloged")
                location.assign("toLogin.do")
        }else{
            $shop_btn.removeAttr("disabled").removeClass("btn-disabled");
            $shop_btn.html("加入失败，请重试")
        }
    })*/
    $.ajax(
            {
                type: "POST",
                url: shop_action_url,
                dataType: "json",
                async: true,
                data: JSON.stringify(data),
                contentType : "application/json;charset=utf-8",
                success: function (result, status) {
                    if(status==="success" && result.state!=="fail"){
                        if(result.state==="success")
                            $shop_btn.html("已加入");
                        else if(result.state==="unloged")
                            location.assign("toLogin.do")
                    }else{
                        $shop_btn.removeAttr("disabled").removeClass("btn-disabled");
                        $shop_btn.html("加入失败，请重试")
                    }
                }
            }
        );

}

