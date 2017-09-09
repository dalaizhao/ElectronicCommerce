<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	response.setHeader("Pragma", "No-cache");
	response.setHeader("Cache-Control", "no-cache");
	response.setDateHeader("Expires", 0);
	response.flushBuffer();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<!--如果系统安装ie8或以上版本，则使用最高版本ie渲染；-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--响应式布局，第三个用于相应移动设备-->
<!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<title>商品分类</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.css">
<link href="${pageContext.request.contextPath}/resources/css/main.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/resources/css/category.css"
	rel="stylesheet">
<!--[if lt IE 9]>
    <script src="${pageContext.request.contextPath}/resources/js/html5shiv.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/respond.min.js"></script>
    <![endif]-->
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
		<ul class="nav-container nav-category">
			<li class="nav-item"><a class="nav-link" href="toHome.do">首页</a></li>
			<li class="nav-connector">-></li>
			<li class="nav-item"><a class="nav-link" href="toCategory.do">商品分类</a></li>
			<li class="nav-connector">-></li>
			<li class="nav-item"></li>
			<li class="nav-terminator"></li>
		</ul>
	</div>

	<div id="of_show">
		<div id="of_main">
			<div class="panel panel-default cate-container">
				<div class="panel-body">
					<div class="cate-nav">
						<ul class="cate-nav-container">
							<li class="cate-nav-item"><a class="cate-nav-link"
								href="toCategory.do">全部商品<span class="cate-nav-connector">></span></a>
							</li>
							<!--<li class="cate-nav-item">-->
							<!--<a class="cate-nav-link" href="category.html?cate=1">女装<span class="cate-nav-connector">></span></a>-->
							<!--</li>-->
						</ul>
					</div>
					<div class="cate-wrap">
						<div class="cate-key">类别</div>
						<div class="cate-value">
							<ul class="value-container">
								<!--<li class="value-item" >-->
								<!--<a class="cate-link" href="category.html?cate=2">夏新品</a>-->
								<!--</li>-->
								<!--<li class="value-item" >-->
								<!--<a class="cate-link" href="category.html?cate=2">连衣裙</a>-->
								<!--</li>-->
								<!--<li class="value-item" >-->
								<!--<a class="cate-link" href="category.html?cate=2">短裤</a>-->
								<!--</li>-->
								<!--<li class="value-item" >-->
								<!--<a class="cate-link" href="category.html?cate=2">T恤</a>-->
								<!--</li>-->
							</ul>
						</div>
					</div>
					<div class="btn-group btn-group-sm order-container" role="group"
						aria-label="...">
						<button class="order-active btn btn-default" id="order-new">新品↓</button>
						<button class="order-method btn btn-default" id="order-sale">销量↓</button>
						<button class="order-method btn btn-default" id="order-comment">评论↓</button>
						<button class="order-method btn btn-default" id="order-pricedown">价格↓</button>
						<button class="order-method btn btn-default" id="order-priceup">价格↑</button>
					</div>
				</div>
			</div>
			<div id="of_main_body">
				<!-- <div class="main_box">
					<div class="box_item">
						<a href="goods-detail.html?goods=1"> <img
							src="images/goods1-1.jpg">
						</a>
						<p class="pPrice">¥10.00</p>
						<a class="pName" href="goods-detail.html?goods=1"><p>你好hello，小米5，IM主体，致力于互联网士大夫士大夫</p></a>
					</div>
				</div> -->
			</div>
		</div>
	</div>

	<div class="about"></div>

	<!--放在下面为了页面加载快一点-->
	<script
		src="${pageContext.request.contextPath}/resources/js/jquery-3.2.1.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script
		src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/main.js"></script>
	<script
		src="${pageContext.request.contextPath}/resources/js/category.js"></script>
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