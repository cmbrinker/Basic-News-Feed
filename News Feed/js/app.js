const $odd= $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $checkbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');
const checked = 0;

$secureLinks.attr('target', '_blank');

$secureLinks.addClass('secure');

$('#links').append($checkbox);

//Have to set a value that can toggle between classes with toggleClass()//

$('input:checkbox').change(function() {
  if($(this).is(':checked'))
    $pdfs.addClass('secure');
});

$pdfs.on('click', function(event) {
  if ($(':checked').length === 0) {
    event.preventDefault();
    alert("Please check the box to allow PDF downloads")
  }
});

$('a').each(function(index, element) {
  const url = $(element).attr('href');
  $(element).parent().append(`(${url})`);
});
