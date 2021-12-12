const requestClientPath = '../src/assets/posts.json';
let container = document.querySelector('.container');

function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) =>
    {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else
                resolve(xhr.response)
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

function createContainer (len, json) {
    for (let i = 0; i < len; i++) {
        console.log('len: ' + len);
        let post = document.createElement("div");
        post.classList.add("post");

        let title = document.createElement("h2");
        title.textContent = json[i]["title"];

        let img = document.createElement("img");
        img.classList.add("img");
        img.src = json[i]["imgUrl"];

        let desc = document.createElement("p");
        desc.textContent = json[i]["desc"];

        post.appendChild(title);
        post.appendChild(img);
        post.appendChild(desc);

        container.appendChild(post);
    }
}

export {requestClientPath, sendRequest, createContainer};