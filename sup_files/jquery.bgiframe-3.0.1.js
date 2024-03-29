/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
* Licensed under the MIT License (LICENSE.txt).
*
* Version 3.0.1
*
* Requires jQuery >= 1.2.6
*/
(function (factory) {
if ( typeof define === 'function' && define.amd ) {
define(['jquery'], factory);
} else if ( typeof exports === 'object' ) {
module.exports = factory;
} else {
factory(jQuery);
}
}(function ($) {
$.fn.bgiframe = function(s) {
s = $.extend({
top         : 'auto',
left        : 'auto',
width       : 'auto',
height      : 'auto',
opacity     : true,
src         : 'javascript:false;',
conditional : /MSIE 6\.0/.test(navigator.userAgent)
}, s);
if ( !$.isFunction(s.conditional) ) {
var condition = s.conditional;
s.conditional = function() { return condition; };
}
var $iframe = $('<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+
'style="display:block;position:absolute;z-index:-1;"/>');
return this.each(function() {
var $this = $(this);
if ( s.conditional(this) === false ) { return; }
var existing = $this.children('iframe.bgiframe');
var $el = existing.length === 0 ? $iframe.clone() : existing;
$el.css({
'top': s.top == 'auto' ?
((parseInt($this.css('borderTopWidth'),10)||0)*-1)+'px' : prop(s.top),
'left': s.left == 'auto' ?
((parseInt($this.css('borderLeftWidth'),10)||0)*-1)+'px' : prop(s.left),
'width': s.width == 'auto' ? (this.offsetWidth + 'px') : prop(s.width),
'height': s.height == 'auto' ? (this.offsetHeight + 'px') : prop(s.height),
'opacity': s.opacity === true ? 0 : undefined
});
if ( existing.length === 0 ) {
$this.prepend($el);
}
});
};
$.fn.bgIframe = $.fn.bgiframe;
function prop(n) {
return n && n.constructor === Number ? n + 'px' : n;
}
}));
