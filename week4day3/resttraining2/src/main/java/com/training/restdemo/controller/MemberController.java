package com.training.restdemo.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.training.restdemo.ResttrainingApplication;
import com.training.restdemo.entity.Member;
import com.training.restdemo.exception.MemberNotFoundException;
import com.training.restdemo.service.MemberService;

@RestController
public class MemberController {
	private static final Logger logger = LogManager.getLogger(MemberController.class.getName());
	@Autowired
    DiscoveryClient client;
	@Autowired
	private MemberService memberservice;
	 @GetMapping("/members")
	  List<Member> all() {
//		 	logger.trace("Entering application.");
			logger.info("Working");
	    return memberservice.findAllMembers();
	  }
	  // end::get-aggregate-root[]

	  @PostMapping("/members")
	  public Member newMember(@RequestBody Member newEmployee) {
		  
	    return memberservice.saveNewMember(newEmployee);
	  }

	  @GetMapping("/members/{id}")
	  public Member getMembersById(@PathVariable Integer id) {
		  
		  Member member = memberservice.getMembersById(id).orElseThrow(() -> new MemberNotFoundException(id));
		return member;

		  
	  }
		  
	  @GetMapping("/greeting")
	  public String greetings() {
		  return "Hello How are you2?";
	  }

	  


}