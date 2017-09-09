package com.dlut.ecwebsite.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.dlut.ecwebsite.entity.Cart;

@Service
public interface UserInfoService {

	// 获取购物车信息
	public List<Map<String, Object>> getCartInfo(int user_id);

	// 购物车里添加商品
	public int addCart(int user_id, int goods_id, int amount);

	// 修改购物车单项的数量
	public int updateCart(int cart_id, int amount);

	// 删除购物车单项
	public int deleteCart(int cart_id, int user_id);

	// 获取地区信息
	public Map<String, List<Map<String, String>>> getRegionInfo(int reg_id);

	// 添加一个收货地址
	public int addAddress(int user_id,String addr_detail, String addr_zipcode, int reg_id);

	// 修改收货地址
	public int modifyAddress(int addr_id, String addr_detail, String addr_zipcode, int reg_id);
	
	//删除收货地址
	public int deleteAddress(int addr_id);
	
	//设置为默认收获地址
	public Boolean setDefaultAddress(int addr_id);
	
	//获取所有收货地址
	public List<Map<String, Object>> getAddressList(int user_id);
}
