function insertChar(char){
    document.querySelector('.inputdisplay').value=document.querySelector('.inputdisplay').value+char;
}
    function clearall() {
    document.querySelector('.inputdisplay').value = "";
}function deleteChar() {
    let currentValue=document.querySelector('.inputdisplay').value;
    document.querySelector('.inputdisplay').value=currentValue.substring(0,currentValue.length-1);
}
function result(){
    let currentValue=document.querySelector('.inputdisplay').value;
        document.querySelector('.inputdisplay').value=(eval(currentValue));
}
