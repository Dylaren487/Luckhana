package camt.swtraining.service;

import camt.swtraining.entity.Picture;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Admin on 4/19/2017.
 */
@Service
public class AppService {
    List<Picture> pictures;

    @PostConstruct
    public void init() {
        pictures = new ArrayList<>();
        Picture picture = new Picture(1, "l1.jpg", "Lakhana stone", "I found this lakhana stone on sales on internet. The stone belongs to Wat pa nong lom.");
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
