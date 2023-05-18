create table cliente(
    id_cliente integer primary key,
    nome varchar(50) not null
   
);


create table tipo_filme(
    id_tipo integer primary key,
    descricao varchar(100)not null,
    qtd_dias_locacao integer not null,
    vlr_multa_dia   float not null

);


create table filme(
    id_filme integer primary key,
    titulo varchar(50) not null,
    id_tipo_filme integer not null,
    constraint fk_id_tipo foreign key (id_tipo_filme) references tipo_filme(id_tipo)
);

create table locacao(
    id_locacao integer primary key,
    id_cliente integer not null,
    id_filme integer not null,
    data_locacao date,
    data_prev_devolucao date,
    multa float,
    status boolean,
    constraint fk_id_cliente foreign key (id_cliente) references cliente(id_cliente),
    constraint fk_id_filme foreign key (id_filme) references filme(id_filme)
);

drop table locacao
select * from locacao
select * from cliente

/*2 criar seuqence de cada tablea*/
create sequence seq_id_cliente
create sequence seq_tipo_filme
create sequence seq_id_filme
create sequence seq_id_locacao

/*3 Inclua pelo menos 5 registros nas tabelas cliente, filme e tipo_filme de forma a garantir que
todos os registros sejam inseridos, ou em caso de erro, nenhum registro seja inserido (utilize
sequence e insert com query quando necessário). */


begin work;
insert into cliente values(nextval('seq_id_cliente'),'Johnny'),
                          (nextval('seq_id_cliente'),'joaozinho'),
                          (nextval('seq_id_cliente'),'maria'),
                          (nextval('seq_id_cliente'),'pedro'),
                          (nextval('seq_id_cliente'),'marcos');
commit;


begin work;
insert into tipo_filme values(nextval('seq_tipo_filme'),'acao',4, 2.00),
                          (nextval('seq_tipo_filme'),'drama',5, 2.00),
                          (nextval('seq_tipo_filme'),'shounem',4, 2.00),
                          (nextval('seq_tipo_filme'),'comedia',4, 2.00),
                          (nextval('seq_tipo_filme'),'besteirol',2, 2.00);
commit;

begin work;
--insert into filme values(nextval('seq_id_filme'),'naruto', (select id_tipo from tipo_filme where descricao = 'shounem') );
insert into filme values(nextval('seq_id_filme'),'tristeza semfim', (select id_tipo from tipo_filme where descricao = 'drama') );
insert into filme values(nextval('seq_id_filme'),'iron man', (select id_tipo from tipo_filme where descricao = 'acao') );
insert into filme values(nextval('seq_id_filme'),'broklyn 99', (select id_tipo from tipo_filme where descricao = 'comedia') );
insert into filme values(nextval('seq_id_filme'),'sei la', (select id_tipo from tipo_filme where descricao = 'besteirol') );

commit;

select * from filme
select * from locacao
insert into locacao values (nextval('seq_id_locacao'),(select id_cliente from cliente where nome='johnny'),(select id_filme from filme where titulo='naruto','2023-05-14', '2023-06-01', 10.00, 'aprovado'));
