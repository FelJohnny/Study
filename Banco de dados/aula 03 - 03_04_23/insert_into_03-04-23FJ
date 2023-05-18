CREATE TABLE cliente(
    numero integer, 
    nome varchar(100) NOT NULL,
    endereco varchar(200) NOT NULL,
    CONSTRAINT pk_cli PRIMARY KEY (numero)
);
select * from cliente

INSERT INTO cliente values (001,'Felipe Johnny','rua qualquer' );

INSERT INTO cliente values (005,'Silva','karakura');

insert into cliente (numero, nome, endereco) values (003, 'adriana merces','rua qualquer');



----------------------------------

create table carro (
 registro integer,
 marca varchar(50) not null,
 modelo varchar(50) not null,
 cor varchar(50) not null,
 constraint pk_carro primary key (registro)
);

select * from carro
insert into carro values (1, 'volks', 'conversivel', 'red');
insert into carro values (2, 'volks', '4x4', 'blue');
insert into carro values (3, 'chevrolet', '4x4', 'cyan');
insert into carro values (4, 'chevrolet', 'tres_rodas', 'blue');
insert into carro values (5, 'BMW', 'conversivel', 'prata');

------------------------------------

create table apolice (
 numero integer,
 valor numeric(10,2) not null check (valor > 0),
 dt_inicio date not null,
 dt_fim date not null,
 num_cliente integer not null,
 reg_carro integer not null,
 constraint pk_apolice primary key (numero),
 constraint fk_apolice_cli foreign key (num_cliente)
 references cliente(numero),
 constraint fk_apolice_car foreign key (reg_carro)
 references carro(registro)
); 

select * from apolice

insert into apolice values (1, 200, '2023-01-01', '2023-04-03', 1, 5);
insert into apolice values (2, 400, '2023-01-01', '2023-07-03', 2, 3);
insert into apolice values (3, 600, '2021-01-01', '2025-04-10', 3, 2);
insert into apolice values (4, 200, '2023-01-01', '2023-04-03', 1, 2);
insert into apolice values (5, 200, '2023-01-01', '2023-04-03', 4, 3);

---------------------------------------------------------------------------------------

create table acidente (
 codigo integer,
 data date not null check (data >= now()),
 hora time not null,
 local varchar(200) not null,
 constraint pk_acidente primary key (codigo)
);

select * from  acidente

insert into acidente values (123,'2023-04-05', '09:00', 'esquina da morte');
insert into acidente values (124,'2023-04-05', '10:00', 'rua da morte');
insert into acidente values (125,'2023-04-10', '09:00', 'esquina da morte');
insert into acidente values (126,'2023-04-22', '11:00', 'esquina vai e nao volta');
insert into acidente values (127,'2023-10-06', '12:00', 'esquina da morte');

---------------------------------------------------------------------------------------------------------

create table apolice_acidente(
 num_apolice integer,
 cod_acidente integer,
 constraint pk_ap_ac primary key (num_apolice,cod_acidente),
 constraint pk_ac_apolice foreign key (num_apolice)
 references apolice(numero),
 constraint pk_ac_acidente foreign key (cod_acidente)
 references acidente(codigo)
); 

insert into apolice_acidente (num_apolice, cod_acidente) values (3,124);
insert into apolice_acidente (num_apolice, cod_acidente) values (1,123);
insert into apolice_acidente (num_apolice, cod_acidente) values (5,125);
insert into apolice_acidente (num_apolice, cod_acidente) values (2,126);
insert into apolice_acidente (num_apolice, cod_acidente) values (4,125);

select * from apolice_acidente

---------------------------------------------------------------------------------------
/*  exercicio 2*/

create table departamento (
 numero integer,
 nome varchar(50) not null,
 constraint pk_depto primary key (numero)
);

insert into departamento values(1,'Compras');
insert into departamento values(2,'TI');
insert into departamento values(3,'Financeiro');
insert into departamento values(4,'Almoxarifado');
insert into departamento values(5,'PCP');

select * from departamento


------------------------------------------------------------------

create table projeto (
 numero integer,
 orcamento numeric(10,2) not null check (orcamento > 0),
 constraint pk_proj primary key (numero)
);

select * from projeto
insert into projeto values (1, 2000);
insert into projeto values (2, 3000);
insert into projeto values (3, 5554);
insert into projeto values (4, 6045);
insert into projeto values (5, 10000);

----------------------------------------------------------------

create table deposito (
 numero integer,
 endereco varchar(150) not null,
 constraint pk_deposito primary key (numero)
);

insert into deposito values (10,'matriz');
insert into deposito values (20,'filial');
insert into deposito values (30,'matriz');
insert into deposito values (40,'almoxarifado-MP');
insert into deposito values (50,'almoxarifado-PRD');

