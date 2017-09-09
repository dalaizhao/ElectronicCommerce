/**
 * Created by Administrator on 2017/7/11.
 */
user_data_url = "data/getUserInfo.do";
cate_data_url = "data/getCate.do";
goods_data_url = "data/getGoods.do";
goods_detail_url = "data/getGoodsDetail.do";
shop_data_url = "data/getCart.do";
shop_action_url = "data/operateCart.do";
userinfo_modify_url = "data/saveUserInfo.do";
order_action_url = "data/orderaction.json";
addr_data_url = "data/getAddress.do";
addr_action_url = "data/operateAddr.do";
region_data_url = "data/getRegion.do";

order_data_url = "/ecwebsite/resources/orderdata.json";


function format () {
    if (arguments.length === 0) return this;

    // setup args
    var iter;
    if (arguments.length > 1) { // string arguments
        iter = arguments;
    } else {
        iter = arguments[0];
    }

    // perform replace
    var ret = this;
    for (var i in iter) {
        ret = ret.replaceAll('{'+i+'}', iter[i]);
    }

    // done
    return ret;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// export
String.prototype.format = format;

/*//header js
$.getJSON(user_data_url, function (data) {
    if(data==""){
        console.info("un loged");

        $("#header-message, #header-shop, #header-out").hide();
    }else{
        console.info("loged");
        $("#header-login, #header-register").hide();
        $("#username").html(data.user_name);
    }
});*/
