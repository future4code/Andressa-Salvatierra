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
        // publicarPost()
}

// function publicarPost() {

// }