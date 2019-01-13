const $odd= $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $checkbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$('#links').append($checkbox);

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
