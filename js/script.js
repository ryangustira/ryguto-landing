// event pada saat di klik
$('.page-scroll').on('click', function(){

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen bersangkutan
    var elemenTujuan = $(tujuan);
    
    //Pindah Scroll
     console.log($('body').scrollTop());

  

});