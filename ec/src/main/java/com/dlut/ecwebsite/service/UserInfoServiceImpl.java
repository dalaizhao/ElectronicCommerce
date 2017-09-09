package com.dlut.ecwebsite.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.support.ResourceRegion;
import org.springframework.stereotype.Service;

import com.dlut.ecwebsite.entity.Address;
import com.dlut.ecwebsite.entity.Cart;
import com.dlut.ecwebsite.entity.Category;
import com.dlut.ecwebsite.entity.Goods;
import com.dlut.ecwebsite.entity.Images;
import com.dlut.ecwebsite.entity.Region;
import com.dlut.ecwebsite.entity.User;
import com.dlut.ecwebsite.repository.AddressRepository;
import com.dlut.ecwebsite.repository.CartRepository;
import com.dlut.ecwebsite.repository.GoodsRepository;
import com.dlut.ecwebsite.repository.ImageRepository;
import com.dlut.ecwebsite.repository.RegionRepository;
import com.sun.tools.classfile.Annotation.element_value;

@Service
public class UserInfoServiceImpl implements UserInfoService {

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private GoodsRepository goodsRepository;

	@Autowired
	private ImageRepository imageRepository;

	@Autowired
	private RegionRepository regionRepository;

	@Autowired
	AddressRepository addressRepository;

	// 获取购物车信息
	@Override
	public List<Map<String, Object>> getCartInfo(int user_id) {

		List<Map<String, Object>> list = new LinkedList<Map<String, Object>>();

		Set<Cart> carts = cartRepository.findCartById(user_id);

		if (carts.size() != 0) {
			System.out.println("66666");
			for (Cart cart : carts) {
				Map<String, Object> each = new HashMap<String, Object>();
				Goods goods = goodsRepository.findGoodsById(cart.getGoods().getId());
				Set<Images> images = imageRepository.findImagesByGoodsID(goods.getId());

				each.put("cart_id", cart.getId());
				each.put("goods_id", goods.getId());
				each.put("goods_name", goods.getName());
				each.put("amount", cart.getAmount());
				if (goods.isOnSale()) {
					each.put("goods_price", goods.getSalePrice());
				} else {
					each.put("goods_price", goods.getPrice());
				}
				each.put("goods_image", images);
				list.add(each);
			}
		}

		return list;
	}

	//// 购物车里添加商品
	@Override
	public int addCart(int user_id, int goods_id, int amount) {

		Cart c = cartRepository.getCartItem(user_id, goods_id);
		if (c == null) {
			System.out.println("00000");
			Cart cart = new Cart();
			Goods goods = new Goods();
			User user = new User();
			goods.setId(goods_id);
			user.setId(user_id);
			cart.setGoods(goods);
			cart.setUser(user);
			cart.setAmount(amount);

			Cart cart2 = cartRepository.save(cart);
			if (cart2 == null) {
				return -1;
			}
		} else {
			int n = cartRepository.updateCart(c.getId(), amount + c.getAmount());
			System.out.println(n);
		}
		int cartCount = cartRepository.getCartCount(user_id);
		// 还要判定是否查询成功
		return cartCount;

	}

	// 修改购物车单项的数量
	@Override
	public int updateCart(int cart_id, int amount) {

		return cartRepository.updateCart(cart_id, amount);
	}

	// 删除购物车单项
	@Override
	public int deleteCart(int cart_id, int user_id) {

		cartRepository.deleteCart(cart_id);

		return cartRepository.getCartCount(user_id);
	}

