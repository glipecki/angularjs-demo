package net.lipecki.ngdemo.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;

/**
 * @author gregorry
 */
@RequestMapping("/api/v1/hello")
@ResponseBody
public class DemoRestService implements DemoService {

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "plain/text")
    @Override
    public String hello(@RequestBody final String name) {
        LOGGER.debug("Request for hello :)");
        return String.format("Hello %s!", Optional.ofNullable(name).orElse("unknown"));
    }

    private static final Logger LOGGER = LoggerFactory.getLogger(DemoRestService.class);

}
