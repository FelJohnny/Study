

create table genero(
 id integer not null,
 nome varchar(100),
 constraint genero_pkey primary key (id)
);

create table filme(
 id numeric(5) not null,
 nome varchar(100),
 duracao integer,
 sinopse varchar(2000),
 genero integer,
 data timestamp,
 constraint pk_genero primary key (id),
 constraint fk_genero_filme foreign key (genero) references genero (id)
);


insert into genero values (1,'drama');
insert into genero values (2,'comedia');
insert into genero values (3,'terror');
insert into genero values (4,'romance');
insert into genero values (5,'suspense');

insert into filme values (1,'os outros','90','aaaaaaaaaaaa',5,'2006-08-15'),
                         (2,'duplex','120','aaaaaaaaaaaa',2,'2001-08-15'),
                         (3,'click','100','aaaaaaaaaaaa',2,'2005-08-15'),
                         (4,'o piano','90','aaaaaaaaaaaa',1,'2005-06-12');


/*SINTAXE criando function */

/* create or replace function nomefuncao(parametros)

returns tipo as
'
    implementacao
'

language 'sql'

*/

select * from genero


create function identificador (varchar) 

returns varchar as

'

    select id from genero where nome = $1;

'

language 'sql';


select identificador('drama');


/*2 */
create function attgenero(bigint, varchar)

returns void as

'

insert into genero values ($1,$2);

'
language 'sql';

drop function attgenero


/*3*/
select * from genero;

select attgenero(8,'dorama');


/*4*/
create sequence seq_genero start with 20;

drop sequence seq_genero;

select attgenero(nextval('seq_genero'),'Besteirol');

/*5*/
drop function deletando
select * from genero
create function deletando(bigint)
returns void as
'
 delete from genero where id= $1;
'
language 'sql';

select deletando(12)

/*6*/

select * from genero

select deletando(identificador('comedia'));