	// 获取地区信息
	@Override
	public Map<String, List<Map<String, String>>> getRegionInfo(int reg_id) {

		Map<String, List<Map<String, String>>> map = new HashMap<String, List<Map<String, String>>>();

		if (reg_id != 0) {
			String path = regionRepository.findRegionPathById(reg_id);
			if (path != null) {
				String[] paths = path.split(" ");
				System.out.println(Arrays.toString(paths));

				List<Map<String, String>> list = new LinkedList<Map<String, String>>();

				for (int i = 0, len = paths.length; i < len; i++) {
					Map<String, String> each = new HashMap<String, String>();
					each.put("id", paths[i]);
					each.put("name", paths[++i]);
					list.add(each);
				}

				map.put("reg_path", list);
			} else {
				List<Map<String, String>> list = new LinkedList<Map<String, String>>();
				map.put("reg_path", list);
			}
		} else {
			List<Map<String, String>> list = new LinkedList<Map<String, String>>();
			map.put("reg_path", list);
		}

		List<Map<String, String>> list2 = new LinkedList<Map<String, String>>();
		Set<Region> regions = regionRepository.findRegionChildById(reg_id);

		for (Region region : regions) {
			Map<String, String> each = new HashMap<String, String>();
			each.put("id", String.valueOf(region.getId()));
			each.put("name", region.getName());
			list2.add(each);
		}

		map.put("reg_child", list2);

		return map;
	}

	// 添加一个收货地址
	@Override
	public int addAddress(int user_id, String addr_detail, String addr_zipcode, int reg_id) {

		Address address = new Address();
		User user = new User();
		Region region = new Region();
		user.setId(user_id);
		region.setId(reg_id);
		address.setUser(user);
		address.setRegion(region);
		address.setDetail(addr_detail);
		address.setZipCode(addr_zipcode);

		Address addr = addressRepository.save(address);
		if (addr == null) {
			return -1;
		}

		return addr.getId();
	}

	// 修改收货地址
	@Override
	public int modifyAddress(int addr_id, String addr_detail, String addr_zipcode, int reg_id) {
		int num = addressRepository.updateAddress(addr_id, addr_detail, addr_zipcode, reg_id);
		if (num <= 0)
			return -1;
		return num;
	}

	// 删除收货地址
	@Override
	public int deleteAddress(int addr_id) {
		int num = addressRepository.deleteAddressByaddr_id(addr_id);
		if (num <= 0)
			return -1;
		return num;
	}

	// 设置为默认收获地址
	@Override
	public Boolean setDefaultAddress(int addr_id) {
		int num = addressRepository.setAddressDefault(addr_id);
		if (num <= 0)
			return false;
		return true;
	}

	// 获取所有收货地址
	public List<Map<String, Object>> getAddressList(int user_id) {

		List<Map<String, Object>> list = new LinkedList<Map<String, Object>>();
		Set<Address> addresses = addressRepository.getAddressListByUserId(user_id);
		if (addresses != null) {

			for (Address address : addresses) {

				Map<String, Object> map = new HashMap<String, Object>();

				Map<String, String> each = new HashMap<String, String>();
				each.put("addr_id", String.valueOf(address.getId()));
				each.put("addr_detail", address.getDetail());
				each.put("addr_zipcode", address.getZipCode());
				each.put("is_default", String.valueOf(address.isDefailt()));

				map.put("address", each);

				int reg_id = address.getRegion().getId();

				if (reg_id != 0) {
					String path = regionRepository.findRegionPathById(reg_id);
					if (path != null) {
						String[] paths = path.split(" ");
						System.out.println(Arrays.toString(paths));

						List<Map<String, String>> list2 = new LinkedList<Map<String, String>>();

						for (int i = 0, len = paths.length; i < len; i++) {
							Map<String, String> each2 = new HashMap<String, String>();
							each2.put("id", paths[i]);
							each2.put("name", paths[++i]);
							list2.add(each2);
						}

						map.put("reg_path", list2);
					} else {
						List<Map<String, String>> list2 = new LinkedList<Map<String, String>>();
						map.put("reg_path", list2);
					}
				} else {
					List<Map<String, String>> list2 = new LinkedList<Map<String, String>>();
					map.put("reg_path", list2);
				}
				list.add(map);
			}

		}

		return list;
	}

}
