# Fleet
Challenge ABM de Autos


Para correr el back entrar a la carpeta ABM Fleet y correr:

dotnet run .\Program.cs

Luego para correr el front entrar a la carpeta frontend y correr:

npm start

Para la base de datos, se utilizó SQL Server 2019 en el ambiente local.

Para crear la tabla dentro de la base de datos: 

create table dbo.Vehicles(
Id int identity(1,1),
TypeName varchar(250),
Brand varchar(250),
Model varchar(250),
Patent varchar(20),
ChassisNumber varchar(250)
)

