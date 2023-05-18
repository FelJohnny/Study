create table categoria(
    codigo integer primary key,
    nome varchar
);

create table livro(
    codigo integer primary key,
    ano integer,
    resumo varchar,
    titulo varchar,
    cod_cat integer,
    cod_edi integer,
    constraint fk_categoria foreign key (cod_cat) references categoria(codigo),
    constraint fk_editorial foreign key (cod_edi) references editorial(codigo)
);

select * from livro
drop table editorial

create table editorial(
    codigo integer primary key,
    nome varchar,
    telefone integer
);
/*Crie uma sequence para cada uma das tabelas criadas no exercício 1 e
faça a inserção de dados utilizando o comando nextval. 
Quando possível, utilize query. 
No mínimo 6 inserções para cada tabela.*/
create sequence seq_cate;
create sequence seq_livr;
create sequence seq_edi;

insert into categoria values( nextval('seq_cate'), 'Johnny');
insert into categoria values( nextval('seq_cate'), 'nome2');
insert into categoria values( nextval('seq_cate'), 'nome3');
insert into categoria values( nextval('seq_cate'), 'nome4');
insert into categoria values( nextval('seq_cate'), 'nome5');

insert into livro values(nextval('seq_livr'),2000,'resumo1','livro1');
insert into livro values(nextval('seq_livr'),2000,'resumo2','livro2');
insert into livro values(nextval('seq_livr'),2000,'resumo3','livro3');
insert into livro values(nextval('seq_livr'),2022,'resumo4','livro4');
insert into livro values(nextval('seq_livr'),2033,'resumo5','livro5');
insert into livro values(nextval('seq_livr'),1999,'resumo6','livro6');

insert into editorial values (nextval ('seq_edi'),'nome1',119976523);
insert into editorial values (nextval ('seq_edi'),'nome2',119976554);
insert into editorial values (nextval ('seq_edi'),'nome3',119976523);
insert into editorial values (nextval ('seq_edi'),'nome4',119976564);
insert into editorial values (nextval ('seq_edi'),'nome5',119342689);
insert into editorial values (nextval ('seq_edi'),'nome6',145637284);

--mostra o proximo valor da contagem da SEQUENCE
select nextval('seq_livr')
--


select * from categoria
select * from livro
select * from editorial