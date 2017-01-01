
//Parent class item for all elements to be represented for HTML
function __HTMLItemClass(){

    this.createItemID = function(type){
        return Page.createItemID(type);
    }

    //Return the element ID (not the CSS ID, but it may be the same)
    this.id = function(){
        return this.itemID;
    }

    this.data = function(data){
        if (typeof data === 'undefined'){
            return $('#'+this.itemID).val();
        }
        else {
            $('#'+this.itemID).val(data);
        }
    }

    this.label = function(label){
        if (typeof label === 'undefined'){
            return $('#l_'+this.itemID).text();
        }
        else {
            $('#l_'+this.itemID).text(label);
        }

    }

    this.style = {};
    this.style.add = function (cssclass){
        if($('#l_'+this.that.itemID).length){
            $('#l_'+this.that.itemID).addClass(cssclass);
        }
        $('#'+this.that.itemID).addClass(cssclass);

    }


    this.style = {
        remove : function(cssclass){
            $('#'+this.itemID).removeClass(cssclass);
        },
        removeAll : function(){
            $('#'+this.itemID).removeClass();
        }

    }

    //Add an item to the page element Page
    this.addToPage = function(htmlstring){
        if(Page.style=='block'){
            $('#'+Page.name).append('<div id="'+'w_'+this.itemID+'">'+htmlstring+'</div>');//Append it to the page (container)
        }
        else{
            $('#'+Page.name).append(htmlstring);//Append it to the page (container)
        }
    }

    //Removes an item from the page
    this.remove = function(){
        if(Page.style=='block'){
            $('#w_'+this.itemID).remove();//Remove it from the page (container)
        }
        else{
            $('#'+this.itemID).remove();//Remove it from the page (container)
        }
    }


    /*
     This function completely replaces the style of an element. Property can be an object or a string

     this.Style = function(property){
     if(typeof property === 'string'){

     }
     else if(typeof property === 'object'){

     }
     else return false;
     }
     */
    /* You can send something like box1.Style('color', '#000000'); as well as box1.Style({'color':'red', 'background-color':'blue'})
     */
    this.Style = function(property, value){
        if(typeof property === 'string' && (typeof value === 'string' || typeof value === 'number')){//Now we have e. g. "color", "#000000"
            var styleObject = {property : value};
            styleAddObject(styleObject);
        }
        else if (typeof property === "string" && typeof value === "undefined"){//This is only a stylestring, which has to be broken in parts
            if(property.indexOf(":")>=0){//If the string contains ":", this means that it is a long style string. Could be "color:red"

            }
            else{//Else it is written to only query a property, e. g. "color", we have to return the correct value

            }
        }
        else if (typeof property === "object"){//This is a styleobject, which can be passed directly

        }
        else if(typeof  property === "string" && typeof value === "undefined"){//This is to query which value a property has

        }
        else if (typeof property === "undefined" && typeof value === "undefined"){//Query the entire style

        }
        else return false;
    }
    //Clears all style
    this.Style.clear = function(){

    }
    function styleStringToObject(stylestring){

    }
    function styleObjectToString(stylestring){

    }
    function styleAddObject(styleobject){

    }
    function styleRemoveObject(styleobject){

    }
    function styleClearAll(){

    }

    //Updates the style. Parameter is object in the form of {'color':'red', 'width':'450px'}
    function updateStyle(styleObject){
        var stylestring = '';//This will be the string that goes into the style="..." attribute
        for (var key in Page.HTMLItems[this.itemID]['style']){
            console.log('key: '+key+' property: '+Page.HTMLItems[this.itemID]['style'][key]);
        }
    }


}



/**
 * Created by ThinkPad User on 31.12.14.
 */
