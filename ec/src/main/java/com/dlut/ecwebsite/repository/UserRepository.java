package com.dlut.ecwebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.dlut.ecwebsite.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	// @Query(value = "select * from user where user_name= ? and user_pwd=?",
	// nativeQuery = true)
	// @Query("select u from User u where u.user_name=?1 and u.user_pwd=?2")
	// public User findByNameAndPwd(String user_name, String user_pwd);

	// 用户名查找用户实体
	public User findByName(String user_name);

	// 插入用户
	// 调用父类的函数实现

	// 用户id查询用户
	public User findById(int id);

	// 更新用户操作
	@Query(value = "update user set user_name=?2,user_pwd=?3, user_email=?4,user_tel=?5,"
			+ "user_realname=?6,user_idnum=?7,safe_question=?8,safe_answer=?9 "
			+ "where user_id=?1", nativeQuery = true)
	@Modifying
	public int updateUserInfo(int id, String name, String pwd, String email, String tel, String realName, String idnum,
			String question, String answer);

	// 更新用户操作,但是不修改密码
	@Query(value = "update user set user_name=?2, user_email=?3,user_tel=?4,"
			+ "user_realname=?5,user_idnum=?6,safe_question=?7,safe_answer=?8 "
			+ "where user_id=?1", nativeQuery = true)
	@Modifying
	public int updateUserInfoNoPwd(int id, String name, String email, String tel, String realName, String idnum,
			String question, String answer);

}
