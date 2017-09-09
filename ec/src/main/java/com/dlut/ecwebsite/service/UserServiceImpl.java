package com.dlut.ecwebsite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dlut.ecwebsite.entity.User;
import com.dlut.ecwebsite.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	// 插入新用户
	@Override
	public User saveUserByNameAndPwd(User user) {

		return userRepository.save(user);
	}

	// 用用户名查找用户
	@Override
	public User findUserByName(String name) {

		return userRepository.findByName(name);
	}

	// 更新用户信息
	@Override
	public int updateUserInfo(User user) {

		User u = userRepository.findByName(user.getName());
		if (u != null && user.getId() != u.getId()) {
			return -2;
		}
		int num=-1;
		if(user.getPwd()==null){
			// 修改成功返回受影响的行号
			num = userRepository.updateUserInfoNoPwd(user.getId(), user.getName(), user.getEmail(),
					user.getTel(), user.getRealName(), user.getIdnum(), user.getQuestion(), user.getAnswer());
		}else{
			// 修改成功返回受影响的行号
			num = userRepository.updateUserInfo(user.getId(), user.getName(), user.getPwd(), user.getEmail(),
					user.getTel(), user.getRealName(), user.getIdnum(), user.getQuestion(), user.getAnswer());
		}
		
		if (num <= 0) {
			return -1;
		}
		return num;
	}

}
