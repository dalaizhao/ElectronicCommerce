package com.dlut.ecwebsite.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dlut.ecwebsite.entity.Goods;

public interface GoodsRepository extends JpaRepository<Goods, Integer> {

	// 用类别的id来返回所属类别下的商品
	@Query(value = "select g from Goods g join g.categories cate join g.images img WHERE cate.id=?1")
	public Set<Goods> findGoodsByCateID(int id);

	// 全部商品查询
	@Query(value = "select goods.* from goods order by goods_id desc limit ?1,?2", nativeQuery = true)
	public Set<Goods> findGoodsAll(int start, int end);

	// 商品分页返回，并且价格降序或者最新商品排序顺序
	@Query(value = "select goods.* from goods,goods_category " + "where goods.goods_id=goods_category.goods_id "
			+ "and (cate_id = ?3 or cate_id in (select cate_id from category where cate_super = ?3)) order by goods_id desc limit ?1,?2", nativeQuery = true)
	public Set<Goods> findGoodsBypageOrderbyID(int start, int end, int cate_id);

	// error
	// 商品分页返回，并且销售数量降序排序顺序
	@Query(value = "select goods.* from goods) orderby limit ?1,?2", nativeQuery = true)
	public Set<Goods> findGoodsBypageOrderBySale(int start, int end, int cate_id);

	// error
	// 商品分页返回，并且评价降序排序顺序
	@Query(value = "select goods.* from goods) orderby limit ?1,?2", nativeQuery = true)
	public Set<Goods> findGoodsBypageOrderByComment(int start, int end, int cate_id);

	// 商品分页返回，并且价格升序排序顺序
	@Query(value = "select goods.* from goods,goods_category " + "where goods.goods_id=goods_category.goods_id "
			+ "and (cate_id = ?3 or cate_id in (select cate_id from category where cate_super = ?3)) order by goods_price limit ?1,?2", nativeQuery = true)
	public Set<Goods> findGoodsBypageOrderByPrice(int start, int end, int cate_id);

	// 获取商品详情
	public Goods findGoodsById(int id);

	// 查询cate_id by goods_id
	@Query(value = "select category.cate_id  from  category,goods_category  where goods_id =?1"
			+ " and goods_category.cate_id=category.cate_id", nativeQuery = true)
	public int findCate_idByGoods_id(int id);
	

}
