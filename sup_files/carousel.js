
Slider = Class.create({
pauseDuration: 2500,
slideDuration: 300,
debug: false,
autoScroll: false,
initialize: function(container, nextButton, prevButton, divHtPan, itemsPerPage) {
this.debug = window.console && window.console.log && this.debug;
this.viewport = $(container);
this.slideElement = this.viewport.down(".sliderElement");
this.slideElement.absolutize();
this.sliderPanes = this.slideElement.select(".sliderPane");
this.currentPane = 0;
this.itemsPerPage = itemsPerPage;
this.paneWidth = this.sliderPanes.first().getWidth();
this.numPanes = this.sliderPanes.length;
this.animating = false;
this.viewport.setStyle({
height: divHtPan + "px"
});
this.slideElement.setStyle({
width: this.numPanes * this.paneWidth + "px"
});
if (this.debug) {
console.log("height: " + this.viewport.style.height);
console.log("width: " + this.slideElement.style.width);
}
this.slideElementLeft = this.slideElement.cloneNode(true);
this.slideElementLeft.setStyle({
left: -1 * this.numPanes * this.paneWidth + "px"
});
this.slideElementRight = this.slideElement.cloneNode(true);
this.slideElementRight.setStyle({
left: this.numPanes * this.paneWidth + "px"
});
this.slideElementLeft.getElementsBySelector('a').each(function(el) {
$(el).writeAttribute("tabindex", -1);
});
this.slideElementRight.getElementsBySelector('a').each(function(el) {
$(el).writeAttribute("tabindex", -1);
});
this.slidersContainer = Builder.node('div', { className: 'slidersContainer' }, [
this.slideElement,
this.slideElementLeft,
this.slideElementRight
]);
this.viewport.insert({ top: this.slidersContainer });
if (this.autoScroll) {
this.autoAnimateInterval = setInterval(this.next.bind(this), this.pauseDuration);
}
this.nextButton = nextButton ? $(nextButton) : this.viewport.down(".nextButton");
this.prevButton = prevButton ? $(prevButton) : this.viewport.down(".prevButton");
this.nextButton.observe('click', this.clickNext.bindAsEventListener(this));
this.prevButton.observe('click', this.clickPrev.bindAsEventListener(this));
if (this.debug) {
console.log("# Content Panes: " + this.numPanes);
console.log("Pane width: " + this.paneWidth);
console.log("Slider ready.");
}
},
clickNext: function() {
if (this.autoAnimateInterval) {
clearInterval(this.autoAnimateInterval);
}
this.next();
},
clickPrev: function() {
if (this.autoAnimateInterval) {
clearInterval(this.autoAnimateInterval);
}
this.prev();
},
next: function() {
if (this.animating) { return; }
if (this.currentPane + this.itemsPerPage <= (this.numPanes + this.itemsPerPage)) {
this.currentPane += this.itemsPerPage;
}
this.doAnimation();
if (this.debug) { console.log("Current Pane: " + this.currentPane); }
},
prev: function() {
if (this.animating) { return; }
if (this.currentPane - this.itemsPerPage > -1 - this.numPanes) {
this.currentPane -= this.itemsPerPage;
}
this.doAnimation();
if (this.debug) { console.log("Current Pane: " + this.currentPane); }
},
handleAnimationFinish: function() {
if (this.debug) {
console.log("afterFinish Callback");
}
if (this.currentPane >= (this.numPanes - (this.numPanes % this.itemsPerPage))) {
if (this.debug) { console.log("Off the end to the right... correcting overshoot."); }
this.currentPane -= this.numPanes;
}
else if (this.currentPane < (0 - (this.numPanes % this.itemsPerPage))) {
if (this.debug) { console.log("Off the end to the left... correcting overshoot."); }
this.currentPane += this.numPanes;
}
this.slidersContainer.setStyle({
left: this.currentPane * this.paneWidth * -1 + "px"
});
this.animating = false;
if (this.debug) {
console.log("Current Pane: " + this.currentPane);
}
},
doAnimation: function() {
if (this.animationObject) {
this.animationObject.cancel();
}
this.animating = true;
this.animationObject = new Effect.Move(
this.slidersContainer,
{
x: this.paneWidth * this.currentPane * -1,
mode: 'absolute',
afterFinish: this.handleAnimationFinish.bind(this),
duration: this.slideDuration / 1000
}
);
}
});
