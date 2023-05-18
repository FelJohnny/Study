create table aluno(
    rgm integer,
    nome varchar(100) not null,
    idade integer not null,
    situacao varchar,
    constraint pk_aluno primary key (rgm)
    
);

drop table disciplina;

create table Disciplina(
    codigo integer,
    nome varchar not null,
    media   numeric not null unique check ( media >= 5 ),
    constraint pk_disciplinas primary key (codigo)
);

create table notas(
    cod_aluno   integer,
    cod_disc    integer,
    p1          numeric (4,2),
    p2          numeric (4,2),
    faltas      integer,
    constraint pk_notas primary key (cod_aluno, cod_disc),
    constraint fk_aluno foreign key (cod_aluno) references aluno(rgm),
    constraint fk_disc foreign key (cod_disc) references disciplina(codigo)
);


---------------------------------------



drop table notas



insert into aluno values (1,'Johnny',22,'reprovado')
insert into aluno values (2,'Luany',20,'aprovado')
insert into aluno values (3, 'joazin',90,'reprovado a seculos')
insert into aluno values (4, 'seila', 15, 'aprovado')
insert into aluno values (5,'nao sei', 40, 'aprovado')
insert into aluno values (6,'ana paula', 40, 'aprovado')

select * from disciplina

insert into disciplina values (1,'matematica',6)
insert into disciplina values (2,'portuga',20)
insert into disciplina values (3, 'ciencias',90)
insert into disciplina values (4, 'BD', 15)
insert into disciplina values (5,'POO', 40)
insert into disciplina values (6,'informatica', 40)

select * from notas

select * from aluno

select * from disciplina

insert into notas values (1, 2, 10.0, 8.0, 3)
insert into notas values (2, 2, 8, 8.0, 2)
insert into notas values (3, 2, 7.0, 7.0, 5)
insert into notas values (4, 2, 5.0, 6.0, 4)
insert into notas values (5, 2, 6.0, 5.0, 10)



------------------------------------------------------------------

--
update aluno set situacao ='Aluno começado com Ana' where  nome like ('%Ana%')

select * from aluno
--------------------------------------------------------------------------

--4

select * from notas
update notas set faltas = (faltas + 1)

--5

select * from aluno

update aluno set situacao ='Aluno pontencial' where idade between 18 and 25



