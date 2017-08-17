document.addEventListener('DOMContentLoaded', function () {

  var clickThis = document.querySelector('button.switch.on');
  var pageBody = document.querySelector('body');
  var text = document.querySelector('h1.status');

  clickThis.addEventListener('click', function(){
    if (clickThis.className === 'switch on'){
      clickThis.className = 'switch off';
      pageBody.className = 'dark';
      text.innerText = 'Who done did this?';
    } else if (clickThis.className === 'switch off') {
      clickThis.className = 'switch on';
      pageBody.className = 'light'
      text.innerText = 'Why so bright???';
    }
  })

})
