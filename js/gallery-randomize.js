//politely borrowed from: http://stackoverflow.com/questions/14555415/how-to-randomly-sort-list-items

$(document).ready(function() {
  $(".gallery").randomize(".entry");
});

$.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};