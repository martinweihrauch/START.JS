/**
 * Start.js framework for programming beginners
 * invented by Dr. Martin Weihrauch
 * 
 */

/*
    The first version of any HTML Element that we create here is the simple text.
    It should receive the text obviously that is about to be printed plus some simple stuff, which is optional
    The styling should also contain <p>, <h1>, etc
 */

var _htmlItems = {
    Text: {}
}

sj.Text = function (data){
    var that = this;
    //this.style.that = this;

    this.itemID = this.createItemID('Text');
    this.addToPage('<span id="'+this.itemID+'">'+data+'</span>');
    this.data = function(data){
        if (typeof data === 'undefined'){
            return $('#'+this.itemID).text();
        }
        else {
            $('#'+this.itemID).text(data);
        }
    }


}

sj.Text.prototype = new sj.__HTMLItemClass();


sj.TextField = function (label = "", value = ""){
    var that = this;
    this.style.that = this;
    this.itemID = this.createItemID('Textfield');
    this.addToPage('<span id="l_'+this.itemID+'">'+label+'</span><input id="'+this.itemID+'" type="text" value="'+value+'"/>');

}

sj.TextField.prototype = new sj.__HTMLItemClass();


sj.PasswordField = function(){
    var that = this;
    this.style.that = this;

}

sj.TextArea = function(){
    var that = this;
    this.style.that = this;

}


sj.Button = function(label){
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

sj.Button.prototype = new sj.__HTMLItemClass();

sj.SelectGroup = function(){
    var that = this;
    this.style.that = this;
}

sj.CheckboxGroup = function(){
    var that = this;
    this.style.that = this;
}

sj.RadioGroup = function(){
    var that = this;
    this.style.that = this;
}
