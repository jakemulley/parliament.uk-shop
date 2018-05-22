function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};
function getParameterByName(a,b){b||(b=window.location.href),a=a.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null};

theme.collectionViews = function () {
  var $changeView = $('[data-view]');
  if ($changeView.length) {

    var viewParameter = getParameterByName('view');
    if(viewParameter) {
      $('[data-view=' + viewParameter + ']').addClass('active');
    } else {
      $('[data-view=grid]').addClass('active');
    }
    $changeView.on('click', function() {
      var view = $(this).data('view'),
          url = document.URL,
          hasParams = url.indexOf('?') > -1;

      if (hasParams) {
        window.location = replaceUrlParam(url, 'view', view);
      } else {
        window.location = url + '?view=' + view;
      }
    });
  }
};

theme.collectionSortBy = function() {
  var $sortBy = $('#SortBy');
  if ($sortBy.length) {
    if(getParameterByName('sort_by')) {
      $sortBy.val(getParameterByName('sort_by'));
    }
  }
};

theme.collectionsPlusMinus = function() {
  var $plus = $('.site-navigation--plus');
  var checkboxes = $('input[id^="submenu"]');
  checkboxes.on('change', function() {
    var checked = $(this).is(':checked');
    if(checked === true) {
      $(this).prev().text('-');
    } else {
      $(this).prev().text('+');
    }
  });
};

theme.collectionViews();
theme.collectionSortBy();
theme.collectionsPlusMinus();
