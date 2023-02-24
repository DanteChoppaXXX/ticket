
( function() {
jQuery.parseJSON = function(jsonToParse){
return JSON.parse(jsonToParse);
};
jQuery.fn.bind = function(event_name, handler) {
return jQuery(this).on(event_name, handler);
};
jQuery.fn.unbind = function(event_name) {
return jQuery(this).off(event_name);
};
jQuery.fn.click = function(handler){
if (handler){
return jQuery(this).on("click", handler);
}
else{
return jQuery(this).trigger("click");
}
};
jQuery.fn.keypress = function(handler){
if (handler){
return jQuery(this).on("keypress", handler);
}
else{
return jQuery(this).trigger("keypress");
}
};
jQuery.fn.mousedown = function(handler){
if (handler){
return jQuery(this).on("mousedown", handler);
}
else{
return jQuery(this).trigger("mousedown");
}
};
jQuery.fn.mouseenter = function(handler){
if (handler){
return jQuery(this).on("mouseenter", handler);
}
else{
return jQuery(this).trigger("mouseenter");
}
};
jQuery.fn.resize = function(handler){
if (handler){
return jQuery(this).on("resize", handler);
}
else{
return jQuery(this).trigger("resize");
}
};
jQuery.fn.focus = function(handler){
if (handler){
return jQuery(this).on("focus", handler);
}
else{
return jQuery(this).trigger("focus");
}
};
jQuery.fn.blur = function(handler){
if (handler){
return jQuery(this).on("blur", handler);
}
else{
return jQuery(this).trigger("blur");
}
};
jQuery.delegate = function(selector, event_name, handler) {
return jQuery(selector).on(event_name, selector, null, handler);
};
jQuery.fn.delegate = function(selector, event_name, handler) {
return jQuery(this).on(event_name, selector, null, handler);
};
jQuery.fn.undelegate = function(selector, event_name, handler) {
return jQuery(selector).off(event_name, selector, handler);
};
var ajaxOriginal = jQuery.ajax;
jQuery.ajax = function(url, options){
var jqXHR = ajaxOriginal(url, options);
return {
error: function(){
jqXHR.fail.apply(jQuery, arguments);
return jqXHR;
},
success: function(){
jqXHR.done.apply(jQuery, arguments);
return jqXHR;
},
complete: function(){
jqXHR.always.apply(jQuery, arguments);
return jqXHR;
},
abort: function(){
jqXHR.abort.apply(jQuery, arguments);
return jqXHR;
},
always: function(){
jqXHR.always.apply(jQuery, arguments);
return jqXHR;
},
catch: function(){
jqXHR.catch.apply(jQuery, arguments);
return jqXHR;
},
done: function(){
jqXHR.done.apply(jQuery, arguments);
return jqXHR;
},
fail: function(){
jqXHR.fail.apply(jQuery, arguments);
return jqXHR;
},
getAllResponseHeaders: function(){
jqXHR.getAllResponseHeaders.apply(jQuery, arguments);
return jqXHR;
},
getResponseHeader: function(){
jqXHR.getResponseHeader.apply(jQuery, arguments);
return jqXHR;
},
overrideMimeType: function(){
jqXHR.overrideMimeType.apply(jQuery, arguments);
return jqXHR;
},
pipe: function(){
jqXHR.pipe.apply(jQuery, arguments);
return jqXHR;
},
progress: function(){
jqXHR.progress.apply(jQuery, arguments);
return jqXHR;
},
promise: function(){
jqXHR.promise.apply(jQuery, arguments);
return jqXHR;
},
readyState: function(){
return jqXHR.readyState;
},
setRequestHeader: function(){
jqXHR.setRequestHeader.apply(jQuery, arguments);
return jqXHR;
},
state: function(){
jqXHR.state.apply(jQuery, arguments);
return jqXHR;
},
statusCode: function(){
jqXHR.statusCode.apply(jQuery, arguments);
return jqXHR;
},
then: function(){
jqXHR.then.apply(jQuery, arguments);
return jqXHR;
}
}
};
jQuery.isNaN = function(obj){
var rdigit = /\d/;
return obj == null || !rdigit.test( obj ) || isNaN( obj );
};
jQuery.fn.die = function(eventType, handler){
return jQuery(this).off(eventType, this, handler);
};
jQuery.fn.size = function(){
return jQuery(this).length;
};
jQuery.fn.live = function(events, data, handler){
return jQuery(this).on(events, null, data, handler);
};
jQuery.fn.hover = function(handlerIn, handlerOut){
if(!handlerOut){
handlerOut = handlerIn;
}
return jQuery(this).on("mouseenter", handlerIn.bind(this)).on("mouseleave", handlerOut.bind(this));
};
jQuery.fn.mouseover = function(handler){
if (handler){
return jQuery(this).on("mouseover", handler);
}
else{
return jQuery(this).trigger("mouseover");
}
};
var load_function = jQuery.fn.load;
jQuery.fn.load = function(param1){
if (typeof(param1) === "undefined") {
return jQuery(this).trigger("load");
} else if(typeof(param1) === "function"){
return jQuery(this).on("load", param1);
}
else{
return load_function.apply(this, arguments);
}
};
jQuery.fn.mouseout = function(handler){
if (handler){
return jQuery(this).on("mouseout", handler);
}
else{
return jQuery(this).trigger("mouseout");
}
};
jQuery.fn.unique = function(array) {
return jQuery(this).uniqueSort(array);
};
jQuery.fn.keyup = function(handler){
if (handler){
return jQuery(this).on("keyup", handler);
}
else{
return jQuery(this).trigger("keyup");
}
};
jQuery.fn.keydown = function(handler){
if (handler){
return jQuery(this).on("keydown", handler);
}
else{
return jQuery(this).trigger("keydown");
}
};
jQuery.fn.submit = function(handler){
if (handler){
return jQuery(this).on("submit", handler);
}
else{
return jQuery(this).trigger("submit");
}
};
jQuery.browser = function(){
var ua = window.navigator.userAgent;
var msiePresent = ua.indexOf('MSIE ');
var trident = ua.indexOf('Trident/');
var edge = ua.indexOf('Edge/');
var msie = msiePresent > -1 || trident > -1 || edge > -1;
var version = undefined;
var opera = false;
var mozilla = false;
var webkit = false;
if (msiePresent > 0) {
version = parseInt(ua.substring(msiePresent + 5, ua.indexOf('.', msiePresent)), 10);
}
if (trident > 0) {
var rv = ua.indexOf('rv:');
version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
}
if (edge > 0) {
version = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
}
var M = ua.match(/(opera|chrome|safari|firefox(?=\/))\/?\s*(\d+)/i) || [];
if(M[1]=== 'Chrome'){
webkit = true;
}
else if(M[1] === 'Firefox'){
mozilla = true;
}
else if(M[1] === 'Opera'){
opera = true;
}
version = M[2];
return {
msie: msie,
webkit: webkit,
mozilla: mozilla,
opera: opera,
version: version
}
}.call()
})();
