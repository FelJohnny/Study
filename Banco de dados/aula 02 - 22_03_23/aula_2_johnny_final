CREATE TABLE cliente(
    numero integer,
    nome varchar(100) not null,
    endereco varchar(150) not null,
    constraint pk_cliente primary key(numero)
);


CREATE TABLE apolice(
    cod_cliente integer,
    registro_carro integer,
    numero  integer,
    valor numeric(10),
    dt_inicio date,
    dt_fim date,
    constraint pk_apolice primary key(numero),
    constraint fk_cliente foreign key(cod_cliente) references cliente(numero),
    constraint fk_carro foreign key(registro_carro) references carro(registro)
);



CREATE TABLE carro(
    registro    integer,
    marca   varchar(50),
    modelo  varchar(50),
    cor     varchar(50),
    constraint pk_carro primary key(registro)
);




CREATE TABLE cobre(
    cod_acidente integer,
    num_apolice integer,
    constraint pk_cobre primary key(cod_acidente, num_apolice),
    constraint fk_acidente foreign key(cod_acidente) references acidente(codigo),
    constraint fk_apolice foreign key(num_apolice) references apolice(numero)
);

CREATE TABLE acidente(
    codigo  integer,
    data    date NOT NULL,
    hora    time NOT NULL,
    local   varchar(200) not null,
    cod_cobre integer,
    constraint pk_acidente primary key(codigo)
    
);

SELECT * FROM apolice
drop table acidente