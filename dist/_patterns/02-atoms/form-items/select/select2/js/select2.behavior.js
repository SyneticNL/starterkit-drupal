/**
 * @file File template for a javascript behavior
 *
 */

(function ($, Drupal) {
  Drupal.behaviors.select2 = {
    attach: function (context) {
      var $select2 = $('.js-select2', context).once('select2');
      if ($select2.length > 0) {
        $(document).ready(function() {
          $('.js-select2').select2({
            width: 'auto'
          });
        });

      }
    },
  };

})(jQuery, Drupal);
