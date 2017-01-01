/**
 * Created by ThinkPad User on 31.12.14.
 */
function SJ(){
    this.debconsole = function(msg){
        console.log(msg);
    }

}

function sj(){}
sj.prototype = new SJ();
