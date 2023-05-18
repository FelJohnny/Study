Create Table depto(
Cod integer,
Nome varchar(100) not null unique,
Constraint pk_depto primary key (cod)
);

----------------------------------------

create table func(
    matricula serial,
    nome varchar(150) not null,
    dtadm date not null,
    salario numeric(10,2) check(salario > 1500),
    cod_depto integer not null,
    Constraint  pk_func primary key (matricula),
    Constraint fk_funk foreign key (cod_depto)  references Depto(cod)
);

select * from func