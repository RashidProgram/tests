 window.onload = function(){
   function testOver(){
    document.getElementById("question").innerHTML = "Вопросы закончились вы ответили на "+count+"/"+hount+"<br />чтоб вернуться нажмите на кнопку ";
    
  }
  function createObjectQuestions(questions,firstAnswer,secondAnswer,thirdAnswer,fourthAnwer, numberGoodAnswer){
	var ObjectQuestions = { 
		questions:questions,
		firstAnswer:firstAnswer,
		secondAnswer:secondAnswer,
		thirdAnswer:thirdAnswer,
		fourthAnwer:fourthAnwer,
		numberGoodAnswer:numberGoodAnswer
	};
	return ObjectQuestions

}
  function printQuestions(question){
    document.getElementById('question').innerHTML = question.questions;
	document.getElementById('ans1').innerHTML = question.firstAnswer;
	document.getElementById('ans2').innerHTML = question.secondAnswer;
	document.getElementById('ans3').innerHTML = question.thirdAnswer;
	document.getElementById('ans4').innerHTML = question.fourthAnwer;
}
  function isAnswerForQuestions(questions){
   var frm = document.getElementById("form");
    var found = false; 
    var value = '';
    console.log(frm+" "+frm.elements);
    for(var k = 0; k < frm.elements.radioInput.length; k++) {
        if (frm.elements.radioInput[k].checked) {
            found = true;
            value = frm.elements.radioInput[k].value;
            frm.elements.radioInput[k].checked = false;
            break;
        }
    }

  if (parseInt(value) == questions.numberGoodAnswer){
    count++;
  }
  }
  var b = document.getElementById("submit")
  var a = document.getElementById('python');
  a.onclick = function() {
      document.getElementById('trans').style.display = "none";
      document.getElementById('testDiv').style.display = "block";
      rand = Math.floor(Math.random() * pythonQuestions.length);
      printQuestions(pythonQuestions[rand]);
      return false;
  }

  b.onclick = function(){
      isAnswerForQuestions(pythonQuestions[rand])
      pythonQuestions.__proto__.slice(rand,1)
      if (pythonQuestions == []){
        testOver()
      }
      rand = Math.floor(Math.random() * pythonQuestions.length);
      printQuestions(pythonQuestions[rand]);
      console.log(pythonQuestions.length)
      return false;
  }

  var count = 0
var rand;
var pythonQuestions = new Array()
var w = createObjectQuestions("Где используется наследование:","object Math.__init__(lessons):","class Math(lessons):","class Math add lessons()","object Math(lessons):",2);
      pythonQuestions.push(w);
  w = createObjectQuestions("Где правильно построен конструктор","def init(me):","def create __init__","def __init__(me)","def __init__ add me",3);
   pythonQuestions.push(w);
   
     w = createObjectQuestions("Что будет выведенно в процессе работы следущей программы:<br />i=\"20\"<br />s=\"0\"<br />print(i+s)","20","исключение","\"200\"","\"20\"",3);
   pythonQuestions.push(w);
var hount = pythonQuestions.length

}
