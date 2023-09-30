const Jogos = [
    {
        imagem: './assets/Black_Flag.webp',
        nome:"Assassin's creed Black Flag",
        plataforma:"PC e Console",
        genero:"Terceira pessoa, RPG de acão, Furtivo, Assasino",
        preco:"R$ 119,99"
    },
    {
        imagem: './assets/sea_of_thives',
        nome:"Sea Of Thives",
        plataforma:"PC e Console",
        genero:"Multijogar, Aventura, Mundo aberto, Piratas",
        preco:"R$ 44,99"
    },
    {
        imagem: './assets/Hogwarts.webp',
        nome:"Hogwarts Legacy",
        plataforma:"PC e Console",
        genero:"Mágica, Fantasia, Mundo aberto",
        preco:"R$ 199,99"
    },
    {
        imagem: './assets/SKYRIM.jpg',
        nome:"The Elders Scrolls V SKYRIM",
        plataforma:"PC e Console",
        genero:"Multijogador, RPG, Aventura",
        preco:"R$ 149,00"
    },
    {
        imagem: './assets/Metro.jpg',
        nome:"Metro Exodus",
        plataforma:"PC e Console",
        genero:"Pós-apocaliptico, Tiro em primeira pessoa",
        preco:"R$ 149,00"
    },
    {
        imagem: './assets/street_fighter_6.jpg',
        nome:"Street Fighter 6",
        plataforma:"PC e Console",
        genero:"Luta 2D, Ação, Arcade, 3D",
        preco:"R$ 249,00"
    },
    {
        imagem: './assets/Resident-Evil-4-Remake.jpg',
        nome:"Resident Evil 4",
        plataforma:"PC e Console",
        genero:"Ação, Terror de Sobrevivência, Zumbis",
        preco:"R$ 249,00"
    },
    {
        imagem: './assets/the-last-of-us-part-1.webp',
        nome:"The Last of Us Part I",
        plataforma:"PC e Console",
        genero:"Boa Trama, Zumbis, Ação",
        preco:"R$ 249,90"
    },
    {
        imagem: './assets/spider-man-remastered.jpg',
        nome:"Spider-Man Remastered",
        plataforma:"PC e Console",
        genero:"Super-Herois, Mundo Aberto, Ação",
        preco:"R$ 249,90"
    }
]

const container = document.querySelector('.container')


Jogos.map(jogo => {
    container.innerHTML += `<div class="game-box">
                <div class="gamebox-inter">
                    <img src="${jogo.imagem}" alt="img" />
                    <div class="game-verse">
                        <h3 style="color: aliceblue;">${jogo.nome}</h3>
                        <p style="color: #c7d5e0;">${jogo.plataforma}</p>
                        <p style="color: #c7d5e0;">${jogo.genero}</p>
                    </div>
                </div>
        <p class="preco" style="color: aliceblue;">${jogo.preco}</p>
    </div>`
})
