package com.dlut.ecwebsite.service;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dlut.ecwebsite.entity.Category;
import com.dlut.ecwebsite.entity.Goods;
import com.dlut.ecwebsite.entity.Images;
import com.dlut.ecwebsite.entity.JsonGoods;
import com.dlut.ecwebsite.repository.CategoryRepository;
import com.dlut.ecwebsite.repository.GoodsRepository;
import com.dlut.ecwebsite.repository.ImageRepository;

@Service
public class GoodsServiceImpl implements GoodsService {

	@Autowired
	private GoodsRepository goodsRepository;

	@Autowired
	private ImageRepository imageRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	// 全部商品查询
	@Override
	public JsonGoods[] getGoodsAll(int start, int end, String ordersBy) {

		Set<Goods> goods = goodsRepository.findGoodsAll(start, end);

		if (ordersBy.equals("new")) {
			return setToJsonGoods(goods);
		}
		JsonGoods[] tmp = setToJsonGoods(goods);

		return sortByPrice(tmp, ordersBy);
	}

	// 商品分页返回，并且价格降序或者最新商品排序顺序
	@Override
	public JsonGoods[] getGoodsPageByOrderbyID(int start, int end, int cate_id) {

		Set<Goods> goods = goodsRepository.findGoodsBypageOrderbyID(start, end, cate_id);

		for (Goods goods2 : goods) {
			System.out.println(goods2.getName());
		}

		return setToJsonGoods(goods);
	}

	// 商品分页返回，并且销售数量降序排序顺序
	@Override
	public JsonGoods[] getGoodsPageByOrderBySale(int start, int end, int cate_id) {

		Set<Goods> goods = goodsRepository.findGoodsBypageOrderBySale(start, end, cate_id);

		return setToJsonGoods(goods);
	}

	// 商品分页返回，并且评价降序排序顺序
	@Override
	public JsonGoods[] getGoodsPageByOrderByComment(int start, int end, int cate_id) {

		Set<Goods> goods = goodsRepository.findGoodsBypageOrderByComment(start, end, cate_id);

		return setToJsonGoods(goods);
	}

	// 商品分页返回，并且价格升序排序顺序
	@Override
	public JsonGoods[] getGoodsPageByOrderByPrice(int start, int end, int cate_id, String ordersBy) {

		Set<Goods> goods = goodsRepository.findGoodsBypageOrderbyID(start, end, cate_id);

		for (Goods goods2 : goods) {
			System.out.println(goods2.getName());
		}

		JsonGoods[] tmp = setToJsonGoods(goods);

		return sortByPrice(tmp, ordersBy);
	}

	// 返回cate_id的path上所有分类
	@Override
	public Map<String, List<Map<String, String>>> findPathByCate(int id) {

		Map<String, List<Map<String, String>>> map = new HashMap<String, List<Map<String, String>>>();

		String catePath = categoryRepository.findByCatePath(id);
		if (catePath != null) {
			String[] catePaths = catePath.split(" ");
			System.out.println(Arrays.toString(catePaths));

			List<Map<String, String>> list = new LinkedList<Map<String, String>>();

			for (int i = 0, len = catePaths.length; i < len; i++) {
				Map<String, String> each = new HashMap<String, String>();
				each.put("id", catePaths[i]);
				each.put("name", catePaths[++i]);
				list.add(each);
			}

			map.put("cate_path", list);
		} else {
			List<Map<String, String>> list = new LinkedList<Map<String, String>>();
			map.put("cate_path", list);
		}

		List<Map<String, String>> list2 = new LinkedList<Map<String, String>>();
		Set<Category> categories = categoryRepository.findByCateSuperId(id);

		for (Category category : categories) {
			Map<String, String> each = new HashMap<String, String>();
			each.put("id", String.valueOf(category.getId()));
			each.put("name", category.getName());
			list2.add(each);
		}

		map.put("cate_child", list2);

		return map;
	}

	// 从set集合转成jsonGoods对象数组
	public JsonGoods[] setToJsonGoods(Set<Goods> goods) {

		JsonGoods[] tmpGoods = new JsonGoods[goods.size()];
		int i = 0;
		for (Goods g : goods) {
			tmpGoods[i] = new JsonGoods();
			tmpGoods[i].setGoods_id(g.getId());
			tmpGoods[i].setGoods_name(g.getName());
			if (g.isOnSale()) {
				tmpGoods[i].setGoods_price(g.getSalePrice());
			} else {
				tmpGoods[i].setGoods_price(g.getPrice());
			}
			int goods_img_id = g.getId();
			Set<Images> imgaes = imageRepository.findImagesByGoodsID(goods_img_id);
			Images img = imgaes.iterator().next();
			tmpGoods[i].setGoods_image(img.getUrl());
			i++;
		}
		return tmpGoods;
	}

	// 价格上下排序
	public JsonGoods[] sortByPrice(JsonGoods[] tmp, String ordersBy) {
		if (ordersBy.equals("priceup")) {
			Arrays.sort(tmp, new Comparator<JsonGoods>() {

				@Override
				public int compare(JsonGoods o1, JsonGoods o2) {

					if (o1.getGoods_price() > o2.getGoods_price())
						return 1;
					else if (o1.getGoods_price() < o2.getGoods_price()) {
						return -1;
					}
					return 0;
				}
			});
		} else {
			Arrays.sort(tmp, new Comparator<JsonGoods>() {

				@Override
				public int compare(JsonGoods o1, JsonGoods o2) {

					if (o1.getGoods_price() > o2.getGoods_price())
						return -1;
					else if (o1.getGoods_price() < o2.getGoods_price()) {
						return 1;
					}
					return 0;
				}

			});
		}
		return tmp;
	}

	// 商品详情页
	@Override
	public Map<String, Object> getGoodsDetail(int id) {

		Goods goods = goodsRepository.findGoodsById(id);

		goods.setCategories(null);
		goods.setCarts(null);
		goods.setOrderItem(null);
		int goods_img_id = goods.getId();
		Set<Images> images = imageRepository.findImagesByGoodsID(goods_img_id);
		goods.setImages(images);

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("goods", goods);

		int cate_id = goodsRepository.findCate_idByGoods_id(id);

		String catePath = categoryRepository.findByCatePath(cate_id);
		if (catePath != null) {
			String[] catePaths = catePath.split(" ");
			System.out.println(Arrays.toString(catePaths));

			List<Map<String, String>> list = new LinkedList<Map<String, String>>();

			for (int i = 0, len = catePaths.length; i < len; i++) {
				Map<String, String> each = new HashMap<String, String>();
				each.put("id", catePaths[i]);
				each.put("name", catePaths[++i]);
				list.add(each);
			}

			map.put("cate_path", list);
		}

		map.put("sale", "0");
		map.put("comment", "0");

		return map;
	}

}
