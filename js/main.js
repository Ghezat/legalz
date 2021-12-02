const descrip1_civil = 'El abogado especialista en derecho civil trabaja a nivel legal con las relaciones y obligaciones personales, familiares y profesionales de los ciudadanos. ';
const descrip2_civil = 'El derecho civil engloba todo la materia sobre la libertad y su integridad como individuo, sus deberes y obliaciones dentro de la sociedad en que habita.';
const descrip3_civil = 'A nivel general, un abogado civil se dedica a las siguientes materias:';

const descrip1_penal = 'El abogado defensor penal es un profesional del derecho cuya función principal es defender y asesorar a personas físicas y jurídicas frente a un acto delictivo que suponga cualquier infracción del Código Penal.'   
const descrip2_penal = 'El derecho penal engloba el derecho penitenciario, defenza penal y multiples delitos como : financieros, sexuales, ambientales, contra personas y farmacéuticos.'  
const descrip3_penal = 'A nivel general, un abogado penalista se dedica a las siguientes materias:';

const descrip1_agrar = 'El derecho agrario o rural regula los intereses y actividades que tienen como base la explotación de la tierra, sea mediante la agricultura, la ganadería u otras industrias agropecuarias.'   
const descrip2_agrar = 'La ubicación del derecho agrario dentro de las grandes ramas del derecho ofrece dificultades, porque actualmente forma un complejo de normas de derecho privado y público. Evidentemente forma parte del derecho privado todo lo que se refiere a la propiedad rural y al dominio de los semovientesa las servidumbres rurales y a las variadas instituciones que nacen de la actividad agropecuaria (sociedades agrícolas, crédito y seguro agrario, explotación de los bosques). En cambio, son de derecho público las normas que se refieren a la Vialidad, a la policía sanitaria, a la regulación del uso de las aguas públicas, a la caza y la pesca, a la represión de las contravenciones, al régimen de los organismos encargados de la regulación, fiscalización y fomento de las industrias agropecuarias.'                                                                                                                                                                                                                                                                    
const descrip3_agrar = 'A nivel general, un abogado agrario se dedica a las siguientes materias:';

const descrip1_tribu = 'Los abogados tributarios tienen la capacidad jurídica necesaria para representar a sus clientes en todo tipo de procedimientos relacionados con las distintas administraciones.'   
const descrip2_tribu = 'Esta rama del Derecho podríamos decir que generalmente estudia cómo se obtienen los diferentes recursos para sufragar los costes del sistema público e impulsar de este modo el bien común de un país.'                                                                                                                                                                                                                                                                    
const descrip3_tribu = 'A nivel general, un abogado tributario se dedica a las siguientes materias:';

const descrip1_inqui = 'Los abogados en el area inmobiliaria fungue como defensor frente a situaciones de atropello a individuos, familias o empresas que arriendan o alquilan una propiedad, de igual forma a un casero o propietario donde se vea vulnerado sus derechos'   
const descrip2_inqui = 'Esta rama del Derecho abarca el sector inmobiliario publico y privado.'                                                                                                                                                                                                                                                                    
const descrip3_inqui = 'A nivel general, un abogado en el area de inquilinato se dedica a las siguientes materias:';

const descrip1_protf = 'El abogado que asiste en todo lo concerniente al menor y la familia es un defensor frente a situaciones de familias con problemas o necesidades afines como divorcios o tutelas de los hijos.'   
const descrip2_protf = 'Hemos unido ambas areas proteccion (del menor, la mujer y la familia).'                                                                                                                                                                                                                                                                    
const descrip3_protf = 'A nivel general, un abogado en el area de protección se dedica a las siguientes materias:';

const descrip1_mayti = 'El abogado que cubre y asiste estas areas esta capacitado para la defensa nacional e internacional fijado por el derecho maritimo como el derecho aereo(aereonautico) ambos, ya que una aeronave o nave puede surcar los mares (internacional) o en el caso de una aeronave el aire sobre una nacion (nación) o espacio internacional, el derecho terrestre abarca el derecho del transporte terrestre la soberania y protección de las tierras'   
const descrip2_mayti = 'Hemos unido trea areas Derecho marítimo, Derecho aereo y Derecho terrestre.'                                                                                                                                                                                                                                                                    
const descrip3_mayti = 'A nivel general, un abogado de derecho marítimo, areo y terrestre se dedica a las siguientes materias:';




