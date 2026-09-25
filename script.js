/*
===========================================================
EDIT SEMUA KONTEN WEBSITE DI BAGIAN INI
===========================================================
Ganti teks/foto/tanggal sesuai kebutuhanmu.
Foto lokal diletakkan di folder images/.
Musik lokal diletakkan di folder music/.
*/

const birthdayData = {
  partnerName: "Rizka Asna Adkhiyatu Rahmah",
  myName: "Henryco Mu'arif",

  intro: "Hari ini adalah tentang seseorang yang begitu berarti dalam hidupku.",

  messageTitle: "Untuk kamu, di hari spesialmu",
  mainMessage: `Selamat ulang tahun, sayangku. ❤️

Hari ini adalah hari yang spesial, karena di hari ini seseorang yang begitu berarti bagiku lahir ke dunia.

Terima kasih sudah hadir, terima kasih untuk semua cerita, tawa, dan momen yang sudah kita lewati bersama.

Semoga di usia yang baru ini kamu selalu dikelilingi hal-hal baik, diberi kesehatan, kebahagiaan, dan kekuatan untuk mengejar semua impianmu.

Aku mungkin tidak selalu bisa memberikan hal yang sempurna, tapi aku akan selalu berusaha memberikan yang terbaik untukmu.`,

  loveLetter: `Untuk kamu,Sayangku Rahmah

Kalau suatu hari nanti kamu lupa betapa berharganya dirimu, semoga surat kecil ini bisa mengingatkanmu.

Ada banyak hal yang sulit dijelaskan dengan kata-kata. Salah satunya adalah betapa bersyukurnya aku karena bisa mengenalmu.

Terima kasih sudah menjadi bagian dari perjalanan hidupku. Semoga kita terus punya banyak cerita yang bisa dikenang.

Selamat ulang tahun, sayang. Tetaplah menjadi dirimu yang indah. ❤️`,

  wishes: `Semoga semua langkahmu dimudahkan.
Semoga impian-impianmu satu per satu menjadi nyata.
Semoga kamu selalu menemukan alasan untuk tersenyum.
Dan semoga kebahagiaan selalu menemukan jalan untuk datang kepadamu.

Apa pun yang terjadi nanti, jangan pernah lupa bahwa kamu adalah seseorang yang sangat berarti.`,

  closingMessage: "Semoga hari ini menjadi awal dari banyak hal indah yang akan datang.",

  birthdayDate: "2026-12-12T00:00:00",

  // Ganti nama file sesuai foto milikmu.
  photos: [
    "images/rahmah1.jpg",
    "images/rahmah2.jpg",
    "images/rahmah3.jpg",
    "images/rahmah4.jpg",
    "images/rahmah5.jpg",
    "images/rahmah6.jpg"
  ],

  timeline: [
    { date: "Sabtu, 29 Agustus 2026", title: "Pertama kali kita bertemu", text: "Pertemuan yang begitu singkat namun ternyata ada hati yg melekat." },
    { date: "Jum'at, 11 September 2026", title: "Momen yang tidak terlupakan", text: "Untuk kesekian kalinya aku kembali membuka hati ku untuk orang yang aku rasa aku akan bisa bahagia bersamanya." },
    { date: "Selasa, 15 September 2026", title: "Cerita kecil kita", text: "Hari pertemuan sederhana kita tetapi menjadi kesan pertama yg berarti bagiku semoga kita bisa bertemu di kebetulan lainnya." },
    { date: "Momen Setiap Hari", title: "Sampai hari ini", text: "Hari hari selalu disisi dengan obrolan ringan hingga manja selalu terulang namu tak pernah ku merasa bosan di setiap percakapan selalu memunculkan benih cinta lainnya." }
  ],

  music: [
    "music/lagu1.mp3",
    "music/lagu2.mp3"
  ],

  modalText: "Semoga senyummu selalu punya alasan untuk hadir. Terima kasih sudah menjadi bagian terindah dari ceritaku. ❤️"
};

// =========================================================
// JANGAN PERLU EDIT BAGIAN DI BAWAH INI
// =========================================================

const $ = (id) => document.getElementById(id);

$("heroName").textContent = birthdayData.partnerName;
$("finalName").textContent = birthdayData.partnerName;
$("fromName").textContent = birthdayData.myName;
$("signatureName").textContent = birthdayData.myName;
$("heroIntro").textContent = birthdayData.intro;
$("messageTitle").textContent = birthdayData.messageTitle;
$("mainMessage").textContent = birthdayData.mainMessage;
$("loveLetter").textContent = birthdayData.loveLetter;
$("wishes").textContent = birthdayData.wishes;
$("closingMessage").textContent = birthdayData.closingMessage;
$("modalTitle").textContent = `Happy Birthday, ${birthdayData.partnerName} ♥`;
$("modalText").textContent = birthdayData.modalText;

