package com.training.ribbonloadbalacer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
@RibbonClient(name = "member-service", configuration =MemberServiceConfiguration.class)
public class UserApplication {
	@Autowired
	RestTemplate restTemplate;
	
	@LoadBalanced
	@Bean
	RestTemplate restTemplate() {
		return new RestTemplate();
	}



	@RequestMapping("/mem")
	public String allMembers() {
		return restTemplate.getForObject("http:/member-service/members", String.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

}
