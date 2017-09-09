package com.dlut.ecwebsite.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.dlut.ecwebsite.entity.JsonGoods;

@Service
public interface GoodsService {

	// 全部商品展示
	public JsonGoods[] getGoodsAll(int start,int end,String ordersBy);

	// 商品分页返回，并且价格降序或者最新商品排序顺序
	public JsonGoods[] getGoodsPageByOrderbyID(int start, int end, int cate_id);

	// 商品分页返回，并且销售数量降序排序顺序
	public JsonGoods[] getGoodsPageByOrderBySale(int start, int end, int cate_id);

	// 商品分页返回，并且评价降序排序顺序
	public JsonGoods[] getGoodsPageByOrderByComment(int start, int end, int cate_id);

	// 商品分页返回，并且价格升序排序顺序
	public JsonGoods[] getGoodsPageByOrderByPrice(int start, int end, int cate_id, String ordersBy);

	// 返回cate_id的path上所有分类
	public Map<String, List<Map<String, String>>> findPathByCate(int id);
	
	//商品详情页
	public Map<String, Object> getGoodsDetail(int id);

}
