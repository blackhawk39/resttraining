/**
 * 
 */
package com.sapient.resttraining.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sapient.resttraining.entity.Member;

/**
 * @author admi
 *
 */
public interface MemberRepository extends JpaRepository<Member, Integer> {
//	@Query("select u from Member u where u.memberName = ?1")
//	User findByEmailAddress(String memberName);
}
