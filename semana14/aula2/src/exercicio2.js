var posts = [
    {
        text: "Olá este é o primeiro post",
        author: "astronauta"
    },
    {
        text: "Oi como vai você?",
        author: "astronauta"
    },
    {
        text: "No Brasil não há parceiro para mim",
        author: "xuxa"
    },
    {
        text: "What happens after we die?",
        author: "philosopher"
    },
    {
        text: "Why is the sky blue?",
        author: "philosopher"
    }
];
var filteringPosts = function (posts, author) {
    var filteredPosts = posts.filter(function (post) {
        return post.author === author;
    });
    console.log(filteredPosts);
    return filteredPosts;
};
filteringPosts(posts, "philosopher");
