
function load_shop() {
    $.ajax({
        type: "GET",
        url: shop_data_url,
        dataType: "json",
        success: function (result, status) {
            var $shop_list = $(".shop-item");
            var $temp = $shop_list.eq(0);
            var $shop_item = $temp.clone().removeClass("hidden");
            var $container = $(".shop-item-container");
            $temp.remove();
            if(status!=="success"){
            	 info_print("#list-detail-2", "加载错误", false);
                return;
            }
            $.each(result, function (i, item) {
                $shop_item.attr("id", "shop-item"+i);
                $shop_item.find(".img-container a").attr("href", "toGoodsDetail.do?goods_id="+item.goods_id);
                $shop_item.find(".shop-item-image").attr("src","/ecwebsite/resources"+ item.goods_image[0].url);
                $shop_item.find(".shop-col-3 a").attr("href", "toGoodsDetail.do?goods_id="+item.goods_id);
                $shop_item.find(".shop-goodsname").html(item.goods_name);
                $shop_item.find(".shop-col-4").html("¥"+item.goods_price);
                $shop_item.find(".amount-input").val(item.amount);
                var price = (parseFloat(item.goods_price)*item.amount).toFixed(2);
                $shop_item.find(".shop-col-6").html("¥"+ price);
                $shop_item.find(".shop-id-hidden").val(item.cart_id);
                $shop_item.find(".goods-id-hidden").val(item.goods_id);
                $shop_item.find(".amount-hidden").val(item.amount);
                $container.append($shop_item);
                $shop_item = $shop_item.clone();
            });
            refresh_footer();
            info_print("#list-detail-2", "加载成功", true);

            $(".amount-input").on("change", function () {
                var $item = $(this).parent().parent();
                modify_shop($item)
            });
            $(".shop-delete").on("click", function () {
                var $item = $(this).parent().parent();
                delete_shop($item);
            });
            $(".all-select").on("click", function () {
                if($(this).is(":checked")){
                    $(".all-select, .item-select").prop("checked", true);
                    $(".shop-item").addClass("shop-selected");
                    refresh_footer();
                }else{
                    $(".all-select, .item-select").prop("checked", false);
                    $(".shop-item").removeClass("shop-selected");
                    refresh_footer();
                }
            });
            $(".item-select").on("click", function () {
                var $item = $(this).parent().parent();
                if($(this).is(":checked")){
                    $item.addClass("shop-selected");
                    refresh_footer();
                    var all_select = true;
                    $.each($(".item-select"), function (i, item) {
                        if(!$(item).is(":checked")){
                            all_select = false;
                        }
                    });
                    if(all_select){
                        $(".all-select").prop("checked", true);
                    }
                }else{
                    $item.removeClass("shop-selected");
                    refresh_footer();
                    $(".all-select").prop("checked", false);
                }
            });
            $(".delete-select").on("click", function () {
                $.each($(".shop-selected"), function (i, item) {
                    delete_shop($(item));
                })
            });
            $(".order-button").on("click", make_order);

            var h = $("#list-detail-2").outerHeight();
            if(h>600){
                $(".per").height(h+10);
            }
        },
        error: function () {
            info_print("#list-detail-2", "加载失败", false);
        }
    });
}

function refresh_footer() {
    var $shop_list = $(".shop-selected");
    var total_price = 0;
    $(".select-count").html($shop_list.length);
    $.each($shop_list, function (i, $item) {
        total_price += parseFloat($shop_list.eq(i).find(".shop-col-6").html().slice(1));
    });
    $(".total-price").html("¥"+ total_price);
    if($shop_list.length===0){
        $(".order-button").attr("disabled", "disabled").addClass("btn-disabled");
    }else{
        $(".order-button").removeAttr("disabled").removeClass("btn-disabled");
    }
}

function delete_shop($item) {
    $item.css("background-color", "#6E6E6E");
    $item.find(".amount-input").attr("readonly", "readonly");
    $.ajax({
        type: "POST",
        url: shop_action_url,
        dataType: "json",
        data: JSON.stringify({
            action:"delete",
            shop_id:$item.find(".shop-id-hidden").val()
        }),
        contentType : "application/json;charset=utf-8",
        success: function (result, status) {
            if(status==="success" && result.state==="success"){
                $item.remove();
                info_print("#list-detail-2", "删除成功", true);
                refresh_footer();
            }else{
                $item.removeAttr("style");
                $item.find(".amount-input").removeAttr("readonly");
                info_print("#list-detail-2", "删除失败", false);
            }
        },
        error: function () {
            $item.removeAttr("style");
            $item.find(".amount-input").removeAttr("readonly");
            info_print("#list-detail-2", "删除失败", false);
        }
    });
}

function modify_shop($item) {
    $amount_input = $item.find(".amount-input");
    $amount_hidden = $item.find(".amount-hidden");
    $amount_input.attr("readonly", "readonly");
    var shop_id = $item.attr("id");
    $.ajax({
        type: "POST",
        url: shop_action_url,
        dataType: "json",
        data: JSON.stringify({
            action: "modify",
            shop_id: $item.find(".shop-id-hidden").val(),
            amount: $amount_input.val()
        }),
        contentType: "application/json;charset=utf-8",
        success: function (result, status) {
            if(status==="success" && result.state === "success"){
                var price = parseFloat($item.find(".shop-col-4").html().slice(1));
                var amount = parseInt(result.data);
                $item.find(".shop-col-6").html("¥"+(price*amount).toFixed(2));
                $amount_input.val(amount);
                $amount_hidden.val(amount);
                $item.animate({backgroundColor: "#FF9988"}, 50);
                setTimeout("$(\".shop-item\").removeAttr(\"style\")", 110);
                $item.find(".error-info").addClass("hidden");

                info_print("#list-detail-2 #"+shop_id+" .shop-col-5", "修改成功", true);
                refresh_footer();
            }else{
                $amount_input.val($amount_hidden.val());
                info_print("#list-detail-2 #"+shop_id+" .shop-col-5", result.state||"修改失败", false);
            }
            $amount_input.removeAttr("readonly");
        },
        error: function () {
            $amount_input.val($amount_hidden.val());
            info_print("#list-detail-2 #"+shop_id+" .shop-col-5", "修改失败", false);
            $amount_input.removeAttr("readonly");
        }
    });
}

function make_order() {
    var $btn = $(".order-button");
    $btn.attr("disabled", "disabled").addClass("btn-disabled");
    $btn.html("订单生成中");
    var $shop_list = $(".shop-selected");
    var goods_list = [];
    $.each($shop_list, function (i, item) {
        goods_list.push({
            goods_id: $(item).find(".goods-id-hidden").val(),
            amount: $(item).find(".amount-hidden").val()
        })
    });
    var data = {
        action: "new",
        goods_data: goods_list
    };
    $.post(order_action_url, JSON.stringify(data), function (data, status){
        console.info("data:"+data+"|status:"+status);
        if(status==="success" && data.state==="success"){
            $(".shop-footer .error-info").addClass("hidden");
            $btn.html("订单已生成");
            location.assign("userInfo.html#3");
            location.reload();
        }else{
            $btn.removeAttr("disabled").removeClass("btn-disabled");
            $btn.html("下单");
            info_print("#list-detail-2", "下单失败！", false);
        }
    })
}
