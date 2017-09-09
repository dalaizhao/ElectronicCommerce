package com.dlut.ecwebsite.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.dlut.ecwebsite.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {

	// 保存实体

	// 获取用户的所有收货地址
	@Query(value = "select address.* from address where user_id=?1", nativeQuery = true)
	public Set<Address> getAddressListByUserId(int user_id);

	// 修改地址
	@Query(value = "update address set addr_detail=?2 and addr_zipcode=?3 and reg_id=?4 where addr_id=?1 ", nativeQuery = true)
	@Modifying
	public int updateAddress(int addr_id, String addr_detail, String addr_zipcode, int reg_id);

	// 设置为默认地址
	@Query(value = "update address set is_default=1 where  addr_id=?1", nativeQuery = true)
	@Modifying
	public int setAddressDefault(int addr_id);

	// 删除收获地址
	@Query(value = "delete FROM address where addr_id=?1", nativeQuery = true)
	@Modifying
	public int deleteAddressByaddr_id(int addr_id);

}
