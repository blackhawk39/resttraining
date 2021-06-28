/**
 * 
 */
package com.sapient.resttraining.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapient.resttraining.entity.Member;
import com.sapient.resttraining.repository.MemberRepository;

/**
 * @author admi
 *
 */
@Service
public class MemberService {
	@Autowired
	private MemberRepository memberrepository;

	public List<Member> findAllMembers() {
		// TODO Auto-generated method stub
		return  memberrepository.findAll();
		
	}

	public List<Member> saveNewMember(List<Member> membersList) {
		// TODO Auto-generated method stub
		String familyId= UUID.randomUUID().toString();;
		for(int i=0;i<membersList.size();i++)
		{
			if (i==0)
			{
				membersList.get(i).setIsHead(true);
				membersList.get(i).setRelationBetween("self");
			}else
			{
				membersList.get(i).setIsHead(false);
				
			}
			membersList.get(i).setFamilyId(familyId);
		}
		
		memberrepository.saveAll(membersList);
		return membersList;
	}

	public Optional <List <Member>> getMembersByFamilyId(String familyId) {
		// TODO Auto-generated method stub
		Optional<List<Member>> member =memberrepository.findByFamilyId(familyId);
		return member;
	}
	
	
}
