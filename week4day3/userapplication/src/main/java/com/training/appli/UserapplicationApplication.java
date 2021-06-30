package com.training.appli;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
@RestController
@EnableFeignClients
public class UserapplicationApplication {

	@Autowired
    HelloClient client;
//	@Autowired
//	HelloClient2 client2;

    @RequestMapping("/greeting")
    public String greetings() {
        return client.greetings();
    }
    @RequestMapping("/members")
    public String nemMeber() {
        return client.newMember();
    }
    
	public static void main(String[] args) {
		SpringApplication.run(UserapplicationApplication.class, args);
	}
    @FeignClient("householdservice")
    interface HelloClient {
    	
        @RequestMapping(value = "/greeting", method = RequestMethod.GET)
        String greetings();

		
        @RequestMapping(value = "/members", method = RequestMethod.GET)
        String newMember();
		

    }
//    @FeignClient("householdservice")
//    interface HelloClient2{
//        @RequestMapping(value = "/members", method = RequestMethod.GET)
//        String newMembers();
//
//		
//    }

}
