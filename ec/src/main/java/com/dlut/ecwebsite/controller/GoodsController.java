package com.dlut.ecwebsite.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dlut.ecwebsite.entity.JsonGoods;
import com.dlut.ecwebsite.service.GoodsService;

@Controller
public class GoodsController {

	@Autowired
	private GoodsService goodsService;

	// 返回分页信息，用于首页和商品分类页
	@RequestMapping(value = "data/getGoods.do", method = RequestMethod.GET)
	@ResponseBody
	public JsonGoods[] getGoodsPage(@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "cate_id", defaultValue = "0") int id,
			@RequestParam(value = "orderby", defaultValue = "new") String orderBy,
			@RequestParam(value = "page_size", defaultValue = "20") int size) {

		int start = page * size;
		int end = start + size;

		if (id == 0)
			return goodsService.getGoodsAll(start, end, orderBy);

		if (orderBy.equals("sale")) {

			return goodsService.getGoodsPageByOrderBySale(start, end, id);

		} else if (orderBy.equals("comment")) {

			return goodsService.getGoodsPageByOrderByComment(start, end, id);

		} else if (orderBy.equals("new")) {

			System.out.println(orderBy + start + end);

			return goodsService.getGoodsPageByOrderbyID(start, end, id);

		} else if (orderBy.equals("priceup") || (orderBy.equals("pricedown"))) {

			return goodsService.getGoodsPageByOrderByPrice(start, end, id, orderBy);

		} else {

			return null;

		}
	}

	// 返回分类的信息
	@RequestMapping(value = "data/getCate.do", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, List<Map<String, String>>> getCateInfo(
			@RequestParam(value = "cate_id", defaultValue = "0") int cate_id) {

		return goodsService.findPathByCate(cate_id);
	}

	// 商品详情页信息
	@RequestMapping(value = "data/getGoodsDetail.do", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> getGoodsInfo(@RequestParam(value = "goods_id", defaultValue = "1") int id) {

		
		return goodsService.getGoodsDetail(id);
	}

}
