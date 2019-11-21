class novoPost {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function enviarPost() {
    let title = document.getElementById("titulo").value
    let author = document.getElementById("autor").value
    let content = document.getElementById("conteudo").value
    const conteudoPost = new novoPost(title, author, content)
    console.log(title)
    console.log(author)
    console.log(content)
}

console.log(novoPost)