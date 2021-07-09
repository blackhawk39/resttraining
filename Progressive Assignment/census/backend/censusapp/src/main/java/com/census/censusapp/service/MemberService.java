/**
 * 
 */
package com.census.censusapp.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.census.censusapp.entity.Member;
import com.census.censusapp.exception.MemberNotFoundException;
import com.census.censusapp.repository.MemberRepository;

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

	public String saveNewMember(List<Member> membersList) {
		// TODO Auto-generated method stub
		String familyId= UUID.randomUUID().toString();
		
		for(int i=0;i<membersList.size();i++)
		{
			membersList.get(i).setFamilyId(familyId);
		}

		memberrepository.saveAll(membersList);
		
		return familyId;
		

	}

	public Optional <List <Member>> getMembersByFamilyId(String familyId) {
		// TODO Auto-generated method stub
		Optional<List<Member>> member =memberrepository.findByFamilyId(familyId);
		return member;
	}
	public List<Member> updateMembersByFamilyId(List<Member> membersList,String id) {
		// TODO Auto-generated method stub
		List<Member> orgMember =memberrepository.findByFamilyId(id).orElseThrow( ()-> new MemberNotFoundException(id));
		
		for(int i=0;i<membersList.size();i++)
		{
            //orgMember.get(i).setFamilyId(id);
            //orgMember.get(i).setId(membersList.get(i).getId());
			orgMember.get(i).setFirstName(membersList.get(i).getFirstName());
			orgMember.get(i).setLastName(membersList.get(i).getLastName());
			orgMember.get(i).setMiddleName(membersList.get(i).getMiddleName());
			orgMember.get(i).setSuffix(membersList.get(i).getSuffix());
			orgMember.get(i).setDob(membersList.get(i).getDob());
			orgMember.get(i).setGender(membersList.get(i).getGender());
			orgMember.get(i).setRelationBetween(membersList.get(i).getRelationBetween());

		}
		return memberrepository.saveAll(orgMember);
		
	}

	public  List<Member> updateMembersByRelation(List<String> relationList, String id) {
		List<Member> orgMember =memberrepository.findByFamilyId(id).orElseThrow( ()-> new MemberNotFoundException(id));
		orgMember.get(0).setRelationBetween("self");
		for(int i=0;i<relationList.size();i++)
		{
 
				orgMember.get(i+1).setRelationBetween(relationList.get(i));

		}
		return memberrepository.saveAll(orgMember);
		// TODO Auto-generated method stub
		
	}
	
	public void deleteMemberOfFamily(String familyId,String firstName) {
        memberrepository.deleteByFamilyIdAndFirstName(familyId,firstName);
	}

	
}
