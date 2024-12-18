// ハンバーガーアイコンとメニューを取得
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// アイコンをクリックしたときのイベント
hamburger.addEventListener("click", () => {
  // メニューの開閉を切り替え
  menu.classList.toggle("open");

  // ハンバーガーアイコンのアニメーションを切り替え
  hamburger.classList.toggle("open");

  const menuLinks = document.querySelectorAll(".menu a");

  // リンクをクリックしたときにメニューを閉じる
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });
});


// YouTube動画のリスト
const youtubeVideos = [
  "https://www.youtube.com/embed/mRrXLCD7OC4?si=-Eh4MvMpk1TxtADR",
  "https://www.youtube.com/embed/lHF7A17p3Ho?si=SbL85wPKl0NVS7VA"
];

// コンテナを取得
const youtubeContainer = document.getElementById("youtube-container");

// 動画を動的に生成
youtubeVideos.forEach(videoUrl => {
  const iframe = document.createElement("iframe");
  iframe.src = videoUrl;
  iframe.width = 640;        // 幅
  iframe.height = 360;       // 高さ
  iframe.frameBorder = 0;    // ボーダーを消す
  iframe.allow = "autoplay; encrypted-media";

  // コンテナに追加
  youtubeContainer.appendChild(iframe);
});


// 背景色をランダムに変更する関数
function changeBackgroundColor() {
  // ランダムな色を生成
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`;

  // body 要素の背景色を変更
  document.body.style.backgroundColor = randomColor;
}

// 一定間隔で背景色を変更
setInterval(changeBackgroundColor, 2000); // 2000ms (2秒)ごとに変更

let slideIndex = 0;
showSlides(slideIndex);

// スライドを手動で変更
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// スライドを表示
function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// 自動スライドショー
setInterval(() => {
  changeSlide(1);
}, 5000);


// 画像拡大
const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.5)';
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});
