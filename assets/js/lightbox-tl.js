var $polaroid = $('.img-hover');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.lightbox');

$polaroid.on('click', 'a', function (e) {
  e.preventDefault();

  var big = $(this).attr('href');

  $lb.attr('data-state', 'visible');
  $lbImg.attr('src', big);

});

$btnClose.on('click', function () {
  // Change the lightbox's data attribute so it becomes hidden
  $lb.attr('data-state', 'hidden');
});
