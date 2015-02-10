//politely borrowed from: http://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery
//$("div.gallery").randomize("", "a");

(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.detach(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);
