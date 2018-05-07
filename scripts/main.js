window.onload = function () {
  var content = $('.content');
  var logoHeight = $('.img').height();
  $('.saitMenu').height(content.height() + logoHeight);
  labelHeight = $('label').height + 10
  $('.inputContainer').height(labelHeight * 4)
 
  $('.inputContainerItem').click(function(){  
  var checkedInput = $("input:radio:checked");  
  if ($(checkedInput).size() > 0){
    $('.inputContainerItem').css("background-color","transparent")
    $('.inputContainerItem').each(function(){
      var thisInput = this.firstElementChild;
      if(thisInput.checked){
      $(this).css("background-color","#3D95EE")
      }})}})
}