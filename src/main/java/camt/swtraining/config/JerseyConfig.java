package camt.swtraining.config;

import camt.swtraining.controller.RestController;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Admin on 4/17/2017.
 */
@Configuration
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig(){
        register(RestController.class);
        register(MultiPartFeature.class);
    }

}
