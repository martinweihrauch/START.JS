/**
 * Start.js framework for programming beginners
 * invented by
 * Martin Weihrauch
 * Smart In Media GmbH & Co. KG 2014
 */

/*
    The first version of any HTML Element that we create here is the simple text.
    It should receive the text obviously that is about to be printed plus some simple stuff, which is optional
    The styling should also contain <p>, <h1>, etc
 */

function Text(data){
    var that = this;
    //this.style.that = this;

    this.itemID = this.createItemID('Text');
    this.addToPage('<p id="'+this.itemID+'">'+data+'</p>');
    this.data = function(data){
        if (typeof data === 'undefined'){
            return $('#'+this.itemID).text();
        }
        else {
            $('#'+this.itemID).text(data);
        }
    }


}

Text.prototype = new __HTMLItemClass();


function TextField(label, value){
    var that = this;
    this.style.that = this;
    this.itemID = this.createItemID('Textfield');
    this.addToPage('<span id="l_'+this.itemID+'">'+label+'</span><input id="'+this.itemID+'" type="text" value="'+value+'"/>');

}



TextField.prototype = new __HTMLItemClass();


function PasswordField(){
    var that = this;
    this.style.that = this;

}

function TextArea(){
    var that = this;
    this.style.that = this;

}


function Button(label){
    var that = this;
    this.style.that = this;

    this.itemID = this.createItemID('Button');
    this.label = function(label){
        if (typeof label === 'undefined'){
            return $('#'+this.itemID).text();
        }
        else {
            $('#'+this.itemID).text(label);
        }
    }

    this.addToPage('<button id="'+this.itemID+'">'+label+'</button>');
    $("#"+this.itemID).on('click', function(){
        if(typeof that.action ==='undefined'){
            alert('error!');
        }
        else {
            that.action();
        }

    });


}

Button.prototype = new __HTMLItemClass();

function SelectGroup(){
    var that = this;
    this.style.that = this;

}

function CheckboxGroup(){
    var that = this;
    this.style.that = this;

}

function RadioGroup(){
    var that = this;
    this.style.that = this;

}




//$(document).ready(function(){


//});




