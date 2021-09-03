var posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  let body = "";
  setTimeout(() => {
    posts.forEach((post, index) => {
      body += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = body;
  }, 500);
}

function failurePost(error) {
  alert(error);
}

function addPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 1500);
  });
}

function newAddPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 1500);
}

// addPost({ title: "Post Three", newBody: "This is post three" })
//   .then(getPosts)
//   .catch(error => failurePost(error));

async function updatePosts() {
  await addPost({ title: "Post Three", body: "This is post three" });
  getPosts();
}

updatePosts();





// // CallBack vs Promise vs Async-Await
// var posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post Two", body: "This is post two" }
// ];

// function getPosts() {
//   let body = "";
//   setTimeout(() => {
//     posts.forEach((post, index) => {
//       body += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = body;
//   }, 500);
// }

// function failurePost() {
//   alert("wrong format of post");
// }

// function addPost(post, successCallback, failureCallback) {
//   setTimeout(() => {
//     if (post.title && post.body) {
//       posts.push(post);
//       successCallback();
//     } else {
//       failureCallback();
//     }
//   }, 1500);
// }

// addPost(
//   { title: "Post Three", newBody: "This is post three" },
//   getPosts,
//   failurePost
// );


// var posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post Two", body: "This is post two" }
// ];

// function getPosts() {
//   let body = "";
//   setTimeout(() => {
//     posts.forEach((post, index) => {
//       body += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = body;
//   }, 500);
// }

// function failurePost(error) {
//   alert(error);
// }

// function addPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Something went wrong");
//       }
//     }, 1500);
//   });
// }

// function newAddPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 1500);
// }

// function updatePostsPromise() {
//   addPost({ title: "Post Three", newBody: "This is post three" })
//     .then(getPosts)
//     .catch(error => failurePost(error));
// }

// async function updatePostsAsyncAwait() {
//   try {
//     await addPost({ title: "Post Three", body: "This is post three" });
//     getPosts();
//   } catch (error) {
//     failurePost(error);
//   }
// }

// updatePostsPromise(); //Promise
// updatePostsAsyncAwait(); //Async-Await ->Latest implementation