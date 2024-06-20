const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./Assets/avatar-vangogh.jpg",
        post: "./Assets/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./Assets/avatar-courbet.jpg",
        post: "./Assets/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./Assets/avatar-ducreux.jpg",
        post: "./Assets/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

//Get element by ID

const postsEl = document.getElementById("posts-el")


//Create function to make post

function makePost(postDetails) {
    return `
    <section>
        <div class="user-details"> 
            <img class="user-avatar" src="${postDetails.avatar}" 
                alt="Profile image of ${postDetails.name}">
        
            <div>
                <p class="bold-small-text"> ${postDetails.name}</p>
                <p class="small-text"> ${postDetails.location}</p>
            </div>
        </div>
        <img class="instagram-picture" src="${postDetails.post}" 
            alt="A portrait painting of ${postDetails.name}">
        <div class="icons">
            <img src="./Assets/icon-heart.png">
            <img src="./Assets/icon-comment.png">
            <img src="./Assets/icon-dm.png">
        </div>
        <div class="caption-details">
            <p class="bold-small-text"> ${postDetails.likes} likes </p>
            <p class="small-text"> <span class="bold-small-text"> ${postDetails.username}</span> 
                ${postDetails.comment}</p>
        </div>
    </section>
    `
}

//Create for loop

let postsHtml = ""
for (let i = 0; i < posts.length; i++) {
    const postDetails = posts[i]
    postsHtml += makePost(postDetails)
}

postsEl.innerHTML = postsHtml