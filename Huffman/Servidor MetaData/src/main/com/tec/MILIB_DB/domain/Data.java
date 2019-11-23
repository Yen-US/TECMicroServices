package main.com.tec.MILIB_DB.domain;

import java.io.File;
import java.util.Base64;
import java.nio.file.Files;

public class Data {

        /*String a = encodeFileToBase64(new File("/home/joshua/Documentos/movie.jpg"));
        System.out.println(a);*/

    private static String encodeFileToBase64(File file) {
        try {
            byte[] fileContent = Files.readAllBytes(file.toPath());
            return Base64.getEncoder().encodeToString(fileContent);
        } catch (Exception e) {
            throw new IllegalStateException("could not read file " + file, e);
        }
    }
}

