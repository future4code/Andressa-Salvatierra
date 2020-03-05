type post = {
    text: string,
    author: string
}

const posts: post[] = [
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
]

const filteringPosts = (posts: post[], author: string): post[] => {
    let filteredPosts = posts.filter((post) => {
        return post.author === author
    })
    console.log(filteredPosts)
    return filteredPosts
}

filteringPosts(posts, "philosopher")