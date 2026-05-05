let posts = JSON.parse(localStorage.getItem("posts")) || [];

function render() {
  let feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach(p => {
    feed.innerHTML += `
      <div class="post">${p}</div>
    `;
  });
}

function addPost() {
  let input = document.getElementById("postInput");
  let text = input.value.trim();

  if (!text) return alert("Write something!");

  posts.unshift(text);

  localStorage.setItem("posts", JSON.stringify(posts));

  input.value = "";
  render();
}

window.onload = render;