const matriz = 
        [{area: 'Derecho Civil', materias : ['• Obligaciones y contratos.', '• Accidentes, indemnizaciones y reclamaciones.', '• Separaciones y divorcios, parejas de hecho.', '• Herencias y sucesiones.', '• Responsabilidad civil y profesional.', '• Derechos de Consumidores y usuarios.', '• Asesoramiento jurídico-legal.', '• Constitucion de Empresas.', '• Reclamaciones por daños morales, daño emergente y lucro cesante.']},
         {area: 'Derecho Penal', materias : ['• Delitos contra la vida e integridad de las personas.', '• Delitos contra la administración y seguridad pública.', '• Delitos contra el patrimonio.', '• Delitos económicos.', '• Delitos laborales.', '• Delitos sexuales.', '• Delitos contra la salud pública.', '• Delitos informáticos.']},
         {area : 'Derecho Agrario', materias : ['• La propiedad agraria (régimen de los arrendamientos y aparcerías rurales)', '• La propiedad de los semovientes (régimen de las marcas y señales)', '• Régimen legal de la colonización', '• La Vialidad y el tránsito rural', '• La defensa sanitaria de la producción agropecuaria,', '• El régimen de las asociaciones de agricultores y ganaderos', '• Los seguros y el crédito agrario', '• El derecho de aguas', '• El régimen jurídico de las diversas industrias agropecuarias en particular', '• La reglamentación de la caza y de la pesca']},
         {area : 'Derecho Tributario', materias : ['• Presentación de impuestos.' , '• Liquidaciones', '• Recursos.' ,'• Comunicaciones.' , '• Solicitudes.' , '• Consultas de expedientes.' , '• Alegaciones.' ,  '• Documentación.']},
         {area : 'Derecho Inmobiliario', materias : ['• Modificaciones y correcciones.', '• Extinción del derecho de la propiedad.','• Adquisiciones.','• Arrendamientos.','• Ventas.', '• Herencias.', '• Transmisiones de derecho de la propiedad.']},
         {area : 'Derecho Protección/familia', materias : ['• Asesoramiento jurídico sobre derecho de los menores.', '• Sistemas de protección del menor.', '• Situaciones de riesgo y de  desamparo.', '• Menores en acogimiento.', '• Tutelas y acogimiento del menor.', '• Privación patria potestad de los menores.', '• Separación y divorcio contencioso y de mutuo acuerdo.', '• Reclamaciones de pensión de alimentos y pensión compensatoria.', '• Capitulaciones matrimoniales.', '• Violencia de genero.']},   
         {area : 'Derecho Marítimo y Terreste', materias : ['• Documentación de los buques y aeronaves nacionales.', '• Contrato de fletamento', '• Responsabilidad en embarcaciones de recreo.', '• Los accidentes marítimos y aereos.', '• Los daños por abordaje.', '• Desastres ecologicos terrestres y maritimos', '• Tramites aduanales.', '• Resolucion de perdidas aduanales.', '• Explotacion de recursos minerales y pesca.', '• Violación al espacio maritimo, aero y terreste de la nacion.']}];  


         
function loadIndex(){
   load = document.getElementById('navIDInd').style.cssText = 'border-bottom: 4px solid #9e3a0e';
 }


function loadArea(){
   load = document.getElementById('navIDAre').style.cssText = 'border-bottom: 4px solid #9e3a0e';
   document.querySelector('.contenedorMayor').style.cssText = 'display : block; display : flex';
   document.querySelector('.contPreload').style.cssText = 'display : none'
   document.querySelector('.contenedorDerecho').style.cssText = 'display : block; display : flex'

}

function loadTeam(){
   todosTeam()
   load = document.getElementById('navIDTea').style.cssText = 'border-bottom: 4px solid #9e3a0e';
   document.querySelector('.contenedorMayor').style.cssText = 'display : block; display : flex';
   document.querySelector('.contPreload').style.cssText = 'display : none'
   document.querySelector('.contenedorDerecho').style.cssText = 'display : block; display : flex'
}

function loadContac(){
   document.querySelector('.contenedorMayor').style.cssText = 'display : block; display : flex';
   document.querySelector('.contPreload').style.cssText = 'display : none'
   document.querySelector('.contenedorDerecho').style.cssText = 'display : block; display : flex'
   load = document.getElementById('navIDCont').style.cssText = 'border-bottom: 4px solid #9e3a0e'; 
}


