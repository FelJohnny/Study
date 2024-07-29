type Curso={
    id:number;
    slug:'string';
    nome:'string';
    descricao:'string';
    total_aulas:number;
    total_horas:number;
}

type Aula={
    id:number;
    slug:'string';
    nome:'string';
    descricao:'string';
    tempo:number;
    curso_id: number;
    order:number;
}

export async function getCursos() {
    const response = await fetch('https://api.origamid.online/cursos/');
    return (await response.json()) as Curso[];
}

export async function getCurso(curso: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
    return (await response.json()) as Curso & { 
        aulas: Aula[] ;
    }
}

export async function getAula(curso: string, aula:string ) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
    return (await response.json()) as Aula;
}