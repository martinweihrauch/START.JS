/**
 * Created by Dr. Martin Weihrauch
 */
/*
 *   The pageClass is used to administrate and keep track of all the elements which are registered on the specific page
 */

sj.__Page = function(name){
    this.name = name;
    this.style = "block";
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

sj.Page = new sj.__Page("page1");
sj.Page.style=='non'
