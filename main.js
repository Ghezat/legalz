const descrip1_civil = 'El abogado especialista en derecho civil trabaja a nivel legal con las relaciones y obligaciones personales, familiares y profesionales de los ciudadanos. ';
const descrip2_civil = 'El derecho civil engloba todo la materia sobre la libertad y su integridad como individuo, sus deberes y obliaciones dentro de la sociedad en que habita.';
const descrip3_civil = 'A nivel general, un abogado civil se dedica a las siguientes materias:';

const descrip1_penal = 'El abogado defensor penal es un profesional del derecho cuya función principal es defender y asesorar a personas físicas y jurídicas frente a un acto delictivo que suponga cualquier infracción del Código Penal.'   
const descrip2_penal = 'El derecho penal engloba el derecho penitenciario, defenza penal y multiples delitos como : financieros, sexuales, ambientales, contra personas y farmacéuticos.'  
const descrip3_penal = 'A nivel general, un abogado penalista se dedica a las siguientes materias:';

const matriz = 
        [{area: 'Derecho civil', materias : ['• Obligaciones y contratos.', '• Accidentes, indemnizaciones y reclamaciones.', '• Separaciones y divorcios, parejas de hecho.', '• Herencias y sucesiones.', '• Responsabilidad civil y profesional.', '• Derechos de Consumidores y usuarios.', '• Asesoramiento jurídico-legal.', '• Constitucion de Empresas.', '• Reclamaciones por daños morales, daño emergente y lucro cesante.']},
         {area: 'Derecho penal', materias : ['• Delitos contra la vida e integridad de las personas.', '• Delitos contra la administración y seguridad pública.', '• Delitos contra el patrimonio.', '• Delitos económicos.', '• Delitos laborales.', '• Delitos sexuales.', '• Delitos contra la salud pública.', '• Delitos informáticos.']},
         {area : 'Derecho agrario', materias : [' ']},
         {area : 'Derecho proteccion', materias : [' ']}, 
         {area : 'Derecho inquilinato', materias : [' ']}]; 


const btnToggle = document.querySelector('.btn-Aside');


function loadIndex(){
   load = document.getElementById('navIDInd').style.cssText = 'border-bottom: 4px solid #9e3a0e';
 }

function loadArea(){
   load = document.getElementById('navIDAre').style.cssText = 'border-bottom: 4px solid #9e3a0e';
   document.querySelector('.contenedorDerecho').style.cssText = 'display : block'
}

function loadTeam(){
   equipoTeam()
   load = document.getElementById('navIDTea').style.cssText = 'border-bottom: 4px solid #9e3a0e'; 
}


function civil(){
   area = document.getElementById('area').innerHTML = matriz[0].area;
   descrip1 = document.getElementById('descrip1').innerHTML = descrip1_civil;
   descrip2 = document.getElementById('descrip2').innerHTML = descrip2_civil;
   descrip3 = document.getElementById('descrip3').innerHTML = descrip3_civil;
   materia1 = document.getElementById('materia1').innerHTML = matriz[0].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[0].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[0].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[0].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[0].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[0].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[0].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = matriz[0].materias[7];
   materia9 = document.getElementById('materia9').innerHTML = matriz[0].materias[8];

   document.querySelector('.liCiv').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function penal(){
   area = document.getElementById('area').innerHTML = matriz[1].area;
   descrip1 = document.getElementById('descrip1').innerHTML = descrip1_penal;
   descrip2 = document.getElementById('descrip2').innerHTML = descrip2_penal;
   descrip3 = document.getElementById('descrip3').innerHTML = descrip3_penal;
   materia1 = document.getElementById('materia1').innerHTML = matriz[1].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[1].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[1].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[1].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[1].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[1].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[1].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = matriz[1].materias[7];
   materia8 = document.getElementById('materia9').innerHTML = " ";

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

   document.getElementById('area').innerHTML = "Nuestro equipo";
   document.querySelector('.contenedorDerecho').style.cssText = 'display : block'
   document.querySelector('.liTea').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
  
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

  civilPeq = document.querySelector('#perfil6')
  civilPeq.style.cssText = 'display : " ";  width : auto'
  document.querySelector('#perDescrip6').style.display = "none"

}

function civilTeam(){

   document.getElementById('area').innerHTML = matriz[0].area;   
   document.querySelector('.liCiv').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

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
  pe3.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip3').style.display = ""  

  pe4 = document.querySelector('#perfil4')
  pe4.style.cssText = 'display: none;'
  document.querySelector('#perDescrip4').style.display = "" 

  pe5 = document.querySelector('#perfil5')
  pe5.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip5').style.display = "" 

  pe6 = document.querySelector('#perfil6')
  pe6.style.cssText = 'display: "none";'
  document.querySelector('#perDescrip6').style.display = "" 


}

function penalTeam(){

   document.getElementById('area').innerHTML = matriz[1].area;
   document.querySelector('.liPen').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

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


  pe6p = document.querySelector('#perfil6')
  pe6p.style.cssText = 'display: none;'
  


}


function agrarioTeam(){

   document.querySelector('.liAgr').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

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

function tributarioTeam(){   

   document.querySelector('.liTri').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

   civilT = document.querySelector('.conteDerDetailsTeam')
   civilT.style.cssText = 'flex-direction : column;'

   pe5p = document.querySelector('#perfil1')
   pe5p.style.cssText = 'display: " ";'
   document.querySelector('#perDescrip1').style.display = "" 
 
 
  pe5p = document.querySelector('#perfil4')
  pe5p.style.cssText = 'display: none;'

 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip3').style.display = ""


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: none;'

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil6')
  pe5p.style.cssText = 'display: none;'

}



function proteccionTeam(){

   document.querySelector('.liPro').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'


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

  pe5p = document.querySelector('#perfil6')
  pe5p.style.cssText = 'display: " ";'

}


function inquilinatoTeam(){

   document.querySelector('.liInq').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

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


  pe5p = document.querySelector('#perfil6')
  pe5p.style.cssText = 'display: none;'


}

function marytierraTeam(){

   document.querySelector('.liMyt').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liTea').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

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


  pe5p = document.querySelector('#perfil6')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip6').style.display = "" 





}