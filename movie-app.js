$('#inputs').on('submit', function(e) {
  e.preventDefault();
  $('#reviews').prepend('<div>')
  $('div')
    .eq(0)
    .addClass('review')
    .append($('<p>', {'text': `${$('#movie-title').val()} : ${$('#movie-rating').val()}/10`}))
    .append($('<button>', {'text': 'Remove', 'class': 'rmv'}))    
  $('.rmv').on('click', function(){
    $(this).eq(0).parent().remove();
  })
}
)

