package com.dlut.ecwebsite.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "user_id", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name = "user_name", nullable = false)
	private String name;
	@Column(name = "user_pwd", nullable = false)
	private String pwd;
	@Column(name = "user_tel")
	private String tel;
	@Column(name = "user_email")
	private String email;
	@Column(name = "user_realname")
	private String realName;
	@Column(name = "user_createtime")
	private String createtime;
	@Column(name = "user_idnum")
	private String idnum;
	@Column(name = "safe_question")
	private String question;
	@Column(name = "safe_answer")
	private String answer;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Cart> carts = new HashSet<Cart>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Address> address = new HashSet<Address>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Orders> orders = new HashSet<Orders>();

	public Set<Orders> getOrders() {
		return orders;
	}

	public void setOrders(Set<Orders> orders) {
		this.orders = orders;
	}

	public User() {

	}

	public User(int id, String name, String pwd, String tel, String email, String realName, String createtime,
			String idnum, String question, String answer, Set<Cart> carts) {
		super();
		this.id = id;
		this.name = name;
		this.pwd = pwd;
		this.tel = tel;
		this.email = email;
		this.realName = realName;
		this.createtime = createtime;
		this.idnum = idnum;
		this.question = question;
		this.answer = answer;
		this.carts = carts;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public String getIdnum() {
		return idnum;
	}

	public void setIdnum(String idnum) {
		this.idnum = idnum;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Set<Cart> getCarts() {
		return carts;
	}

	public void setCarts(Set<Cart> carts) {
		this.carts = carts;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
