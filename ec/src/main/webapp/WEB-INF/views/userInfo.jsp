
<%
	if (session.getAttribute("logined") == null) {
		response.sendRedirect("/ecwebsite");
	}
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<title>个人中心</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.min.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/main.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/user_info_main.css">

</head>

<body>
	<div class="header">
		<div class="header-container">
			<ul class="user-container">
				<li><a class="header-item" href="toUserInfo.do"
					id="header-username">
						<p class="header-link" id="username">未登录</p>
				</a> <a class="header-item" href="message" id="header-message">
						<p class="header-link">消息</p>
				</a></li>
			</ul>
			<ul class="option-container">
				<li><a class="header-item" href="layout.do" id="header-out">
						<p class="header-link">退出</p>
				</a> <a class="header-item" href="shop" id="header-shop">
						<p class="header-link">购物车</p>
				</a> <a class="header-item" href="toRegister.do" id="header-register">
						<p class="header-link">注册</p>
				</a> <a class="header-item" href="toLogin.do" id="header-login">
						<p class="header-link">登陆</p>
				</a></li>
			</ul>
		</div>
	</div>

	<div class="navigationBar">
		<ul class="nav-container nav-user">
			<li class="nav-item"><a class="nav-link" href="toHome.do">首页</a>
			</li>
			<li class="nav-connector">-></li>
			<li class="nav-item"><a class="nav-link" href="">个人中心</a></li>
			<li class="nav-connector">-></li>
			<li class="nav-item"></li>
			<li class="nav-terminator"></li>
		</ul>
	</div>

	<div class="per">

		<div class="perList">
			<ul class="perList_container">
				<li class="list-head"></li>
				<li id="list-1" class="list-item"><p class="item-text">基本信息</p></li>
				<li id="list-4" class="list-item"><p class="item-text">地址管理</p></li>
				<li id="list-2" class="list-item"><p class="item-text">购&ensp;物&ensp;车</p></li>
				<li id="list-3" class="list-item"><p class="item-text">订单管理</p></li>
				<li id="list-5" class="list-item"><p class="item-text">个人设置</p></li>
			</ul>
		</div>

		<div id="list-detail-1" class="perDetail panel panel-default hidden">
			<div class="detail-container panel-body">
				<ul>
					<li class="input-item">
						<div class="input-key">用户名:</div> <input id="input-username"
						class="input-value" readonly="readonly" name="username"
						type="text" placeholder="username">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item hidden" id="input-item-pwd">
						<div class="input-key">密码:</div> <input id="input-pwd"
						class="input-value" readonly="readonly" name="password"
						type="password" placeholder="password">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item hidden" id="input-item-pwd2">
						<div class="input-key">确认密码:</div> <input id="input-pwd2"
						class="input-value" readonly="readonly" type="password"
						placeholder="confirm password">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item">
						<div class="input-key">邮箱:</div> <input id="input-email"
						class="input-value" readonly="readonly" name="email" type="email"
						placeholder="email">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item">
						<div class="input-key">电话:</div> <input id="input-tel"
						class="input-value" readonly="readonly" name="tel" type="tel"
						placeholder="tel">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item">
						<div class="input-key">姓名:</div> <input id="input-realname"
						class="input-value" readonly="readonly" name="realname"
						type="text" placeholder="real name">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item">
						<div class="input-key">身份证号:</div> <input id="input-idnum"
						class="input-value" readonly="readonly" name="idnum" type="text"
						placeholder="id card">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item">
						<div class="input-key">密保问题:</div> <input id="input-question"
						class="input-value" readonly="readonly" name="safe_question"
						type="text" placeholder="safe question">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item">
						<div class="input-key">密保答案:</div> <input id="input-answer"
						class="input-value" readonly="readonly" name="safe_answer"
						type="text" placeholder="safe answer">
						<div class="input-check hidden"></div>
					</li>
					<li class="input-item" id="userinfo-modify">
						<button class="input-btn" id="modify-btn">修改</button>
						<button class="input-btn hidden" id="save-btn">保存</button>
						<div class="error-info hidden">加载失败</div>
						<div class="success-info hidden">修改成功</div>
					</li>
				</ul>
			</div>
		</div>
		<div id="list-detail-2" class="perDetail panel panel-default hidden">
			<div class="detail-container panel-body">
				<div class="shop-header">
					<div class="shop-header-item shop-col-1">
						<input class="all-select" type="checkbox" checked="checked">
					</div>
					<div class="shop-header-item shop-col-2">全选</div>
					<div class="shop-header-item shop-col-3">商品</div>
					<div class="shop-header-item shop-col-4">单价</div>
					<div class="shop-header-item shop-col-5">数量</div>
					<div class="shop-header-item shop-col-6">小计</div>
					<div class="shop-header-item shop-col-7">操作</div>
				</div>
				<div class="action-info">
					<p class="error-info hidden">加载失败</p>
					<p class="success-info hidden">加载成功</p>
				</div>
				<div class="shop-item-container">
					<div class="shop-item shop-selected hidden" id="shop-item0">
						<input class="shop-id-hidden" type="hidden" value="1"> <input
							class="goods-id-hidden" type="hidden" value="1"> <input
							class="amount-hidden" type="hidden" value="1">
						<div class="shop-item-col shop-col-1">
							<input class="item-select" type="checkbox" checked="checked"
								title="select item">
						</div>
						<div class="shop-item-col shop-col-2">
							<div class="img-container">
								<a href="goods?goods_id=1"> <img class="shop-item-image"
									src="" />
								</a>
							</div>
						</div>
						<div class="shop-item-col shop-col-3">
							<a href="goods?goods_id=1"><p class="shop-goodsname">商品</p></a>
						</div>
						<div class="shop-item-col shop-col-4">¥00.00</div>
						<div class="shop-item-col shop-col-5">
							<input class="amount-input" value="1" type="number" min="1"
								title="input goods amount">
							<p class="error-info hidden">修改失败</p>
							<p class="success-info hidden">修改成功</p>
						</div>
						<div class="shop-item-col shop-col-6">¥50.00</div>
						<div class="shop-item-col shop-col-7">
							<a class="shop-delete">删除</a>
						</div>
					</div>
				</div>
				<div class="shop-footer">
					<div class="shop-footer-item shop-col-1">
						<input class="all-select" type="checkbox" checked="checked">
					</div>
					<div class="shop-footer-item shop-col-2">全选</div>
					<div class="shop-footer-item shop-col-3">
						<a class="delete-select">删除选中的商品</a>
					</div>
					<div class="shop-footer-item shop-col-4">
						<p class="error-info hidden">下单失败</p>
					</div>
					<div class="shop-footer-item shop-col-5">
						<p class="footer-item-text">
							已选中<span class="main-strong select-count">2</span>件商品
						</p>
					</div>
					<div class="shop-footer-item shop-col-6">
						<p class="footer-item-text">
							总价: <span class="main-strong total-price">¥2</span>
						</p>
					</div>
					<div class="shop-footer-item shop-col-7">
						<button class="order-button btn-disabled">下单</button>
					</div>
				</div>
			</div>
		</div>
		 <div id="list-detail-3" class="perDetail panel panel-default hidden">
        <div class="detail-container panel-body">
            <div class="btn-group" role="group">
                <button class="order-filter btn btn-primary" id="order-filter1">待付款</button>
                <button class="order-filter btn btn-default" id="order-filter2">待收货</button>
                <button class="order-filter btn btn-default" id="order-filter3">已完成</button>
                <button class="order-filter btn btn-default" id="order-filter4">已丢弃</button>
            </div>

            <div class="order-item-container">
                <div class="order-item hidden">
                    <div class="action-info">
                        <p class="error-info hidden">加载失败</p>
                        <p class="success-info hidden">加载成功</p>
                    </div>
                    <div class="order-item-header">
                        <div class="order-time-label header-label">下单时间: </div>
                        <div class="order-time">2017-06-26 23:12:41</div>
                        <div class="order-id header-label">订单号: </div>
                        <div class="order-idnum">59020576964</div>
                        <div class="order-send header-label">配送方式: </div>
                        <div class="order-send-method">自营</div>
                        <div class="order-address-label header-label">配送地址: </div>
                        <select class="order-address" title="order address" disabled="disabled">
                            <option value="1">辽宁省大连市金州区开发区8号路大连理工大学软件学院</option>
                        </select>

                        <a class="order-modify">修改</a>
                        <a class="order-save hidden">保存</a>
                        <a class="order-receive hidden">确认收货</a>
                        <a class="order-cancel">丢弃</a>
                    </div>
                    <div class="order-goods-container">
                        <div class="order-goods">
                            <div class="order-goods-image">
                                <a href="toGoodsDetail.do?goods_id=1"><img src="images/goods6-1.jpg"></a>
                            </div>
                            <div class="order-goods-name">
                                <a href="toGoodsDetail.do?goods_id=1"><p>商品胜多负少发射点发负少发射点发射点发射点似的动阀</p></a>
                            </div>
                            <div class="order-goods-price">¥100.00</div>
                            <div class="order-goods-amount">x1</div>
                        </div>
                        <div class="order-goods">
                            <div class="order-goods-image">
                                <a href="toGoodsDetail.do?goods_id=1"><img src="images/goods6-1.jpg"></a>
                            </div>
                            <div class="order-goods-name">
                                <a href="toGoodsDetail.do?goods_id=1"><p>商品胜多负少发射点发负少发射点发射点发射点似的动阀</p></a>
                            </div>
                            <div class="order-goods-amount">x1</div>
                        </div>
                    </div>
                    <div class="order-item-footer">
                        <button class="order-pay-btn">支付</button>
                        <div class="order-pay-label header-label">支付方式: </div>
                        <select class="order-pay-method" title="pay method" disabled="disabled">
                            <option value="银行卡">银行卡</option>
                            <option value="支付宝">支付宝</option>
                            <option value="微信支付">微信支付</option>
                            <option value="到货支付">到货支付</option>
                        </select>
                        <div class="order-total-label header-label">总金额:  <span class="order-total-price">¥200.00</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
		<div id="list-detail-4" class="perDetail panel panel-default hidden">
			<div class="detail-container panel-body">
				<div class="addr-header">
					<div class="addr-header-item addr-col-1">地区</div>
					<div class="addr-header-item addr-col-2">邮编</div>
					<div class="addr-header-item addr-col-3">详细地址</div>
					<div class="addr-header-item addr-col-4">操作</div>
				</div>

				<div class="action-info">
					<p class="error-info hidden">加载失败</p>
					<p class="success-info hidden">加载成功</p>
				</div>

				<div class="addr-item-container">
					<div class="addr-item addr-default hidden" id="addr-item0">
						<input class="addr-id-hidden" type="hidden" value="0"> <input
							class="reg-id-hidden" type="hidden" value="0">
						<div class="addr-item-col addr-col-1">
							<ul class="addr-path-container">
								<li class="addr-path-item"><select id="addr-path1"
									class="path-item-input" title="province" disabled="disabled">
										<option value="0">请选择</option>
								</select></li>
								<li class="addr-path-item"><select id="addr-path2"
									class="path-item-input" title="city" disabled="disabled">
										<option value="0">请选择</option>
								</select></li>
								<li class="addr-path-item"><select id="addr-path3"
									class="path-item-input" title="district" disabled="disabled">
										<option value="0">请选择</option>
								</select></li>
							</ul>
						</div>
						<div class="addr-item-col addr-col-2">
							<input class="zipcode-input" type="text" title="zipcode"
								disabled="disabled">
						</div>
						<div class="addr-item-col addr-col-3">
							<textarea class="address-input" disabled="disabled"></textarea>
						</div>
						<div class="addr-item-col addr-col-4">
							<div class="addr-action">
								<div>
									<a class="modify-link">修改</a>
								</div>
								<div class="hidden">
									<a class="save-link">保存</a>
								</div>
								<div>
									<a class="default-link">设为默认</a>
								</div>
								<div>
									<a class="delete-link">删除</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="address-footer">
					<input class="addr-add-btn" type="button">
				</div>
			</div>
		</div>
		<div id="list-detail-5" class="perDetail panel panel-default hidden">
			<div class="detail-container panel-body">
				<ul class="info_item">
					<li>1 set</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="about"></div>

	<script
		src="${pageContext.request.contextPath}/resources/js/jquery-3.2.1.min.js"></script>
	<script src="https://code.jquery.com/color/jquery.color-2.1.2.min.js"
		integrity="sha256-H28SdxWrZ387Ldn0qogCzFiUDDxfPiNIyJX7BECQkDE="
		crossorigin="anonymous"></script>
	<script src="${pageContext.request.contextPath}/resources/js/main.js"></script>
	<script
		src="${pageContext.request.contextPath}/resources/js/personal.js"></script>
	<script
		src="${pageContext.request.contextPath}/resources/js/userinfo.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/cart.js"></script>
	<script
		src="${pageContext.request.contextPath}/resources/js/address.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/order.js"></script>

	<script>
	var userId ="<%=session.getAttribute("userID")%>";
	var username="<%=session.getAttribute("username")%>";
		console.log(userId);
		if (userId == "null") {
			$("#header-message, #header-shop, #header-out").hide();
		} else {
			console.info("loged");
			$("#header-login, #header-register").hide();
			$("#username").html(username);
		}
	</script>
</body>
</html>