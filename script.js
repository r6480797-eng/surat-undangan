
  simplyCountdown('.countdown', {
  year: 2026,
  month: 2,
  day: 15,
  hours: 0,
  minutes: 0,
  seconds: 0,
  words: {
    days: 'Hari',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik'
  },
  plural: false,
  pluralLetter: '',
  enableUtc: false
});

document.getElementById("formRsvp").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const hadir = document.getElementById("kehadiran").value;
  const ucapan = document.getElementById("ucapan").value;

  const noWA = "083875369194";

  const pesan = `RSVP Pernikahan%0A
Nama: ${nama}%0A
Jumlah Hadir: ${jumlah}%0A
Kehadiran: ${hadir}%0A
Ucapan: ${ucapan}`;

  window.open(`https://wa.me/${noWA}?text=${pesan}`, "_blank");
});



function copyRek(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Nomor rekening berhasil disalin");
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnUndangan");
  const audio = document.getElementById("bgMusic");

  btn.addEventListener("click", function (e) {
    e.preventDefault(); // ⛔ stop pindah dulu

    audio.play().then(() => {
      console.log("Musik jalan");
    }).catch(err => {
      console.log("Autoplay diblokir", err);
    });

    // scroll manual setelah play
    document.querySelector("#home").scrollIntoView({
      behavior: "smooth"
    });
  });
});



