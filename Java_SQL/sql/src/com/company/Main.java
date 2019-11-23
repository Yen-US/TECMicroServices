package com.company;

import java.sql.*;
import java.util.ArrayList;

public class Main {


    //Rutas de los archivos necesarios para correr
    static String dburl = "jdbc:Mysql://localhost:3306/TECMicroServicesDB?useSSL=false"; //Nota en Local host debe colocar us IP para poder establecer la conexión
    static String username = "root";
    static String password = "Yenson210";
    public static void main(String[] args) {


        try {
            //Obtener una dirección
            Connection myConnection=DriverManager.getConnection(dburl, username, password);

            //Crear un Objeto
            Statement myStatement=myConnection.createStatement();

            //Ejecutando el Query 
            //AQUÍ SEA CREA LA DATABASE
            //TECMicroserviciosDB
            /*ResultSet myResultSet = myStatement.executeQuery("Select " + "from TECMicroServicesDB");

            //Proceso de corrido por la tabla creada
            while (myResultSet.next()) {
                System.out.println("mensaje " + myResultSet.getString("nombre") + " ");
            }*/
            
            //Se crean las dos tablas necesarios para los archivos comprimidos y descomprimidos
            CrearTabla("comp");
            
            CrearTabla("descomp");
            
            
            //Aquí se corren las otras dos funciones de insertar o consultar
            
            Insertar("comp", "imagenmuestra", "imagendescripcion");
            
            Obtener("comp");
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

    }

    //FUNCIÓN PARA CREAR LA TABLA
    public static void CrearTabla(String nombretabla) throws Exception{
        try {
            Connection con = DriverManager.getConnection(dburl);
            PreparedStatement create = con.prepareStatement("CREATE TABLE IF NOT EXISTS "+  nombretabla +"(nombre varchar(50), descripcion varchar(50), fecha datetime, actualizacion datetime, usuario varchar(50))");
            create.executeUpdate();
        }
        catch (Exception e){
            System.out.println(e);
        }
        finally {
            System.out.println("FINALIZADO");
        }
    }

    //FUNCIÓN PARA INSERTAR TABLA
    public static void Insertar (String Tabla,String nombre, String desc) throws  Exception{
        final String nombrea = "usuario";
        final String desca = "descripcion";
        final String fecha = "22-11-19";
        final String actualizado = "22-11-19";
        final String usua = "Yenus";
            
            
        try{
            Connection con = DriverManager.getConnection(dburl);
            PreparedStatement create = con.prepareStatement("Insert Into "+ Tabla +" (nombre,descripcion) VALUES ("+nombrea+", "+desca+")"); //Aquí se agregan los elmentos
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public static ArrayList<String> Obtener(String tabla) throws Exception{
        try{
            Connection con = DriverManager.getConnection(dburl);
            PreparedStatement statement = con.prepareStatement("SELECT nombre,descripcion FROM "+tabla);

            ResultSet result = statement.executeQuery();

            ArrayList<String> array = new ArrayList<>();
            while   (result.next()){
                System.out.println(result.getString("nombre"));
                System.out.println("");
                System.out.println(result.getString("descripcion"));
                System.out.println("");
                System.out.println(result.getString("fecha"));
                System.out.println("");
                System.out.println(result.getString("actualizacion"));
                System.out.println("");
                System.out.println(result.getString("usuario"));

                array.add(result.getString("descripcion"));
            }
            return array;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }
}


//TABLA DE MYSQL
//La tabla esta conformada por las siguientes columnas
/*

    mysql> desc TECMicroserviciosDB;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| nombre        | varchar(50) | YES  |     | NULL    |       |
| descripcion   | varchar(50) | YES  |     | NULL    |       |
| fecha         | datetime    | YES  |     | NULL    |       |
| actualizacion | datetime    | YES  |     | NULL    |       |
| usuario       | varchar(50) | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

* */
