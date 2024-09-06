function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(section);
    let informacoes = ""
    campoPesquisa = campoPesquisa.toLowerCase()
    let nome = "";
    let descricao = "";
    let estadio = "";
    let cores = "";
    let mascote = "";
    
    for(let dado of dados){
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        estadio = dado.estadio.toLowerCase()
        cores = dado.cores.join(" ").toLowerCase()
        mascote = dado.mascote.toLowerCase()
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || estadio.includes(campoPesquisa) || cores.includes(campoPesquisa)
            || mascote.includes(campoPesquisa)){
            informacoes += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.nome}</a>
                </h2>
                <p>${dado.descricao}</p>
                <p>${dado.estadio}</p>
                <p>${dado.cores}</p>
                <p>${dado.mascote}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`
        }
        }


        if(!informacoes){
            informacoes = "<p>Nada foi encontrado!</p>"
        }
    section.innerHTML = informacoes
    }



