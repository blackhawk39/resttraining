/**
 * 
 */
package com.sapient.resttraining.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sapient.resttraining.entity.Member;
import com.sapient.resttraining.repository.MemberRepository;

/**
 * @author admi
 *
 */
@Service
public class MemberService {
	private MemberRepository memberrepository;

	public List<Member> findAllMembers() {
		// TODO Auto-generated method stub
		
		return null;
	}

	public Member saveNewMember(Member newMember) {
		// TODO Auto-generated method stub
		
		return newMember;
	}
	public Member getById(Integer Id)
	{
		
	}
	
	
}