select * from deposito

------------------------------------------------------------------------------------

create table fornecedor (
 numero integer,
 nome varchar(100) not null,
 endereco varchar(150) not null,
 constraint pk_forn primary key (numero)
);

insert into fornecedor values(1, 'AMALFIS','mogi');
insert into fornecedor values(2, 'FORMICA','mogi');
insert into fornecedor values(3, 'COMPASS','SUZANO');
insert into fornecedor values(4, 'ADOLETA','BRAS');
insert into fornecedor values(5, 'POUPATEMPO','mogi');

select * from fornecedor
---------------------------------------------------------------------------------------------

create table peca (
 numero integer,
 cor varchar(50) not null,
 peso numeric(10,2) not null,
 num_deposito integer not null,
 constraint pk_peca primary key (numero),
 constraint fk_peca_dep foreign key (num_deposito)
references deposito (numero)
);

insert into peca values (1044,'red',10.5, 10);
insert into peca values (1045,'red',10.5, 10);
insert into peca values (1046,'red',10.5, 10);
insert into peca values (1047,'red',10.5, 10);
insert into peca values (1048,'blue',50, 20);
insert into peca values (1090,'pink',60, 30);
insert into peca values (1115,'black',5, 40);

select * from peca

------------------------------------------------------------------------------------

create table fornecimento (
 num_fornecedor integer,
 num_peca integer,
 constraint pk_fornecimento primary key (num_fornecedor, num_peca),
 constraint fk_forn_forn foreign key (num_fornecedor) references fornecedor (numero),
 constraint fk_forn_peca foreign key (num_peca) references peca (numero)
); 
select * from fornecedor
select * from peca

insert into fornecimento values (2,1044);
insert into fornecimento values (3,1047);
insert into fornecimento values (5,1090);
insert into fornecimento values (1,1044);
insert into fornecimento values (4,1115);

select * from fornecimento
------------------------------------------------------------------------------------

create table utilizacao (
 numero integer,
 num_projeto integer not null,
 num_fornecedor integer not null,
 num_peca integer not null,
 constraint pk_utilizacao primary key (numero),
 constraint fk_util_proj foreign key (num_projeto)references projeto (numero),
 constraint fk_util_fornecimento foreign key (num_fornecedor,num_peca)
    references fornecimento (num_fornecedor, num_peca)
); 

select * from projeto
select * from fornecedor
select * from peca
select * from fornecimento
select * from utilizacao

insert into utilizacao (numero, num_projeto, num_fornecedor, num_peca) values (1, 3, 2, 1044);
insert into utilizacao (numero, num_projeto, num_fornecedor, num_peca) values (11, 2, 4, 1115);
insert into utilizacao (numero, num_projeto, num_fornecedor, num_peca) values (12, 3, 1, 1044);
insert into utilizacao (numero, num_projeto, num_fornecedor, num_peca) values (14, 2, 5, 1090);
insert into utilizacao (numero, num_projeto, num_fornecedor, num_peca) values (13, 2, 3, 1047);

select * from utilizacao
----------------------------------------------------------------------------------------

create table funcionario (
 numero integer,
 nome varchar(100) not null,
 salario numeric(10,2) not null,
 telefone numeric(33),
 num_depto integer not null,
 constraint pk_funcionario primary key (numero),
 constraint fk_func_depto foreign key (num_depto)
references departamento (numero)
); 

select * from departamento
insert into funcionario values (1, 'Johnny', 2000, 11951170016,'2');
insert into funcionario values (2, 'Gilberto',4000, 1100000000,'1');
insert into funcionario values (3, 'Natalia', 3800, 11951170016,'3');
insert into funcionario values (4, 'Rafael', 3000, 11951170016,'5');
insert into funcionario values (5, 'Evelyn', 3000, 11951170016,'4');

select * from funcionario

create table funcionario_projeto (
 num_funcionario integer,
 num_projeto integer,
 dt_inicio date not null check (dt_inicio >= now()),
 horas_trabalhadas numeric (10,2) not null,
 constraint pk_func_proj primary key (num_funcionario,num_projeto),
 constraint fk_fp_func foreign key (num_funcionario)
    references funcionario (numero),
 constraint fk_fp_proj foreign key (num_projeto)
    references projeto (numero)
); 

select * from funcionario
select * from projeto
select * from funcionario_projeto

insert into funcionario_projeto values (1, 2,'2023-04-10', '800' );
insert into funcionario_projeto values (2, 3,'2023-04-10', '800' );
insert into funcionario_projeto values (3, 4,'2023-04-10', '800' );
insert into funcionario_projeto values (4, 5,'2023-04-10', '800' );
insert into funcionario_projeto values (5, 1,'2023-04-10', '800' );