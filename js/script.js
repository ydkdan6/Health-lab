$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });

    var currentIndex = 0;
    var $backgroundImage = $(".image-infinite-bg");
    var images = $backgroundImage.data('images');

    function changeBackgroundImage() {
        // Mengubah gambar latar belakang dengan indeks berikutnya dalam array
        $backgroundImage.removeClass('animation-bg');
        currentIndex = (currentIndex + 1) % images.length;
        var imagePath = images[currentIndex];
        $backgroundImage.css("background-image", "url('" + imagePath + "')");
        $backgroundImage[0].offsetHeight;
        $backgroundImage.addClass('animation-bg');

    }

    // Panggil fungsi untuk pertama kali
    changeBackgroundImage();

    // Set interval untuk memanggil fungsi perubahan gambar dengan waktu yang ditentukan
    setInterval(changeBackgroundImage, 5000); // 10 detik (sesuaikan dengan waktu animasi CSS di atas)
});

$(window).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
       if (scroll >100) {
        $("#header").addClass('glass-effect');
       } else {
        $("#header").removeClass("glass-effect");
       }
     })
   })