create table PESSOAL(
    CODIGO INTEGER primary key,
    codigo_depto integer,
    nome varchar(20),
    constraint fk_pessoal_dpto foreign key (codigo_depto) references depto(codigo)
);


create table depto (
    codigo INTEGER primary key ,
    nome_depto varchar(20)
);

/*exercicio (a) */

create sequence seq_depto;

insert into depto values(nextval('seq_depto'),'nome1'),(nextval('seq_depto'),'nome2'),(nextval('seq_depto'),'nome3')

select * from depto

/*exercicio (b) */

create sequence seq_pessoal;
insert into PESSOAL values(nextval('seq_pessoal'),(select c.codigo from depto c where c.nome_depto ilike 'nome2'),'nome_dep1'),
                          (nextval('seq_pessoal'),(select c.codigo from depto c where c.nome_depto ilike 'nome3'),'joao'),
                          (nextval('seq_pessoal'),(select c.codigo from depto c where c.nome_depto ilike'nome1'),'maria');
                          

select * from pessoal

/*exercicio (c) */

alter table PESSOAL add column dt_nasc date

update pessoal set dt_nasc = '2000-07-20' where nome ='nome_dep1'
update pessoal set dt_nasc = '2000-08-01' where nome ='joao'
update pessoal set dt_nasc = '1999-07-20' where nome ='maria'

select * from pessoal

/*exercicio (d) */

create view aniversariantes_setembro as
    select nome, dt_nasc from pessoal where date_part('month',dt_nasc)=07
.

/*exercicio e*/

create view relatorio as select PESSOAL.nome, depto.nome_depto from PESSOAL, depto where depto.codigo = pessoal.codigo_depto

select * from relatorio

/*exercicio f*/
create view pessoas_desc as select pessoal.nome from pessoal order by pessoal.nome desc

select * from pessoas_desc

/*exercicio g*/

create view departamento_vazio as select d.nome_depto from depto d where d.codigo not in (select distinct codigo_depto from pessoal)rn