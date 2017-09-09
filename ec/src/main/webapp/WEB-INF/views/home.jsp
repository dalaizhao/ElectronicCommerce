<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%response.setHeader("Pragma","No-cache"); 
response.setHeader("Cache-Control","no-cache"); 
response.setDateHeader("Expires", 0); 
response.flushBuffer();%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<!--如果系统安装ie8或以上版本，则使用最高版本ie渲染；-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--响应式布局，第三个用于相应移动设备-->
<!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<title>****-全国最好的校内商品交易平台</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/main.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/home.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/index.main.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/index.class.css">
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
		<ul class="nav-container nav-home">
			<li class="nav-item"><a class="nav-link" href="toHome.do">首页</a></li>
			<li class="nav-connector">-></li>
			<li class="nav-terminator"></li>
		</ul>
	</div>

	<div id="of_show">

		<div class="cate-container">
			<div class="row">
				<div class="col-xs-2">
					<div class="of_whole">
						<!--主体内容区开始-->
						<div id="of_mainBody" class="push_t">
							<div class="side_small tag_line float_l">
								<div class="mainProNav">
									<div id="all-class-bottom"></div>
									<dl class="navM1">
										<dd>
											<h6>
												<a href="toCategory.do?cate_id=290">家电</a>
											</h6>
											<p>
												<a href="toCategory.do?cate_id=291">生活电器</a> <a
													href="toCategory.do?cate_id=297">吸尘器</a> <a
													href="toCategory.do?cate_id=290" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">数码</a>
											</h6>
											<p>
												<a href="">笔记本</a> <a href="">相机</a> <a href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">手机</a>
											</h6>
											<p>
												<a href="">华为</a> <a href="">小米</a> <a href="" class="more">查看更多...</a>
											</p>
										</dd>
										<dt id="first-dt">家电数码</dt>
									</dl>
									<dl class="navM1">
										<dd>
											<h6>
												<a href="">手机</a>&nbsp;&nbsp;<a href="">电脑</a>&nbsp;&nbsp;<a
													href="">摄影摄像</a>
											</h6>
											<br />
											<h6>
												<a href="">影音娱乐</a>
											</h6>
											<p>
												<a href="">音响/音箱</a><a href="">耳机/耳麦</a><a href="">MP3/MP4</a><a
													href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">设备</a>
											</h6>
											<p>
												<a href="">手柄</a> <a href="">充电器</a> <a href="">移动硬盘</a> <a
													href="">台灯</a> <a href="">支架</a> <a href="" class="more">查看更多...</a>
											</p>
										</dd>
										<dt>电子数码</dt>
									</dl>
									<dl class="navM1">
										<dd>
											<h6>
												<a href="">小厨</a>
											</h6>
											<p>
												<a href="">电水壶/热水壶</a> <a href="">电磁炉</a> <a href="">面包机</a>
												<a href="">榨汁机</a> <a href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">生活</a>
											</h6>
											<p>
												<a href="">电风扇</a> <a href="">取暖电器</a> <a href="">插排/插座</a>
												<a href="">饮水机</a> <a href="">洗衣机</a> <a href="">衣架/鞋架</a> <a
													href="">空调</a> <a href="" class="more">查看更多...</a>
											</p>
										</dd>
										<dt>宿舍神器</dt>
									</dl>
									<dl class="navM1">
										<dd>
											<h6>
												<a href="">面部护肤</a>
											</h6>
											<p>
												<a href="">面部护肤</a> <a href="">卸妆</a> <a href="">洁面</a> <a
													href="">爽肤水</a> <a href="">防晒</a> <a href="">面膜</a> <a
													href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">洗发护发</a>
											</h6>
											<p>
												<a href="">洗发</a> <a href="">护发</a> <a href="">染发</a> <a
													href="">造型</a> <a href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">香水彩妆</a>
											</h6>
											<p>
												<a href="">女士香水</a> <a href="">男士香水</a> <a href="">美甲</a> <a
													href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">清洁用品</a>
											</h6>
											<p>
												<a href="">衣物清洁</a> <a href="">干燥剂</a> <a href="">驱虫用品</a> <a
													href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">宠物用品</a>
											</h6>
											<p>
												<a href="">水族用品</a> <a href="">宠物主粮</a> <a href="">宠物牵引</a>
												<a href="">宠物玩具</a> <a href="" class="more">查看更多...</a>
											</p>
										</dd>
										<dt>美妆护肤</dt>
									</dl>
									<dl class="navM1">
										<dd>
											<h6>
												<a href="">新鲜水果</a>
											</h6>
											<p>
												<a href="">新鲜水果店</a> <a href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">特色小吃</a>
											</h6>
											<p>
												<a href="">周围特色小吃</a> <a href="" class="more">查看更多...</a>
											</p>
										</dd>
										<dt>吃货一族</dt>
									</dl>
									<dl class="navM1">
										<dd>
											<h6>
												<a href="">运动</a>
											</h6>
											<p>
												<a href="">骑行</a> <a href="">鞋</a> <a href="">包</a> <a
													href="">滑板</a> <a href="">轮滑</a> <a href="">球类</a> <a
													href="" class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">健身训练</a>
											</h6>
											<p>
												<a href="">哑铃</a> <a href="">臂力器</a> <a href="">仰卧板/腹肌板</a>
												<a href="">瑜伽舞蹈</a> <a href="">健身护具</a> <a href=""
													class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">游泳用品</a>
											</h6>
											<p>
												<a href="">泳镜</a> <a href="">男士泳衣</a> <a href="">女士泳衣</a> <a
													href="">泳帽</a> <a href="">游泳包/防水包</a> <a href=""
													class="more">查看更多...</a>
											</p>
											<h6>
												<a href="">乐器</a>
											</h6>
											<p>
												<a href="">吉他/贝斯</a> <a href="" class="more">查看更多...</a>
											</p>
										</dd>
										<dt>体育娱乐</dt>
									</dl>
								</div>
								<!-- mainProNav end -->
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-6 ">
					<div id="myCarousel" class="carousel slide">
						<!-- 轮播（Carousel）指标 -->
						<ol class="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
							<li data-target="#myCarousel" data-slide-to="1"></li>
							<li data-target="#myCarousel" data-slide-to="2"></li>
						</ol>
						<!-- 轮播（Carousel）项目 -->
						<div class="carousel-inner">
							<div class="item active">
								<img src="/ecwebsite/resources/web_img/home1.jpg"
									class="carouse-image" alt="First slide">
							</div>
							<div class="item">
								<img src="/ecwebsite/resources/web_img/home2.jpg"
									class="carouse-image" alt="Second slide">
							</div>
							<div class="item">
								<img src="/ecwebsite/resources/web_img/home3.jpg"
									class="carouse-image" alt="Third slide">
							</div>
						</div>
						<!-- 轮播（Carousel）导航-->
						<a class="carousel-control left" href="#myCarousel"
							data-slide="prev">&lsaquo;</a> <a class="carousel-control right"
							href="#myCarousel" data-slide="next">&rsaquo;</a>
					</div>
				</div>
				<div class="col-xs-4">
					<div class="area">
						<div class="area-search">
							<div class="form-s">
								<form id="Form" role="form" action="doLogin.php" method="post">
									<div class="form-group clearfloat">
										<input type="text" class="form-control" id="search"
											name="search" placeholder="自行车">
										<button type="submit" class="btn btn-default">搜索</button>
									</div>
								</form>
							</div>
						</div>
						<div class="getArea">
							<label class="getA">站内温馨提示</label><br> <label
								id="getAContext"></label>
						</div>
						<div id="lr-hidden">
							<label id="select-label"></label>
						</div>
						<div class="reqArea">
 								<label>
 									广大的用户朋友，本站提供免费的注册，并可以购买到您心意的物品。
 									站内有新到的家电，并厂家特价甩卖，请在家电分类查看详情，祝您购物愉快。
 								</label>
							<!-- <div id="reqP" class="reqAreaItem ">
								<label class="control-label">省:</label> <select id="province"
									data-width="80%" data-size="5" class="selectpicker"
									data-live-search="true">
									<option>北京</option>
								</select>
							</div>
							<div id="reqC" class="reqAreaItem">
								<label class="control-label">市:</label> <select id="city"
									data-width="80%" data-size="5" class="selectpicker "
									data-live-search="true">
									<option>北京</option>
								</select>
							</div>
							<div id="reqU" class="reqAreaItem">
								<label class=" control-label"> 区:</label> <select
									id="university" data-width="80%" data-size="5"
									class="selectpicker " data-live-search="true">
									<option>清华大学</option>
								</select>
							</div> -->
						</div>
						<!--                    <label id="school-info">如果定位失败，请手动选择相应学校^_^</label>-->
					</div>
				</div>
			</div>
		</div>

		<div class="new-product">
			<div class="product-title">
				<hr>
				<a class="pro-title" href="toCategory.do?cate_id=1">女装</a> <a
					href="toCategory.do?cate_id=1" class="more">更多&gt;&gt;</a>
			</div>
			<div class="goods-container">
				<div class="row">
					<div class="col-xs-3">
						<div class="pro-intro">
							<img class="cate-poster" href="#"
								src="/ecwebsite/resources/web_img/poster1.jpg">
						</div>
					</div>
					<div class="col-xs-9">
						<div class="row" id="goods_list_11">
							<!--<div class="col-xs-4">-->
							<!--<div class="pro">-->
							<!--<a href="goods-detail.html&goods=1"><img class="pic" src="images/goods1-1.jpg"></a>-->
							<!--<p class="pro-name">小米5成都sdfsdfsdfsdf</p><br/>-->
							<!--<p class="pro-price">￥12.00</p><br/>-->
							<!--</div>-->
							<!--</div>-->
						</div>
						<div class="row-fluid" id="goods_list_12"></div>
					</div>
				</div>
			</div>

			<div class="product-title">
				<hr>
				<a class="pro-title" href="toCategory.do?cate_id=290">家电</a> <a
					href="toCategory.do?cate_id=290" class="more">更多&gt;&gt;</a>
			</div>
			<div class="goods-container">
				<div class="row">
					<div class="col-xs-3">
						<div class="pro-intro">
							<img class="cate-poster" href="#"
								src="/ecwebsite/resources/web_img/poster2.jpeg">
						</div>
					</div>
					<div class="col-xs-9">
						<div class="row" id="goods_list_21"></div>
						<div class="row-fluid" id="goods_list_22"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--<div class="promise">-->

	<!--</div>-->
	<hr>
	<div class="about">
		<div class="container">
			<div class="row">
				<div class="col-xs-4"></div>
				<div class="col-xs-4"></div>
				<div class="col-xs-4"></div>
			</div>
		</div>
	</div>

	<!--放在下面为了页面加载快一点-->
	<script
		src="${pageContext.request.contextPath}/resources/js/jquery-3.2.1.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script
		src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/main.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/home.js"></script>
	<script>
        $(".mainProNav dl dt").mouseover(function() {
            $(".mainProNav dl").removeClass("dlHover");
            $(this).parent().addClass("dlHover");
        });
        $(".mainProNav").hover(function() {
            $(this).addClass("mainProNavHover");
        }, function() {
            $(this).removeClass("mainProNavHover");
            $(".mainProNav dl").removeClass("dlHover");
        });
      
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
