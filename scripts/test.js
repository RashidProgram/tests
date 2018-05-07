$(document).ready(function () {
  function createCirls(sizeArray) {
    var cirlsContainer = document.getElementById("containerForShowingCirle");
    var i;
    for (i = 1; i <= sizeArray; i++) {
      var elementId = 'cirleForShowCorrectAnswer' + i;
      var elem = document.createElement('div');
      elem.setAttribute("id", elementId);
      elem.setAttribute('class', 'cirleForShowCorrectAnswer');
      cirlsContainer.appendChild(elem);
    }
  }
  var counterForShowAnswerForQuestions = 1;
  var counterQuestions = 0;
  var inputContainer = $('.radioInput');
  inputContainer.click(function () {
    $('#submit').removeClass('unactive');
  })

  function randomInteger(min, max, arra) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    while (arra.indexOf(rand) != -1) {
      rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
    }
    arra.push(rand);
    return rand;
  }

  function testOver() {
    var qwe = $('#choiceTest')
    qwe.css("display","none");
    qwe = $('#resultTest')
    qwe.css("display","block");
    qwe = $("#testDiv")
      qwe.css("display","none");
  }

  function createObjectQuestions(questions, firstAnswer, secondAnswer, thirdAnswer, fourthAnwer, numberGoodAnswer) {
    var ObjectQuestions = {
      questions: questions,
      firstAnswer: firstAnswer,
      secondAnswer: secondAnswer,
      thirdAnswer: thirdAnswer,
      fourthAnwer: fourthAnwer,
      numberGoodAnswer: numberGoodAnswer
    };
    return ObjectQuestions;

  }

  function printQuestions(question) {
    function printAnswer() {
      var randomPrint = randomInteger(0, 3, myArray);
      var selector = '.inputContainerItem:eq(' + randomPrint + ")";
      var elem = $(selector);
      randomPrint = randomInteger(0, 3, thirdArray)
      $("input", elem).attr('value', randomPrint + 1)
      $("label", elem).html(arrayForAnswersPrint[randomPrint])
    }
    $('#question').html(question.questions);
    var arrayForAnswersPrint = [question.firstAnswer, question.secondAnswer, question.thirdAnswer, question.fourthAnwer];
    printAnswer();
    printAnswer();
    printAnswer();
    printAnswer();
    myArray = [];
    thirdArray = [];
  }

  function isAnswerForQuestions(questions) {
    var selectorForShowAnswer = "#cirleForShowCorrectAnswer" + counterForShowAnswerForQuestions;
    var frm = $("input:radio:checked");
    if (frm.size() == 0) {
      return false;
    }
    var value = frm.val();  
    if (parseInt(value) == questions.numberGoodAnswer) {
      count++;
      $(selectorForShowAnswer).css("background-color", '#39CC08');
      counterForShowAnswerForQuestions++;
    } else {
      $(selectorForShowAnswer).css('background-color', '#E00');
      counterForShowAnswerForQuestions++;
    }
    frm.removeAttr('checked');
    return true;
  }
  var b = $("#submit");
  var but = $("#choice");

  but.click(function (e) {
    $('#choiceTest').css("display","none");
    $('#resultTest').css("display","none");
    $("#testDiv").css("display","flex");
    rand = randomInteger(0, questionsArray.length - 1, numbers);
    printQuestions(questionsArray[rand]);
    createCirls(questionsArray.length);
  })

  function getQuestions(arr, array2) {
    for (var u = 0; u < arr.length; u++) {
      array2.push(createObjectQuestions(arr[u][0], arr[u][1], arr[u][2], arr[u][3], arr[u][4], arr[u][5]));
    }
  }

  b.click(function (e) {
    e.preventDefault();
    var isCheck = isAnswerForQuestions(questionsArray[rand]);
    if (!isCheck) {
      return false;
    }
    if (numbers.length == questionsArray.length) {
      testOver();
      return;
    }
    rand = randomInteger(0, questionsArray.length - 1, numbers);
    printQuestions(questionsArray[rand]);
    $('#submit').addClass('unactive');
    $('.inputContainerItem').css("background-color", "transparent");
  })
  var myArray = new Array();
  var numbers = new Array();
  var thirdArray = new Array();
  var count = 0;
  var questionsArray = new Array();
  getQuestions([["Что делает сочетание клавиш ctrl+c", "Вырезать", "Копировать", "Вставить", "Отменить", 2], ["Как вызвать командную строку", "ctrl+e", "windows+r", "alt+ctrl+f", "alt+windows", 2], ["Какую кнопку называют super", "alt", "ctrl", "shift", "windows", 4], ["Что сделать?", "поиграть", "покушать", "попрыгать", "похвастаться", 2], ["Какая клавиша делает букву заглавной?", "enter", "shift", "ctrl", "alt", 2]], questionsArray);
  var hount = questionsArray.length;
  var rand; 
})