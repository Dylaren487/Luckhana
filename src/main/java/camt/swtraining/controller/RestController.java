package camt.swtraining.controller;

import camt.swtraining.entity.Picture;
import camt.swtraining.service.AppService;
import org.apache.commons.io.FilenameUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalTime;

/**
 * Created by Admin on 4/19/2017.
 */
@Component
@ConfigurationProperties(prefix = "server")
@Path("/luckhana")
public class RestController {
    AppService appService;
    String baseUrl,imageUrl,imageServerDir;

    @Autowired
    public void setAppService(AppService appService) {
        this.appService = appService;
    }

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setImageServerDir(String imageServerDir) {
        this.imageServerDir = imageServerDir;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPictureInfo(@PathParam("id")long id){
        if(appService.getPictureInfo(id)!=null){
            return Response.ok().entity(appService.getPictureInfo(id)).build();
        }
        return Response.status(404).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPicturesList(){
        return Response.ok(appService.getPicturesList()).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addToList(Picture picture){
        appService.addToList(picture);
        return Response.noContent().build();
    }

    @GET
    @Path("/images/{filename}")
    @Produces({"image/png", "image/jpg", "image/gif"})
    public Response getStudentImage(@PathParam("filename") String filename) {
        File file = Paths.get(imageServerDir + filename).toFile();
        if (file.exists()) {
            Response.ResponseBuilder responseBuilder = Response.ok((Object) file);
            responseBuilder.header("Content-Disposition", "attachment;filename=\"" + filename + "\"");
            return responseBuilder.build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @POST
    @Path("/image")
    @Consumes({MediaType.MULTIPART_FORM_DATA})
    @Produces({MediaType.TEXT_PLAIN})
    public Response uploadImage(@FormDataParam("file") InputStream fileInputStream, @FormDataParam("file") FormDataContentDisposition cdh) throws IOException {
        BufferedImage img = ImageIO.read(fileInputStream);
        String oldFilename = cdh.getFileName();
        String ext = FilenameUtils.getExtension(oldFilename);
        String newFilename = Integer.toString(LocalTime.now().hashCode(),16)+Integer.toString(oldFilename.hashCode(),16)+"."+ext;
        File targetFile = Files.createFile(Paths.get(imageServerDir+newFilename)).toFile();
        ImageIO.write(img,ext,targetFile);
        return Response.ok(newFilename).build();
    }
}
