/**
 * 
 */
package com.sapient.resttraining.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sapient.resttraining.entity.Member;
import com.sapient.resttraining.service.MemberService;

/**
 * @author admi
 *
 */
@RestController
public class MemberController {
	
	private MemberService memberservice;
	 @GetMapping("/members")
	  List<Member> all() {
	    return memberservice.findAllMembers();
	  }
	  // end::get-aggregate-root[]

	  @PostMapping("/members")
	  Member newMember(@RequestBody Member newEmployee) {
	    return memberservice.saveNewMember(newEmployee);
	  }
	  
	  @GetMapping("/greeting")
	  public String greetings() {
		  return "Hello How are you?";
	  }

	  


}
