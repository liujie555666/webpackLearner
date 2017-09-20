var cll=require('./call.js');
require('style-loader!css-loader!./style.css');
function demo(){
alert('你好 , webpack!!!!');
}
demo();
alert(cll.add(12,65));