        const loadData = () => {
            let username = document.querySelector("#username").value;

            console.log(username)

            if(username != null && username != ''){

            const xhr = new XMLHttpRequest();
            
            const url = `https://api.github.com/users/${username}`;

            xhr.open("GET", url);
            xhr.send(null);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4){
                    const res = JSON.parse(xhr.responseText);
                    console.log(JSON.parse(xhr.responseText));

                    const foto = res.avatar_url;
                    const name = res.name;
                    const followers = res.followers;
                    const repos = res.public_repos;
                    const url = res.html_url;

                    //Seleciona a linha no documento onde vão ser inseridos os cards
                    const cardsEl = document.querySelector("#cards");
                    //cria uma div coluna para inserir o card e adiciona estilos de coluna
                    const colEl = document.createElement("div");
                    colEl.className = "col-sm-6 col-lg-3 mb-3";
                    //cria uma div card e adiciona estilos de card
                    const cardEl = document.createElement("div");
                    cardEl.className = "card";

                    //cria elemento imagem e atribui a foto recuperada e adiciona estilos
                    const avatarEl = document.createElement("img");
                    avatarEl.setAttribute("src", foto);
                    avatarEl.setAttribute("width", "128");
                    avatarEl.className = "card-img-top";

                    //cria div do corpo do card e adiciona estilos de card-body
                    const cardBodyEL = document.createElement("div");
                    cardBodyEL.className = "card-body";

                    //cria elemento h5, atribui o nome recuperado e adiciona estilos
                    const nameEl = document.createElement("h5");
                    nameEl.innerText = name;
                    nameEl.className = "card-title"

                    //cria elemento p, atribui o texto recuperado e adiciona estilos
                    const followerEl = document.createElement("p");
                    followerEl.innerText = `Seguidores: ${followers}`;
                    followerEl.className = "card-text";

                    //cria elemento p, atribui o texto recuperado e adiciona estilos
                    const reposEl = document.createElement("p");
                    reposEl.innerText = `Repositórios: ${repos}`;
                    reposEl.className = "card-text";

                    //cria elemento p, atribui o link recuperado e adiciona estilos
                    const urlEl = document.createElement("a");
                    urlEl.setAttribute("href", url);
                    urlEl.innerText = url;
                    urlEl.className = "card-link";

                    //insere todos os elementos criados na página
                    cardsEl.appendChild(colEl);
                    colEl.appendChild(cardEl);
                    cardEl.appendChild(avatarEl);
                    cardEl.appendChild(cardBodyEL);
                    cardBodyEL.appendChild(nameEl);
                    cardBodyEL.appendChild(followerEl);
                    cardBodyEL.appendChild(reposEl);
                    cardBodyEL.appendChild(urlEl);
                }
            }
        }
        }
        //Seleciona o botão que irá chamar a função de carregar os dados
        const button = document.querySelector("button");
        button.addEventListener("click", loadData);