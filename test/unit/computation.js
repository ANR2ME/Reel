/**
 * .reel Unit Tests
 */
(function($){

  module('Computation', { teardown: function teardown(){
    $('.jquery-reel').trigger('teardown');
  }});

  asyncTest( '`fractionChange` accepts and normalizes any real fraction passed', function(){
    var
      selector= '#image',
      $reel= $(selector).reel(),
      entries= {
        '3': 0,
        '-2.1': 0.9,
        '-3.7': 0.3,
        '1.8': 0.8,
        '3.4': 0.4,
        '3.5': 0.5,
        '-0.3': 0.7,
        '1.23456': 0.23456,
        '-1.23456': 0.76544,
        '-1.2': 0.8
      }
    $.each(entries, function(ix,it){
      $reel.trigger('fractionChange', Number(ix));
      equal( $reel.data('fraction'), it, 'Passed '+ix);
    });
    start();
  });

  asyncTest( 'Positive direction/spped is not detected as reversed', function(){
    expect(1);
    var
      selector= '#image',
      $reel= $(selector).reel({ speed: 1 })

    equal( $reel.data('reversed'), false, 'Not reversed at positive speed');
    start();
  });

  asyncTest( 'Negative direction/spped is detected as reversed', function(){
    expect(1);
    var
      selector= '#image',
      $reel= $(selector).reel({ speed: -1 })

    equal( $reel.data('reversed'), true, 'Reversed at negative speeds');
    start();
  });

})(jQuery);