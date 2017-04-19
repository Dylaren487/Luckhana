package camt.swtraining.service;

import camt.swtraining.entity.Picture;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Admin on 4/19/2017.
 */
@Service
@ConfigurationProperties(prefix = "server")
@Profile("local")
public class AppService {
    List<Picture> pictures;
    String baseUrl,imageUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @PostConstruct
    public void init() {
        pictures = new ArrayList<>();
        Picture picture = new Picture(1, baseUrl+imageUrl+"l1.jpg", "Lakhana stone", "I found this lakhana stone on sales on internet. The stone belongs to Wat pa nong lom.");
        pictures.add(picture);
    }

    public void addToList(Picture picture) {
        picture.setId(getNextId());
        pictures.add(picture);
    }

    public long getNextId(){
        if(pictures.size()==0){
            return 1;
        }
        return pictures.get(pictures.size()-1).getId()+1;
    }

    public Picture getPictureInfo(long id) {
        return pictures.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }

    public List<Picture> getPicturesList() {
        return pictures;
    }
}
