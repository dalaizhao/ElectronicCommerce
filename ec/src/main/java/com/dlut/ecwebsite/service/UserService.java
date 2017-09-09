package com.dlut.ecwebsite.service;

import org.springframework.stereotype.Service;

import com.dlut.ecwebsite.entity.User;

@Service
public interface UserService {

	// 插入用户
	public User saveUserByNameAndPwd(User user);

	// 用用户名查找用户
	public User findUserByName(String name);
	
	//更新用户信息
	public int updateUserInfo(User user);
}
