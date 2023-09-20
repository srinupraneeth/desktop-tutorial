var availablekeywords = [
    'javascript',
    'how to create a webpage',
    'what is data base',
    'what is an array',
    'how to open a link',
    'how to create a document',
    'what is a html',
];

const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById("#input-box");

  inputbox.onkeyup = function () {
    let result = [];
    let input = inputbox.value;
    if (input.length){
        result = availablekeywords.filter((keyword) => {
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        
    }
    display(result);

    if (!result.length){
        resultbox.innerHTML = '';
    }
  }

function display(result){
    const content = result.map((list) =>{
        return "<li onclick=selectInput(this)>" +list + "</li>";
    });

    resultbox.innerHTML= "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {

    inputbox.value = list.innerHTML;
    resultbox.innerHTML = '';
}