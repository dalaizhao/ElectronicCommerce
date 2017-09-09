package com.dlut.ecwebsite;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("serverTime", formattedDate);

		return "home";
	}

	@RequestMapping(value = "toLogin.do")
	public String toLogin() {

		return "login";
	}

	@RequestMapping(value = "toHome.do")
	public String toHome() {

		return "home";
	}

	@RequestMapping(value = "toRegister.do")
	public String toRegister() {

		return "register";
	}

	@RequestMapping(value = "toUserInfo.do")
	public String toUserInfo() {

		return "userInfo";
	}

	@RequestMapping(value = "toCategory.do")
	public String toCategory() {

		return "category";
	}

	@RequestMapping(value = "toGoodsDetail.do")
	public String toGoodsDetail() {

		return "goods";
	}
}
