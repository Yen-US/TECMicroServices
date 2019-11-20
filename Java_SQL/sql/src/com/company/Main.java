package com.company;

import java.sql.*;
import java.util.ArrayList;

public class Main {


    //Rutas de los archivos necesarios para correr
    static String dburl = "jdbc:Mysql://localhost:3308"; //Nota en Local host debe colocar us IP para poder establecer la conexión
    static String username = "root";
    static String password = "password";
    public static void main(String[] args) {


        try {
            //Obtener una dirección
            Connection myConnection=DriverManager.getConnection(dburl, username, password);

            //Crear un Objeto
            Statement myStatement=myConnection.createStatement();

            //Ejecutando el Query
            ResultSet myResultSet = myStatement.executeQuery("Select " + "from TECMicroserviciosDB");


            //Proceso de corrido por la tabla creada
            while (myResultSet.next()) {
                System.out.println("mensaje " + myResultSet.getString("nombre") + " ");
            }
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

    }

    //FUNCIÓN PARA CREAR LA TABLA
    public static void CrearTabla() throws Exception{
        try {
            Connection con = DriverManager.getConnection(dburl);
            PreparedStatement create = con.prepareStatement("CREATE TABLE IF NOT EXISTS TECMicroserviciosDB(nombre varchar(50), descripcion varchar(50), fecha datetime, actualizacion datetime, usuario varchar(50))");
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
    public static void Insertar () throws  Exception{
        final String nombre = "usuario";
        final String desc = " descripcion";
        try{
            Connection con = DriverManager.getConnection(dburl);
            PreparedStatement create = con.prepareStatement("Insert Into TECMicroserviciosDB(nombre,descripcion )VALUES ('"+nombre+"', '"+desc+"')"); //Aquí se agregan los elmentos
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public static ArrayList<String> Obtener() throws Exception{
        try{
            Connection con = DriverManager.getConnection(dburl);
            PreparedStatement statement = con.prepareStatement("SELECT nombre,descripcion FROM TECMicroserviciosDB");

            ResultSet result = statement.executeQuery();

            ArrayList<String> array = new ArrayList<>();
            while   (result.next()){
                System.out.println(result.getString("nombre"));
                System.out.println("");
                System.out.println(result.getString("descripcion"));

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