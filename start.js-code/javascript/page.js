/**
 * Created by ThinkPad User on 31.12.14.
 */
/*
 *   The pageClass is used to administer and keep track of all the elements which are registered on the specific page
 */



function __pageClass(name){
    this.name = name;
    this.HTMLItems    = {}; //Array, which will store all informations about the item IDs as objects
    //this.wrapperIDs = new Object(); //Will store all informations about the wrapper IDs of the respective
    $('body').append('<div id="'+name+'"></div>');
    var itemIDCount     = 0;
    //var wrapperIDCount  = 0;
    this.createItemID = function(type){
        itemIDCount++;
        var newItemID = "startjs_ID_"+"_"+this.name+"_"+itemIDCount;
        this.HTMLItems[newItemID] = {
            'ItemID'    : newItemID,
            'type'      : type//,
            //'style'     : {'color':'#000000'}
        }
        return newItemID;
    }

}

var Page = new __pageClass('startjs_page1');
Page.style = 'block';

