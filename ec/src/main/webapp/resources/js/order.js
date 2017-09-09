/**
 * Created by Administrator on 2017/7/16.
 */
function load_order() {
	var $container = $("#list-detail-3");
	load_order_filter("1");
	$container.find(".order-filter").on(
			"click",
			function() {
				$container.find(".order-filter").removeClass("btn-primary")
						.addClass("btn-default");
				$(this).addClass("btn-primary").removeClass("btn-default");
				load_order_filter($(this).attr("id").slice(-1));
			});
}

function load_order_filter(filter) {
	console.info("load filter " + filter);
	var $container = $("#list-detail-3").find(".order-item-container").eq(0);
	$.each($container.find(".order-item"), function(i, item) {
		if (i > 0)
			$(item).remove();
	});
	var $template = $container.find(".order-item").eq(0);
	var $goods_template = $container.find(".order-goods").eq(0);
	$.getJSON(order_data_url, function(result, status) {

		if (status === "success") {
			$.each(result, function(i, order) {
				console.info(order);
				var $order_item = $template.clone().removeClass("hidden");
				$order_item.find(".order-time").html(order.order_time);
				$order_item.find(".order-idnum").html(order.order_id);
				$order_item.find(".order-send-method").html(order.order_send);
				$order_item.find(".order-address").html(
						"<option value=\"{id}\">{address}</option>"
								.format(order.order_address));
				$order_item.find(".order-pay-method").val(order.order_pay);
				$order_item.find(".order-goods-container").empty();
				var $goods_container = $order_item
						.find(".order-goods-container");
				var total_price = 0;
				$.each(order.order_item, function(j, goods) {
					var $goods_item = $goods_template.clone();
					$goods_item.find(".order-goods-image a").attr("href",
							"toGoodsDetail.do?goods_id=" + goods.goods_id);
					$goods_item.find(".order-goods-image img").attr("src",
							"/ecwebsite/resources/" + goods.goods_image);
					

					$goods_item.find(".order-goods-name a").attr("href",
							"toGoodsDetail.do?goods_id=" + goods.goods_id);
					$goods_item.find(".order-goods-name a").html(
							"<p>" + goods.goods_name + "</p>");

					$goods_item.find(".order-goods-price").html(
							"¥" + goods.goods_price);
					$goods_item.find(".order-goods-amount").html(
							"x" + goods.item_amount);
					total_price += parseFloat(goods.goods_price)
							* parseInt(goods.item_amount);
					$goods_container.append($goods_item);
				});
				$order_item.find(".order-total-price").html(
						"¥" + total_price.toFixed(2));
				$container.append($order_item);
				var item_length = order.order_item.length;
				$order_item.find(".order-goods-container").height(
						91 * Math.ceil(item_length / 2));
				if (Math.floor(item_length % 2)) {
					var $goods_item = $goods_template.clone();
					$goods_item.empty();
					$goods_container.append($goods_item);
				}
			});
			order_onclick(filter);
		}
	})
}

function order_onclick(filter) {
	var $order_list = $(".order-item-container");
	console.info("filter=" + filter + ", type:" + typeof filter);
	switch (filter) {
	case "1":
		console.info("onclick " + filter);
		$order_list.find(".order-modify").removeClass("hidden").on(
				"click",
				function() {
					order_modify($(this).parentsUntil(".order-item-container")
							.eq(-1));
				});
		$order_list.find(".order-save").addClass("hidden").on(
				"click",
				function() {
					order_save($(this).parentsUntil(".order-item-container")
							.eq(-1));
				});
		$order_list.find(".order-cancel").removeClass("hidden").on(
				"click",
				function() {
					order_cancel($(this).parentsUntil(".order-item-container")
							.eq(-1));
				});
		$order_list.find(".order-receive").addClass("hidden");
		$order_list.find(".order-pay-btn").removeClass("btn-disabled")
				.removeAttr("disabled").on(
						"click",
						function() {
							order_pay($(this).parentsUntil(
									".order-item-container").eq(-1));
						});
		break;
	case "2":
		$order_list.find(".order-modify").addClass("hidden");
		$order_list.find(".order-save").addClass("hidden");
		$order_list.find(".order-cancel").addClass("hidden");
		$order_list.find(".order-receive").removeClass("hidden").on(
				"click",
				function() {
					order_receive($(this).parentsUntil(".order-item-container")
							.eq(-1));
				});
		$order_list.find(".order-pay-btn").addClass("btn-disabled").attr(
				"disabled", "disabled").html("已支付");
		break;
	default:
		$order_list.find(".order-modify").addClass("hidden");
		$order_list.find(".order-save").addClass("hidden");
		$order_list.find(".order-cancel").addClass("hidden");
		$order_list.find(".order-receive").addClass("hidden");
		$order_list.find(".order-pay-btn").addClass("btn-disabled").attr(
				"disabled", "disabled").html("已支付");
	}
}
function order_modify($order_item) {
	$order_item.find(".order-pay-method, .order-address")
			.removeAttr("disabled");
	$order_item.find(".order-modify").addClass("hidden");
	$order_item.find(".order-save").removeClass("hidden");
	$order_item.find(".order-cancel").addClass("hidden");
	$order_item.find(".order-pay-btn").addClass("btn-disabled").unbind();

}
function order_save($order_item) {
	$order_item.find(".order-pay-method, .order-address").attr("disabled",
			"disabled");
	$order_item.find(".order-modify").removeClass("hidden");
	$order_item.find(".order-save").addClass("hidden");
	$order_item.find(".order-cancel").removeClass("hidden");
	$order_item.find(".order-pay-btn").removeClass("btn-disabled").on("click",
			function() {
				order_pay($order_item);
			});
}
function order_receive() {

}
function order_pay() {
	$order_item.find(".order-modify").addClass("hidden");
	$order_item.find(".order-save").addClass("hidden");
	$order_item.find(".order-cancel").addClass("hidden");
	$order_item.find(".order-pay-btn").addClass("btn-disabled").attr(
			"disabled", "disabled").html("处理中");

	$order_item.find(".order-pay-btn").html("已支付");
}
function order_cancel($order_item) {
	$order_item.remove();
}