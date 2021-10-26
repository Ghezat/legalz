const matriz = [{area: 'derecho penal', descrip1: 'esto es una breve descripcion del area penal ', accountability : ['janury', 'celesvine']},
          {area: 'derecho civil', descrip1: 'El abogado especialista en derecho civil trabaja a nivel legal con las relaciones y obligaciones personales, familiares y profesionales de los ciudadanos. ', descrip2 : 'El derecho civil engloba todo la materia sobre la libertad y su integridad como individuo, sus deberes y obliaciones dentro de la sociedad que habita.', descrip3 : 'A nivel general, un abogado civil se dedica a las siguientes materias:', materias : ['• Obligaciones y contratos.', '• Accidentes, indemnizaciones y reclamaciones', '• Separaciones y divorcios, parejas de hecho.', '• Herencias y sucesiones.', '• Responsabilidad civil y profesional.', '• Derechos de Consumidores y usuarios', '• Asesoramiento jurídico-legal.', '• Constitucion de Empresas', '• Reclamaciones por daños morales, daño emergente y lucro cesante.']  ,accountability : ['ibrahim', 'janury']},
          {area : 'derecho agrario', descrip1: 'esta es una breve descripcion de lo concerniente al area agrario', accountability: ['enrique','janury','celesvine']},
          {area : 'derecho proteccion', descripcion: 'esta es una breve descripcion de lo concerniente al area proteccion', accountability: ['enrique','janury','celesvine']}, 
          {area : 'derecho inquilinato', descripcion: 'esta es una breve descripcion de lo concerniente al area inquilinato', accountability: ['enrique','janury']}] 


const btnToggle = document.querySelector('.btn-Aside');
/*
btnToggle.addEventListener('click' , ()=> {
   document.getElementById('conteIzq').classList.toggle('active');
})
*/

function loadIndex(){
   load = document.getElementById('navIDInd').style.cssText = 'border-bottom: 8px solid #9e3a0e';
 }

function loadArea(){
   load = document.getElementById('navIDAre').style.cssText = 'border-bottom: 8px solid #9e3a0e';
}

function loadTeam(){
   equipoTeam()
   load = document.getElementById('navIDTea').style.cssText = 'border-bottom: 8px solid #9e3a0e';
   
}