function civil(){
   area = document.getElementById('area').innerHTML = matriz[0].area;
   document.querySelector(".conteImgArea").style.cssText = 'display : none';
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
   materia10 = document.getElementById('materia10').innerHTML = " ";

   document.querySelector('.liCiv').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function penal(){
   area = document.getElementById('area').innerHTML = matriz[1].area;
   document.querySelector(".conteImgArea").style.cssText = 'display : none';
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
   materia9 = document.getElementById('materia9').innerHTML = " ";
   materia10 = document.getElementById('materia10').innerHTML = " ";

   document.querySelector('.liPen').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
}

function agrario(){

   area = document.getElementById('area').innerHTML = matriz[2].area;
   document.querySelector(".conteImgArea").style.cssText = 'display : none';
   descrip1 = document.getElementById('descrip1').innerHTML = descrip1_agrar;
   descrip2 = document.getElementById('descrip2').innerHTML = descrip2_agrar;
   descrip3 = document.getElementById('descrip3').innerHTML = descrip3_agrar;
   materia1 = document.getElementById('materia1').innerHTML = matriz[2].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[2].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[2].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[2].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[2].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[2].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[2].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = matriz[2].materias[7];
   materia9 = document.getElementById('materia9').innerHTML = matriz[2].materias[8];
   materia10 = document.getElementById('materia10').innerHTML = matriz[2].materias[9];
   
   document.querySelector('.liAgr').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function tributario(){
  
   area = document.getElementById('area').innerHTML = matriz[3].area;
   document.querySelector(".conteImgArea").style.cssText = 'display : none';
   descrip1 = document.getElementById('descrip1').innerHTML = descrip1_tribu;
   descrip2 = document.getElementById('descrip2').innerHTML = descrip2_tribu;
   descrip3 = document.getElementById('descrip3').innerHTML = descrip3_tribu;
   materia1 = document.getElementById('materia1').innerHTML = matriz[3].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[3].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[3].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[3].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[3].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[3].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[3].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = matriz[3].materias[7];
   materia9 = document.getElementById('materia9').innerHTML = " ";
   materia10 = document.getElementById('materia10').innerHTML = " ";
  
   document.querySelector('.liTri').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}


function inmobiliario(){
   
   area = document.getElementById('area').innerHTML = matriz[4].area;
   document.querySelector(".conteImgArea").style.cssText = 'display : none';
   descrip1 = document.getElementById('descrip1').innerHTML = descrip1_inqui;
   descrip2 = document.getElementById('descrip2').innerHTML = descrip2_inqui;
   descrip3 = document.getElementById('descrip3').innerHTML = descrip3_inqui;
   materia1 = document.getElementById('materia1').innerHTML = matriz[4].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[4].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[4].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[4].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[4].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[4].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[4].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = " ";
   materia9 = document.getElementById('materia9').innerHTML = " ";
   materia10 = document.getElementById('materia10').innerHTML = " ";

   document.querySelector('.liInq').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function proteccion(){
  
   area = document.getElementById('area').innerHTML = matriz[5].area;
   document.querySelector(".conteImgArea").style.cssText = 'display : none';
   descrip1 = document.getElementById('descrip1').innerHTML = descrip1_protf;
   descrip2 = document.getElementById('descrip2').innerHTML = descrip2_protf;
   descrip3 = document.getElementById('descrip3').innerHTML = descrip3_protf;
   materia1 = document.getElementById('materia1').innerHTML = matriz[5].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[5].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[5].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[5].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[5].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[5].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[5].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = matriz[5].materias[7];
   materia9 = document.getElementById('materia9').innerHTML = matriz[5].materias[8];
   materia10 = document.getElementById('materia10').innerHTML = matriz[5].materias[9];

   document.querySelector('.liPro').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMyt').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}

function marytierra(){
 
   area = document.getElementById('area').innerHTML = matriz[6].area;
   document.querySelector(".conteImgArea").style.cssText = 'display : none';
   descrip1 = document.getElementById('descrip1').innerHTML = descrip1_mayti;
   descrip2 = document.getElementById('descrip2').innerHTML = descrip2_mayti;
   descrip3 = document.getElementById('descrip3').innerHTML = descrip3_mayti;
   materia1 = document.getElementById('materia1').innerHTML = matriz[6].materias[0];
   materia2 = document.getElementById('materia2').innerHTML = matriz[6].materias[1];
   materia3 = document.getElementById('materia3').innerHTML = matriz[6].materias[2];
   materia4 = document.getElementById('materia4').innerHTML = matriz[6].materias[3];
   materia5 = document.getElementById('materia5').innerHTML = matriz[6].materias[4];
   materia6 = document.getElementById('materia6').innerHTML = matriz[6].materias[5];
   materia7 = document.getElementById('materia7').innerHTML = matriz[6].materias[6];
   materia8 = document.getElementById('materia8').innerHTML = matriz[6].materias[7];
   materia9 = document.getElementById('materia9').innerHTML = matriz[6].materias[8];
   materia10 = document.getElementById('materia10').innerHTML = matriz[6].materias[9];

   document.querySelector('.liMyt').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liPen').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liCiv').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAgr').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liPro').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liTri').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liInq').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

}



/*-------------team--------------*/

function todosTeam(){

   document.getElementById('area').innerHTML = "Nuestro equipo";
   document.querySelector('.contenedorDerecho').style.cssText = 'display : block; display : flex;'
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
  pe4.style.cssText = 'display: " ";'
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

   document.getElementById('area').innerHTML = matriz[2].area;
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
   document.querySelector('#perDescrip1').style.display = ""; 
 
 
  pe5p = document.querySelector('#perfil4')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip4').style.display = ""; 
 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip2').style.display = "" 

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'

  pe5p = document.querySelector('#perfil6')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip6').style.display = "" 


}

function tributarioTeam(){   

   document.getElementById('area').innerHTML = matriz[3].area;
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
   document.querySelector('#perDescrip1').style.display = ""; 
 
 
  pe5p = document.querySelector('#perfil4')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip4').style.display = ""; 

 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip3').style.display = "";


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: none;'

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip5').style.display = "";


  pe5p = document.querySelector('#perfil6')
  pe5p.style.cssText = 'display: none;'

}


function inmoviliarioTeam(){

   document.getElementById('area').innerHTML = matriz[4].area;
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
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip4').style.display = ""; 

 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip2').style.display = ""; 

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil6')
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip6').style.display = "" 


}



function proteccionTeam(){

   document.getElementById('area').innerHTML = matriz[5].area;
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
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip4').style.display = ""; 

 
  pe5p = document.querySelector('#perfil3')
  pe5p.style.cssText = 'display: none;'


  pe5p = document.querySelector('#perfil2')
  pe5p.style.cssText = 'display: none;'

  
  pe5p = document.querySelector('#perfil5')
  pe5p.style.cssText = 'display: none;'

  pe6p = document.querySelector('#perfil6')
  pe6p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip6').style.display = "" 

}




function marytierraTeam(){

   document.getElementById('area').innerHTML = matriz[6].area;
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
  pe5p.style.cssText = 'display: " ";'
  document.querySelector('#perDescrip4').style.display = ""; 

 
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



/*-------Contact--------*/

let januMens = 'Hola, soy Janury BabincZuk, por favor escribe de forma general la situacion o tu pregunta, que en breve te respondere. soy especialista en constitucion de empresas y defensa de derechos humanos. '
let celeMens = 'Hola, soy Celesvina Indriago, por favor escribe de forma general la situacion o tu pregunta, que en breve te respondere. soy especialista en constitucion de empresas y defensa de derechos humanos. '
let moreMens = 'Hola, soy Jose Argenis Moreno, por favor escribe de forma general la situacion o tu pregunta, que en breve te respondere. soy especialista en constitucion de empresas y defensa de derechos humanos. '
let joseMens = 'Hola, soy Jose Enrique Bianchi, hazme una breve reseña de tu causa en la fase que se encuentre tanto como : prepraratoria, juicio o ejecución. Gustosamente te atendere procurando brindar el mejor asesoramiento. '
let ybraMens = 'Hola; soy Ybrahin  Ybarra,  Abogado y Contador Público,  Especialista en Tributos, gracias por escribirme;   por favor formule su pregunta o requerimiento que a la brevedad le estaré contactando para orientarte y ofrecerle soluciones efectivas a su problema. '
let admiMens = 'Hola, soy el administrador del sitio, si deseas aparecer en legalz.link debes ser abogado legalmente licenciado en el territorio venezolano y aceptar las politicas del sitio.'

const msnGeneral = 'Al ingresar los datos (nombre y correo) y hacer clic en el botón "Enviar", usted proporciona su firma electrónica y su consentimiento para que el abogado pueda comunicarse con usted, proporcionandole información para el desarrollo de su defensa o caso.'

function janu(){

  document.querySelector('.loadIni').style.cssText = 'display : none';
  document.querySelector('.conteMedioContact').style.cssText = 'display : block ; display : flex';

  document.getElementById('idForm_Janu').style.cssText = 'display : block; display : flex';
  document.getElementById('idForm_Cele').style.cssText = 'display : none';
  document.getElementById('idForm_More').style.cssText = 'display : none';
  document.getElementById('idForm_Admi').style.cssText = 'display : none';
  document.getElementById('idForm_Jose').style.cssText = 'display : none';
  document.getElementById('idForm_Ybra').style.cssText = 'display : none';


   document.querySelector('.liJanu').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
   document.querySelector('.liCele').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liMore').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liJose').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liYbra').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
   document.querySelector('.liAdmi').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'

   document.querySelector('#menssPersonalJanu').innerHTML = januMens;
   


}

function cele(){

   document.querySelector('.loadIni').style.cssText = 'display : none';
   document.querySelector('.conteMedioContact').style.cssText = 'display : block ; display : flex';

   document.getElementById('idForm_Cele').style.cssText = 'display : block; display : flex';
   document.getElementById('idForm_Janu').style.cssText = 'display : none';
   document.getElementById('idForm_More').style.cssText = 'display : none';
   document.getElementById('idForm_Admi').style.cssText = 'display : none';
   document.getElementById('idForm_Jose').style.cssText = 'display : none';
   document.getElementById('idForm_Ybra').style.cssText = 'display : none';
   
 
    document.querySelector('.liCele').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
    document.querySelector('.liJanu').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liMore').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJose').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liYbra').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liAdmi').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
 
    document.querySelector('#menssPersonalCele').innerHTML = celeMens;
   
 }

 function more(){

   document.querySelector('.loadIni').style.cssText = 'display : none';
   document.querySelector('.conteMedioContact').style.cssText = 'display : block ; display : flex';

   document.getElementById('idForm_More').style.cssText = 'display : block; display : flex';
   document.getElementById('idForm_Janu').style.cssText = 'display : none';
   document.getElementById('idForm_Cele').style.cssText = 'display : none';
   document.getElementById('idForm_Admi').style.cssText = 'display : none';
   document.getElementById('idForm_Jose').style.cssText = 'display : none';
   document.getElementById('idForm_Ybra').style.cssText = 'display : none';
 
    document.querySelector('.liMore').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
    document.querySelector('.liCele').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJanu').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJose').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liYbra').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liAdmi').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
 
    
    document.querySelector('#menssPersonalMore').innerHTML = moreMens;
  
 }

 function jose(){

   document.querySelector('.loadIni').style.cssText = 'display : none';
   document.querySelector('.conteMedioContact').style.cssText = 'display : block ; display : flex';
 
   document.getElementById('idForm_Jose').style.cssText = 'display : block; display : flex';
   document.getElementById('idForm_Janu').style.cssText = 'display : none';
   document.getElementById('idForm_Cele').style.cssText = 'display : none';
   document.getElementById('idForm_Admi').style.cssText = 'display : none';
   document.getElementById('idForm_More').style.cssText = 'display : none';
   document.getElementById('idForm_Ybra').style.cssText = 'display : none';

    document.querySelector('.liJose').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
    document.querySelector('.liCele').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liMore').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJanu').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liYbra').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liAdmi').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
 
    document.querySelector('#menssPersonalJose').innerHTML = joseMens;

 }                             

 function ybra(){

   document.querySelector('.loadIni').style.cssText = 'display : none';
   document.querySelector('.conteMedioContact').style.cssText = 'display : block ; display : flex';

   document.getElementById('idForm_Ybra').style.cssText = 'display : block; display : flex';
   document.getElementById('idForm_Janu').style.cssText = 'display : none';
   document.getElementById('idForm_Cele').style.cssText = 'display : none';
   document.getElementById('idForm_More').style.cssText = 'display : none';
   document.getElementById('idForm_Admi').style.cssText = 'display : none';
   document.getElementById('idForm_Jose').style.cssText = 'display : none';
 
    document.querySelector('.liYbra').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
    document.querySelector('.liCele').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liMore').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJose').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJanu').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liAdmi').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
 
    document.querySelector('#menssPersonalYbra').innerHTML = ybraMens;
    
 }

 function admi(){

   document.querySelector('.loadIni').style.cssText = 'display : none';
   document.querySelector('.conteMedioContact').style.cssText = 'display : block ; display : flex';

   document.getElementById('idForm_Admi').style.cssText = 'display : block; display : flex';
   document.getElementById('idForm_Janu').style.cssText = 'display : none';
   document.getElementById('idForm_Cele').style.cssText = 'display : none';
   document.getElementById('idForm_More').style.cssText = 'display : none';
   document.getElementById('idForm_Ybra').style.cssText = 'display : none';
   document.getElementById('idForm_Jose').style.cssText = 'display : none';
 
    document.querySelector('.liAdmi').style.cssText = 'border-right: 10px solid #802a06; background-color: #9e3a0e;'
    document.querySelector('.liCele').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liMore').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJose').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liYbra').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
    document.querySelector('.liJanu').style.cssText = 'border-right: 0px solid #802a06; background-color: none;'
 
    document.querySelector('#menssPersonalAdmi').innerHTML = admiMens;
   
 }