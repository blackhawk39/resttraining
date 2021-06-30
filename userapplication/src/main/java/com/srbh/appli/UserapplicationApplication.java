package com.srbh.appli;

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

    @RequestMapping("/members")
    public String newMember() {
        return client.newMember();
    }
    
	public static void main(String[] args) {
		SpringApplication.run(UserapplicationApplication.class, args);
	}
    @FeignClient("householdservice")
    interface HelloClient {
        @RequestMapping(value = "/members", method = RequestMethod.GET)

		String newMember();
    }

}
