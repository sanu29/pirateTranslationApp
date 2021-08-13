var input = document.querySelector('#input');
var output = document.querySelector('#output');
var but = document.querySelector('.button');

function geturl(txtinput) {
    var serverURL = "https://api.funtranslations.com/translate/pirate.json"
    return(serverURL + "?" +"text=" + txtinput);
}

function myfunc() {
        var txtinput = input.value;
   
        var final_url = geturl(txtinput);
        
        fetch(final_url)
        .then(respose => respose.json())
        .then(json=>{
            var traslatedText = json.contents.translated;
            output.innerHTML = traslatedText; 
        })




}





but.addEventListener("click", myfunc)
