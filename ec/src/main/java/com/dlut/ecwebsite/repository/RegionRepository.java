package com.dlut.ecwebsite.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dlut.ecwebsite.entity.Region;

public interface RegionRepository extends JpaRepository<Region, Integer> {

	// 查找所属reg_id的直接子孩子
	@Query(value = "SELECT  region.* from region where reg_super =?1", nativeQuery = true)
	public Set<Region> findRegionChildById(int reg_id);
	
	//查找包含id的所在路径
	@Query(value="select get_region(?1)",nativeQuery=true)
	public String findRegionPathById(int reg_id);

}
