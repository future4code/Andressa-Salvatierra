class novoPost {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}
arrayPostsBlog = []

function enviarPost() {
    let title = document.getElementById("titulo").value
    let author = document.getElementById("autor").value
    let content = document.getElementById("conteudo").value
    const conteudoPost = new novoPost(title, author, content)
    arrayPostsBlog.push(conteudoPost)
    console.log(arrayPostsBlog)
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""
    criarPost()
}

function criarPost() {
    const containerPost = document.getElementById("container-posts")
    containerPost.innerHTML = ""
    for (el of arrayPostsBlog) {
        containerPost.innerHTML += publicarPost(el)
    }
}

function publicarPost(novoPost) {
    return "<article id='container-novo-post'> <h2>Titulo:</h2>" + novoPost.titulo +
        "<h2>Autor:</h2>" + novoPost.autor +
        "<h2>Conteúdo:</h2>" + novoPost.conteudo + "</article>"
}