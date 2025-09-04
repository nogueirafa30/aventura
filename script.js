const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button =>){
  button.addeventlistener('click',function(){
  const atual = document.quarySelector('.ativo');
  const proximoPasso = 'passo' + this.getAttribute('date-proximo');

  atual.classList.remove('ativo')
  document.getElementById(proximoPasso).classList.add('ativo')
 } )
} )
