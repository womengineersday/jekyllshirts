//politely borrowed from: http://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery

$( document ).ready(function() {
    console.log( "ready!" );
    $(".gallery").randomize("", "a");
});

(function($) {
  
  $.fn.randomize = function(tree, childElem) {
    return this.each(function() {
      var $this = $(this);
      if (tree) $this = $(this).find(tree);
      var unsortedElems = $this.children(childElem);
      var elems = unsortedElems.clone();
      
      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      for(var i=0; i < elems.length; i++)
        unsortedElems.eq(i).replaceWith(elems[i]);
    });    
  };

})(jQuery);
