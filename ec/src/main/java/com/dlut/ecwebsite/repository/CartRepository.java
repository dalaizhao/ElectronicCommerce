package com.dlut.ecwebsite.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.dlut.ecwebsite.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {

	// 获取购物车所有单项的数据
	@Query(value = "select c from Cart c where c.user.id=?1")
	public Set<Cart> findCartById(int user_id);

	// 购物车里添加商品
	// 用父接口

	// 修改购物车单项的数量
	@Query(value = "UPDATE cart SET  cart_amount=?2 where cart_id =?1", nativeQuery = true)
	@Modifying
	public int updateCart(int cart_id, int amount);

	// 删除购物车单项
	@Query(value = "DELETE from cart where cart_id=?1", nativeQuery = true)
	@Modifying
	public int deleteCart(int cart_id);

	// 返回某用购物车数量
	@Query(value = "select count(cart_id) from cart where user_id=?1", nativeQuery = true)
	public int getCartCount(int user_id);

	// 判断购物车是否存在此商品
	@Query(value = "select cart.* from cart where user_id=?1 and goods_id=?2", nativeQuery = true)
	public Cart getCartItem(int user_id, int goods_id);

}