const gallery = $("gallery");
birthdayData.photos.forEach((src, i) => {
  const item = document.createElement("div");
  item.className = "gallery-item reveal";
  item.innerHTML = `<img src="${src}" alt="Kenangan ${i + 1}" loading="lazy">`;
  item.querySelector("img").addEventListener("error", function(){
    this.style.display = "none";
    item.style.background = "linear-gradient(135deg,#f1dfe5,#fff)";
    item.innerHTML += `<div style="height:100%;display:grid;place-items:center;color:#a98e97;padding:20px;text-align:center">Ganti dengan<br>foto${i+1}.jpg</div>`;
  });
  item.addEventListener("click", () => {
    $("lightboxImg").src = src;
    $("lightbox").classList.remove("hidden");
  });
  gallery.appendChild(item);
});

const timeline = $("timeline");
birthdayData.timeline.forEach((item, i) => {
  const el = document.createElement("article");
  el.className = "timeline-item reveal";
  el.innerHTML = `
    <span class="timeline-dot"></span>
    <div class="timeline-date">${item.date}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  timeline.appendChild(el);
});

const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");
const musicSelect = document.getElementById("musicSelect");
const musicText = document.getElementById("musicText");

let musicPlaying = false;

// Lagu pertama sebagai lagu awal
if (Array.isArray(birthdayData.music) && birthdayData.music.length > 0) {
  audio.src = birthdayData.music[0];
} else {
  audio.src = birthdayData.music;
}

// Ganti lagu ketika pilihan berubah
musicSelect.addEventListener("change", () => {
  audio.pause();
  audio.currentTime = 0;
  audio.src = musicSelect.value;
  musicPlaying = false;
  musicText.textContent = "Putar musik";
});

// Tombol putar / jeda
musicBtn.addEventListener("click", async () => {
  if (!audio.src) return;

  if (musicPlaying) {
    audio.pause();
    musicText.textContent = "Putar musik";
  } else {
    try {
      await audio.play();
      musicText.textContent = "Jeda musik";
    } catch (error) {
      alert("Pastikan file musik ada di folder music/.");
      return;
    }
  }

  musicPlaying = !musicPlaying;
});

$("openBtn").addEventListener("click", () => {
  $("surpriseContent").classList.remove("hidden-content");
  $("surpriseContent").scrollIntoView({behavior:"smooth"});
  burstHearts(18);
});

$("envelope").addEventListener("click", () => {
  $("envelope").classList.toggle("open");
  $("letter").classList.toggle("hidden");
});

$("closeLightbox").addEventListener("click", () => $("lightbox").classList.add("hidden"));
$("lightbox").addEventListener("click", (e) => {
  if(e.target === $("lightbox")) $("lightbox").classList.add("hidden");
});

$("surpriseBtn").addEventListener("click", () => {
  $("modal").classList.remove("hidden");
  burstHearts(45);
});
$("closeModal").addEventListener("click", () => $("modal").classList.add("hidden"));
$("modal").addEventListener("click", (e) => {
  if(e.target === $("modal")) $("modal").classList.add("hidden");
});

function updateCountdown(){
  const target = new Date(birthdayData.birthdayDate).getTime();
  const now = Date.now();
  let diff = target - now;

  if(diff <= 0){
    $("countdownTitle").textContent = "Happy Birthday! ❤️";
    ["days","hours","minutes","seconds"].forEach(id => $(id).textContent = "00");
    return;
  }

  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);

  $("days").textContent = String(days).padStart(2,"0");
  $("hours").textContent = String(hours).padStart(2,"0");
  $("minutes").textContent = String(minutes).padStart(2,"0");
  $("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function burstHearts(count){
  const layer = $("hearts");
  for(let i=0;i<count;i++){
    const h = document.createElement("span");
    h.className = "floating-heart";
    h.textContent = Math.random() > .2 ? "♥" : "✦";
    h.style.left = Math.random()*100 + "%";
    h.style.fontSize = (12 + Math.random()*25) + "px";
    h.style.animationDuration = (3 + Math.random()*4) + "s";
    layer.appendChild(h);
    setTimeout(()=>h.remove(),7500);
  }
}

setInterval(()=>burstHearts(1), 2800);
