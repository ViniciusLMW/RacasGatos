function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa) {
        section.innerHTML =
        `
        <p>Nada foi encontrado. Digite alguma raça ou caracteristica do gato!</p>
        `
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    //variavel para armazenar os resultados
    let resultados = "";
    //variavel para armazenar o titulo
    let titulo = "";
    //variavel para armazenar a descricao
    let descricao = "";
    //variavel para armazenar as tags
    let tags = "";

    //para cada "dado" dentro da lista "dados"
    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se o "titulo" do "dado" incluir o que está na variavel "campoPesquisa"
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //somando cada "dado" adicionar na variavel "resultados", sendo "innerHTML" (adicionar ao HTML)
            resultados += 
            `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    //se "resultados" não existir/possuir nada
    if(!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados;
}