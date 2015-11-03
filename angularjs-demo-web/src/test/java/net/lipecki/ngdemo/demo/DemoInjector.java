package net.lipecki.ngdemo.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DemoInjector {

    @Bean
    public DemoService demoService() {
        return new DemoRestService();
    }

}
