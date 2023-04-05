//Async JS - The problem
// const posts = [
//     { title: 'JS Basics', summary: 'This post contains the basics of JS'},
//     { title: 'DOM Basics', summary: 'This post contains the basics of DOM'}
// ]
// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.summary}</p>`);
//         document.body.innerHTML = output;
//     }, 1000)
// }
// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }
// getPosts();
// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'});


//Async JS - Callback
// const posts = [
//     { title: 'JS Basics', summary: 'This post contains the basics of JS'},
//     { title: 'DOM Basics', summary: 'This post contains the basics of DOM'}
// ]
// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.summary}</p>`);
//         document.body.innerHTML = output;
//     }, 1000)
// }
// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000)
// }
// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'}, getPosts);


//Async JS - Promises - then..catch
// const posts = [
//     { title: 'JS Basics', summary: 'This post contains the basics of JS'},
//     { title: 'DOM Basics', summary: 'This post contains the basics of DOM'}
// ]
// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.summary}</p>`);
//         document.body.innerHTML = output;
//     }, 1000)
// }
// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const num = 4;
//             num > 4 ? resolve() : reject('Error: Something is wrong');
//         }, 2000)
//     })
// }
// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'})
//             .then(getPosts)
//             .catch(err => document.body.innerHTML = `${err}`)


//Async JS - Promises - async..await
// const posts = [
//     { title: 'JS Basics', summary: 'This post contains the basics of JS'},
//     { title: 'DOM Basics', summary: 'This post contains the basics of DOM'}
// ]
// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.summary}</p>`);
//         document.body.innerHTML = output;
//     }, 1000)
// }
// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const num = 4;
//             num > 4 ? resolve() : reject('Error: Something is wrong');
//         }, 2000)
//     })
// }
// async function init(){
//     try {
//         await createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'})
//         getPosts()
//     } catch (err) {
//         document.body.innerHTML = `${err}`
//     }
// }
// init()


//Fetch API - Async-await ***Important
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    let output = '';
    posts.forEach(post => output += `<h3>${post.title}</h3><p>${post.body}</p>`);
    document.body.innerHTML = output;
}
fetchPosts()