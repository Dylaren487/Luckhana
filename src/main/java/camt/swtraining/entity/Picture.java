package camt.swtraining.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Created by Admin on 4/19/2017.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Picture {
    long id;
    String image;
    String name;
    String decription;

    public Picture() {

    }

    public Picture(long id, String image, String name, String decription) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.decription = decription;
    }

    public long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getName() {
        return name;
    }

    public String getDecription() {
        return decription;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDecription(String decription) {
        this.decription = decription;
    }
}
