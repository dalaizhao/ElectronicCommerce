package com.dlut.ecwebsite.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "admin_id", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name = "admin_name", nullable = false)
	private String name;
	@Column(name = "admin_pwd", nullable = false)
	private String pwd;
	@Column(name = "admin_email", nullable = false)
	private String email;
	@Column(name = "admin_tel", nullable = false)
	private String tel;
	@Column(name = "admin_root", nullable = false)
	private Boolean root;

	public Admin(int id, String name, String pwd, String email, String tel, Boolean root) {
		super();
		this.name = name;
		this.pwd = pwd;
		this.email = email;
		this.id = id;
		this.tel = tel;
		this.root = root;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public Boolean getRoot() {
		return root;
	}

	public void setRoot(Boolean root) {
		this.root = root;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", name=" + name + ", pwd=" + pwd + ", email=" + email + ", tel=" + tel + ", root="
				+ root + "]";
	}

}
