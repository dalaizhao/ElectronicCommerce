package com.dlut.ecwebsite.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dlut.ecwebsite.entity.User;
import com.dlut.ecwebsite.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;

	//用户登录模块
	@RequestMapping(value = "login.do", method = RequestMethod.POST)
	public ModelAndView userLogin(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HttpSession httpSession = request.getSession();

		// 从session中取出servlet生成的验证码text值
		String kaptchaExpected = (String) httpSession
				.getAttribute(com.google.code.kaptcha.Constants.KAPTCHA_SESSION_KEY);

		String name = request.getParameter("username");
		String pwd = request.getParameter("password");
		String verity = request.getParameter("kaptchaImage");
		// System.out.println(verity);
		// System.out.println(kaptchaExpected);
		ModelAndView modelAndView = null;
		if (verity == null || !verity.equalsIgnoreCase(kaptchaExpected)) {
			modelAndView = new ModelAndView("login");
			modelAndView.addObject("errorVerity", "errorVerity");
			return modelAndView;
		} else {
			User user = userService.findUserByName(name);
			if(user==null){
				modelAndView = new ModelAndView("login");
				modelAndView.addObject("errorName", "errorName");
			}else{
				//System.out.println(user.getUser_pwd());
				if(user.getPwd().equals(pwd)){
					modelAndView = new ModelAndView("home");
					httpSession.setAttribute("logined", true);
					httpSession.setAttribute("userID", user.getId());
					httpSession.setAttribute("username", user.getName());
				}else{
					modelAndView = new ModelAndView("login");
					modelAndView.addObject("errorPwd", "errorPwd");
				}
			}
		}
		return modelAndView;
	}
	//用户注册模块
	@RequestMapping(value = "register.do", method = RequestMethod.POST)
	public ModelAndView userRegister(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HttpSession httpSession = request.getSession();

		// 从session中取出servlet生成的验证码text值
		String kaptchaExpected = (String) httpSession
				.getAttribute(com.google.code.kaptcha.Constants.KAPTCHA_SESSION_KEY);

		String name = request.getParameter("username");
		String pwd = request.getParameter("password");
		String verity = request.getParameter("kaptchaImage");
		ModelAndView modelAndView = null;
		
		if (verity == null || !verity.equalsIgnoreCase(kaptchaExpected)) {
			modelAndView = new ModelAndView("register");
			modelAndView.addObject("errorVerity", "errorVerity");
			return modelAndView;
		} else {
			User tmpUser=userService.findUserByName(name);
			if(tmpUser==null){
				User user=new User();
				user.setName(name);
				user.setPwd(pwd);
				userService.saveUserByNameAndPwd(user);
				modelAndView = new ModelAndView("userInfo");
				httpSession.setAttribute("logined", true);
				httpSession.setAttribute("userID", user.getId());
				httpSession.setAttribute("username", user.getName());
			}else{
				modelAndView = new ModelAndView("register");
				modelAndView.addObject("nameExist", true);
			}
		}
		return modelAndView;
	}

	//用户退出登录
	@RequestMapping(value = "layout.do", method = RequestMethod.GET)
	public String layout(HttpServletRequest request, HttpServletResponse response) throws Exception {
		request.getSession().invalidate();

		return "home";
	}

}
