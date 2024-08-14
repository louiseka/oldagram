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

function makeSection() {
    return document.createElement('section')
}


function makeImage(src, alt, className) {
    const image = document.createElement('img')
    image.src = src
    if (alt) { image.alt = alt }
    if (className) { image.classList.add(className) }
    return image
}

function makeIcons() {
    const iconContainer = document.createElement('div')
    iconContainer.classList.add("icons")
    const heart = makeImage("./Assets/icon-heart.png")
    const comment = makeImage("./Assets/icon-comment.png")
    const dm = makeImage("./Assets/icon-comment.png")
    iconContainer.appendChild(heart)
    iconContainer.appendChild(comment)
    iconContainer.appendChild(dm)
    return iconContainer
}

function makeAuthorDetails(userName, userLocation) {

    const name = document.createElement('p')
    name.classList.add('bold-small-text')
    name.textContent = userName

    const location = document.createElement('p')
    location.classList.add('small-text')
    location.textContent = userLocation

    const authorContainer = document.createElement('div')
    authorContainer.appendChild(name)
    authorContainer.appendChild(location)

    return authorContainer
}

function makeUserDetails(authorDetails, userAvatar) {
    const userDetailsContainer = document.createElement('div')
    userDetailsContainer.classList.add('user-details')
    userDetailsContainer.appendChild(userAvatar)
    userDetailsContainer.appendChild(authorDetails)
    return userDetailsContainer
}

function makeCaptionDetails(postLikes, userName, postComment) {

    const likes = document.createElement('p')
    likes.classList.add('bold-small-text')
    likes.textContent = postLikes

    const comment = document.createElement('p')
    comment.classList.add('small-text')
    const text = document.createTextNode(postComment)

    const name = document.createElement('span')
    name.classList.add('bold-small-text')
    name.textContent = userName + ' '

    comment.appendChild(name)
    comment.appendChild(text)

    const captionContainer = document.createElement('div')
    captionContainer.classList.add('caption-details')
    captionContainer.appendChild(likes)
    captionContainer.appendChild(comment)
    return captionContainer
}



function makePost(postDetails) {

    const userAvatar = makeImage(postDetails.avatar, `Profile image of ${postDetails.name}`, "user-avatar")
    const authorDetails = makeAuthorDetails(postDetails.name, postDetails.location)
    const userDetails = makeUserDetails(authorDetails, userAvatar)

    const instagramPicture = makeImage(postDetails.post, `A portrait painting of ${postDetails.name}`, "instagram-picture")

    const icons = makeIcons()

    const captionDetails = makeCaptionDetails(`${postDetails.likes} likes`, postDetails.username, postDetails.comment)

    const section = makeSection()
    section.appendChild(userDetails);
    section.appendChild(instagramPicture);
    section.appendChild(icons);
    section.appendChild(captionDetails);

    return section;
}

//Create for loop

let postsHtml = ""
for (let i = 0; i < posts.length; i++) {
    const postDetails = posts[i]
    postsEl.appendChild(makePost(postDetails))
}

// postsEl.innerHTML = postsHtml