function civil(){
   console.log(matriz[1])
   area = document.getElementById('area').innerHTML = matriz[1].area;
   descrip1 = document.getElementById('descrip1').innerHTML = matriz[1].descrip1;
   descrip2 = document.getElementById('descrip2').innerHTML = matriz[1].descrip2;
   descrip3 = document.getElementById('descrip3').innerHTML = matriz[1].descrip3;
   materia1 = document.getElementById('materia1').innerHTML = matriz[1].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[1].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[1].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[1].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[1].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[1].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[1].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = matriz[1].materias[7];
   materia9 = document.getElementById('materia9').innerHTML = matriz[1].materias[8];

   document.querySelector('.liCiv').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function penal(){
   console.log(matriz[0])
   area = document.getElementById('area').innerHTML = matriz[0].area;
   descrip1 = document.getElementById('descrip1').innerHTML = matriz[0].descrip1;
   document.querySelector('.liPen').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
}

function agrario(){
   console.log(matriz[2])
   area = document.getElementById('area').innerHTML = matriz[2].area;
   descrip = document.getElementById('descrip1').innerHTML = matriz[2].descripcion;
   document.querySelector('.liAgr').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function proteccion(){
   console.log(matriz[3])
   area = document.getElementById('area').innerHTML = matriz[3].area;
   descrip = document.getElementById('descrip1').innerHTML = matriz[2].descripcion;
   document.querySelector('.liPro').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function inquilinato(){
   console.log(matriz[4])
   area = document.getElementById('area').innerHTML = matriz[4].area;
   descrip = document.getElementById('descrip1').innerHTML = matriz[2].descripcion;
   document.querySelector('.liInq').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}


/*-------------team--------------*/

function equipoTeam(){

   document.querySelector('.liTea').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
  
  const ciT = document.querySelector('.conteDerDetailsTeam')
  ciT.style.cssText = 'display : flex '; 


  civilPeq = document.querySelector('#perfil1')
  civilPeq.style.cssText = 'display : " "; width : auto;'
  document.querySelector('#perDescrip1').style.display = "none" 

  civilPeq = document.querySelector('#perfil2')
  civilPeq.style.cssText = 'display : " ";  width : auto'
  document.querySelector('#perDescrip2').style.display = "none"

  civilPeq = document.querySelector('#perfil3')
  civilPeq.style.cssText = 'display : " ";  width : auto'
  document.querySelector('#perDescrip3').style.display = "none" 
  
  civilPeq = document.querySelector('#perfil4')
  civilPeq.style.cssText = 'display : " ";  width : auto'
  document.querySelector('#perDescrip4').style.display = "none"

  civilPeq = document.querySelector('#perfil5')
  civilPeq.style.cssText = 'display : " ";  width : auto'
  document.querySelector('#perDescrip5').style.display = "none"

}

function civilTeam(){

   document.querySelector('.liCiv').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

  civilT = document.querySelector('.conteDerDetailsTeam')
  civilT.style.cssText = 'flex-direction : column;'

  civilPe1 = document.querySelector('.per_img')
  civilPe1.style.cssText = 'width: 100px, border: 2px solid red' 

  
  pe5p = document.querySelector('#perfil1')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip1').style.display = "" 

  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: none;'
  document.querySelector('#perDescrip2').style.display = "" 

  pe3 = document.querySelector('#perfil3')
  pe3.style.cssText = 'display: none;'
  document.querySelector('#perDescrip3').style.display = ""  

  pe4 = document.querySelector('#perfil4')
  pe4.style.cssText = 'display: none;'
  document.querySelector('#perDescrip4').style.display = "" 

  pe5 = document.querySelector('#perfil5')
  pe5.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip5').style.display = "" 


}

function penalTeam(){

   document.querySelector('.liPen').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

   civilT = document.querySelector('.conteDerDetailsTeam')
   civilT.style.cssText = 'flex-direction : column;'

  pe5p = document.querySelector('#perfil4')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip4').style.display = "" 

  pe5p = document.querySelector('#perfil1')
  pe5p.style.cssText = 'display: none;'
  

  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip3').style.display = "" 


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip2').style.display = "" 

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'
  


}


function agrarioTeam(){

   document.querySelector('.liAgr').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

   civilT = document.querySelector('.conteDerDetailsTeam')
   civilT.style.cssText = 'flex-direction : column;'

   pe5p = document.querySelector('#perfil1')
   pe5p.style.cssText = 'display: " ";'
   document.querySelector('#perDescrip1').style.display = "" 
 
 
  pe5p = document.querySelector('#perfil4')
  pe5p.style.cssText = 'display: none;'

 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: none;'

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'


}


function proteccionTeam(){

   document.querySelector('.liPro').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

   civilT = document.querySelector('.conteDerDetailsTeam')
   civilT.style.cssText = 'flex-direction : column;'

   pe5p = document.querySelector('#perfil1')
   pe5p.style.cssText = 'display: " ";'
   document.querySelector('#perDescrip1').style.display = "" 
 
 
  pe5p = document.querySelector('#perfil4')
  pe5p.style.cssText = 'display: none;'

 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: none;'

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'


}


function inquilinatoTeam(){

   document.querySelector('.liInq').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

   civilT = document.querySelector('.conteDerDetailsTeam')
   civilT.style.cssText = 'flex-direction : column;'

   pe5p = document.querySelector('#perfil1')
   pe5p.style.cssText = 'display: " ";'
   document.querySelector('#perDescrip1').style.display = "" 
 
 
  pe5p = document.querySelector('#perfil4')
  pe5p.style.cssText = 'display: none;'

 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: none;'

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'


}

