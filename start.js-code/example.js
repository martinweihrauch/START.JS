/**
 * Created by Dr. Martin Weihrauch on 08.12.14.
 */

var text2 = new sj.Text("Hallo Welt");
var text1 = new sj.Text('Hello world');
var input1 = new sj.TextField('Eingabe hier: ', 'hier');
var knopf = new sj.Button('Mich klicken');
knopf.action = function(){
    alert('Hi');
}

input1.style.add('toll klasse');
text1.data('Dast ist ein Text');
console.log('Der Text ist: '+text1.data());
console.log('Button heißt: '+knopf.label());
/*
for(var i=0; i<10; i++){
    var text2 = new Text('Hallo');
}
*/
