package com.dlut.ecwebsite.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "goods")
public class Goods implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "goods_id", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name = "goods_name", nullable = false)
	private String name;
	@Column(name = "goods_price", nullable = false)
	private float price;
	@Column(name = "goods_left", nullable = false)
	private int left;
	@Column(name = "goods_unit", nullable = false)
	private String unit;
	@Column(name = "goods_detail")
	private String detail;
	@Column(name = "goods_onsale")
	private boolean onSale;
	@Column(name = "goods_saleprice", nullable = true)
	private Integer salePrice;

	@ManyToMany
	@JoinTable(name = "goods_category", joinColumns = @JoinColumn(name = "goods_id"), inverseJoinColumns = @JoinColumn(name = "cate_id"))
	private Set<Category> categories = new HashSet<Category>();

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "goods_id")
	private Set<Images> images = new HashSet<Images>();
	
	@OneToMany(mappedBy="goods",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	private Set<Cart> carts = new HashSet<Cart>();
	
	@OneToMany(mappedBy="goods",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	private Set<OrderItem> orderItem = new HashSet<OrderItem>();

	public Set<OrderItem> getOrderItem() {
		return orderItem;
	}

	public void setOrderItem(Set<OrderItem> orderItem) {
		this.orderItem = orderItem;
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

	public Goods() {
	}

	public Set<Category> getCategories() {
		return categories;
	}

	public void setCategories(Set<Category> categories) {
		this.categories = categories;
	}

	public Set<Images> getImages() {
		return images;
	}

	public void setImages(Set<Images> images) {
		this.images = images;
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

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getLeft() {
		return left;
	}

	public void setLeft(int left) {
		this.left = left;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public boolean isOnSale() {
		return onSale;
	}

	public void setOnSale(boolean onSale) {
		this.onSale = onSale;
	}

	public Integer getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(Integer salePrice) {
		this.salePrice = salePrice;
	}

	@Override
	public String toString() {
		return "Goods [id=" + id + ", name=" + name + ", price=" + price + ", left=" + left + ", unit=" + unit
				+ ", detail=" + detail + ", onSale=" + onSale + ", salePrice=" + salePrice + ", categories="
				+ categories + ", images=" + images + "]";
	}

}
