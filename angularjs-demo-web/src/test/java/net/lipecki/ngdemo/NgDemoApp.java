package net.lipecki.ngdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan
public class NgDemoApp {

    public static void main(final String[] args) throws Exception {
        SpringApplication.run(NgDemoApp.class, args);
    }

}
