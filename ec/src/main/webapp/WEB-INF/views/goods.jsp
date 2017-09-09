<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	response.setHeader("Pragma", "No-cache");
	response.setHeader("Cache-Control", "no-cache");
	response.setDateHeader("Expires", 0);
	response.flushBuffer();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta charset="UTF-8">
<title>goods detail</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/main.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/goods.css">
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
				</a> <a class="header-item" href="toUserInfo.do#2" id="header-shop">
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
		<ul class="nav-container">
			<li class="nav-item"><a class="nav-link" href="toHome.do">首页</a>
			</li>
			<li class="nav-connector">-></li>

			<li class="nav-item"><a class="nav-link" href="toCategory.do">全部商品</a>
			</li>
			<li class="nav-connector">-></li>
		</ul>
	</div>
	<div class="goods-container">
		<div class="image-container">
			<img class="img-thumbnail goods-image" src="/ecwebsite/resources/web_img/image-bg.png">
		</div>
		<div class="panel panel-default detail-container">
			<div class="panel-body">
			 <input class="goods-id-hidden" type="hidden" value="1">
				<div class="goods-title">
					<p class="goods-name">商品名。。。</p>
					<p class="goods-detail">详情。。。</p>
				</div>

				<div class="panel goods-sale">
					<div class="panel-body sale">
						<div class="price" id="original">
							<span class="property-type">价格</span>
							<div class="price-num original-price">
								<span>¥</span> <span id="original-price-num">00.00</span>
							</div>
						</div>
						<div class="price" id="special">
							<span class="property-type">特价</span>
							<div class="price-num special-price">
								<span>¥</span> <span id="sale-price">00.00</span>
							</div>
						</div>
						<div class="count" id="order-count">
							<span class="property-type">销量</span>
							<div class="count-num" id="order-count-num">00</div>
						</div>
						<div class="count" id="left-count">
							<span class="property-type">库存</span>
							<div class="count-num" id="left-count-num">00</div>
						</div>
						<div class="count" id="comment-count">
							<span class="property-type">评论</span>
							<div class="count-num" id="comment-count-num">00</div>
						</div>
					</div>
				</div>

				<form class="buy-shop-form" method="post">
					<input class="hidden-input" name="goods" value="1" title="goods-id">
					<div class="goods-amount">
						<label class="property-type">数量</label> <input
							class="amount-input" name="amount" value="1" type="number"
							title="amount"> <span class="goods-unit">件</span>
					</div>
					<button class="btn buy-btn" type="submit">立即购买</button>
					<button class="btn shop-btn" type="submit">加入购物车</button>
				</form>

			</div>
		</div>
	</div>

	<div class="about"></div>
	<script src="${pageContext.request.contextPath}/resources/js/jquery-3.2.1.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/main.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/goods.js"></script>
	
	<script type="text/javascript">
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