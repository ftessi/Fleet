create table dbo.Vehicles(
Id int identity(1,1),
TypeName varchar(250),
Brand varchar(250),
Model varchar(250),
Patent varchar(20),
ChassisNumber varchar(250)
)

select * from dbo.Vehicles

insert into dbo.Vehicles values
('Truck', 'Ford', 'F100', 'AA123CC', '12345asd6ab')

drop table dbo.Vehicles