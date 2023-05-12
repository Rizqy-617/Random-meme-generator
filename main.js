const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
// `document.querySelector` digunakan untuk menangkap selector css atau class yang nanti akan dimanipulasi. Dalam kasus ini, `document.querySelector` digunakan untuk menangkap class `.meme-generator`, `generate-meme-btn`, `meme-title`, dan `meme-author` yang nanti akan dimanipulasi

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

// setAttribute disini digunakan untuk menambahkan sebuah nilai baru ke atribute "src" yang ada di html, nilai yang ditambahkan berupa url dinamis yang didapatkan dari API
//innerHTML ini digunakan untuk menambahkan sebuah nilai baru terhadap content HTML

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
  .then((response) => response.json()) //mengembalikan sebuah response dalam bentuk json
  .then((data) => {
    updateDetails(data.url, data.title, data.author); //data json tersebut lalu disimpan dalam argumen data.url, data.title, dana data.author yang nanti bisa digunakan
  });
};

generateMemeBtn.addEventListener("click", generateMeme); //setiap kali button dengan class generate-meme-btn diklik maka akan menjalankan function generateMeme

generateMeme();