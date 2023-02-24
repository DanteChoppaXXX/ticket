function sendRequest(keyword) {
if( $("search_input").value == keyword ) {
search_suggest.autoComplete(keyword);
}
}
function searchHistory() {
search_suggest.showSearchHistory();
}
function searchHitMessage(){
search_suggest.showHitMessage();
}
function updateInputText(input) {
if(input.value == '') {
input.value = search_text;
input.addClassName("placeholder");
}
}
function change_placeholder_color(input_id, placeholder_txt) {
var input = $(input_id);
if (input.value == placeholder_txt) {
input.removeClassName("placeholder");
input.value = "";
} else if(input.value == "") {
input.addClassName("placeholder");
input.value = placeholder_txt;
}
}
function initHiddenParam() {
$('search_id').name = "";
$('search_id').value = "";
}