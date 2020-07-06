/**
 * Calcular los Oxidos - No Metalicos
 * @method Calcular_O_NoMetales
 * @param {string} nombre del elemento químico
 * @param {number} valencia del elemento químico
 * @return
 */
function Calcular_O_NoMetales(element, val) {
    var OxidosNoMetal;

    if (element=="B" && (val==3)){

        OxidosNoMetal= "B" + "2O" + val;
    }else if (element=="C" && (val==2 || val==4)){

        OxidosNoMetal= "C" + "2O" + val;
    }else if (element=="N" && (val==2 || val==4)){

        OxidosNoMetal= "N" + "2O" + val;
    }else if (element=="F" && (val==1)){

        OxidosNoMetal= "F" + "2O" + val;
    }else if (element=="Si" && (val==4)){

        OxidosNoMetal= "Si" + "2O" + val;
    }else if (element=="S" && (val==4 || val==6)){

        OxidosNoMetal= "S" + "2O" + val;
    }else if (element=="Cl" && (val==1 || val==3 || val==5 || val==7)){

        OxidosNoMetal= "Cl" + "2O" + val;
    }else if (element=="As" && (val==3 || val==5)){

        OxidosNoMetal= "As" + "2O" + val;
    }else if (element=="Se" && (val==4 || val==6)){

        OxidosNoMetal= "Se" + "2O" + val;
    }else if (element=="Br" && (val==1 || val==3 || val==5 || val==7)){

        OxidosNoMetal= "Br" + "2O" + val;
    }else if (element=="Te" && (val==4 || val==6)){

        OxidosNoMetal= "Te" + "2O" + val;
    }else if (element=="I" && (val==1 || val==3 || val==5 || val==7)){

        OxidosNoMetal= "I" + "2O" + val;
    }else{
        alert("Valencia Invalida")
        OxidosNoMetal.Valencia=" ";
    }
    document.getElementsByName("ResultadoONM")[0].value = OxidosNoMetal;
    DibujarImagen_ONM();
}


/**
 * Calcular los Oxidos - Metalicos
 * @method Calcular_O_Metales
 * @param {string} nombre del elemento químico
 * @param {number} valencia del elemento químico
 * @return
 */
function Calcular_O_Metales(element, val) {
    var OxidosMetal;

    if (element=="H" && (val==1)){

        OxidosMetal= "H" + "2O" + val;
    }else if (element=="Li" && (val==1)){

        OxidosMetal= "Li" + "2O" + val;
    }else if (element=="Be" && (val==2)){

        OxidosMetal= "Be" + "2O" + val;
    }else if (element=="Na" && (val==1)){

        OxidosMetal= "Na" + "2O" + val;
    }else if (element=="Mg" && (val==2)){

        OxidosMetal= "Mg" + "2O" + val;
    }else if (element=="Al" && (val==3)){

        OxidosMetal= "Al" + "2O" + val;
    }else if (element=="K" && (val==1)){

        OxidosMetal= "K" + "2O" + val;
    }else if (element=="Ca" && (val==2)){

        OxidosMetal= "Ca" + "2O" + val;
    }else if (element=="Cr" && (val==2 || val==3)){

        OxidosMetal= "Cr" + "2O" + val;
    }else if (element=="Mn" && (val==2 || val==3)){

        OxidosMetal= "Mn" + "2O" + val;
    }else if (element=="Fe" && (val==2 || val==3)){

        OxidosMetal= "Fe" + "2O" + val;
    }else if (element=="Co" && (val==2 || val==3)){

        OxidosMetal= "Co" + "2O" + val;
    }else if (element=="Ni" && (val==2 || val==3)){

        OxidosMetal= "Ni" + "2O" + val;
    }else if (element=="Cu" && (val==1 || val==2)){

        OxidosMetal= "Cu" + "2O" + val;
    }else if (element=="Zn" && (val==2)){

        OxidosMetal= "Zn" + "2O" + val;
    }else if (element=="Ag" && (val==1)){

        OxidosMetal= "Ag" + "2O" + val;
    }else if (element=="Cs" && (val==1)){

        OxidosMetal= "Cs" + "2O" + val;
    }else if (element=="Ba" && (val==2)){

        OxidosMetal= "Ba" + "2O" + val;
    }else if (element=="Pt" && (val==2 || val==4)){

        OxidosMetal= "Pt" + "2O" + val;
    }else if (element=="Au" && (val==1 || val==3)){

        OxidosMetal= "Au" + "2O" + val;
    }else if (element=="Hg" && (val==1 || val==2)){

        OxidosMetal= "Hg" + "2O" + val;
    }else if (element=="Pb" && (val==2 || val==4)){

        OxidosMetal= "Pb" + "2O" + val;
    }else{
        alert("Valencia Invalida")
        OxidosMetal.Valencia=" ";
    }
    document.getElementsByName("ResultadoOM")[0].value = OxidosMetal;
    DibujarImagen_OM();
}



/**
 * Calcular los Hidruros - No Metalicos
 * @method Calcular_H_NoMetales
 * @param {string} nombre del elemento químico
 * @param {number} valencia del elemento químico
 * @return
 */
function Calcular_H_NoMetales(element, val) {
    var HidrurosNoMetales;

    if (element=="C" && (val==-2)){

        HidrurosNoMetales= "H" + "2C";
    }else if (element=="S" && (val==-2)){

        HidrurosNoMetales= "H" + "2S";
    }else if (element=="Se" && (val==-2)){

        HidrurosNoMetales= "H" + "2Se";
    }else if (element=="Te" && (val==-2)){

        HidrurosNoMetales= "H" + "2Te";
    }else if (element=="N" && (val==-1)){

        HidrurosNoMetales= "H" + "N";
    }else if (element=="F" && (val==-1)){

        HidrurosNoMetales= "H" + "F";
    }else if (element=="Cl" && (val==-1)){

        HidrurosNoMetales= "H" + "Cl";
    }else if (element=="Br" && (val==-1)){

        HidrurosNoMetales= "H" + "Br";
    }else if (element=="I" && (val==-1)){

        HidrurosNoMetales= "H" + "I";
    }else{
        alert("Valencia Invalida")
        HidrurosNoMetales.Valencia=" ";
    }
    document.getElementsByName("ResultadoHNM")[0].value = HidrurosNoMetales;
    DibujarImagen_HNM();
}



/**
 * Calcular los Hidruros - Metalicos
 * @method Calcular_H_Metales
 * @param {string} nombre del elemento químico
 * @param {number} valencia del elemento químico
 * @return
 */
function Calcular_H_Metales(element, val) {
    var HidrurosMetales;

    if (element == "Li" && (val == 1)) {

        HidrurosMetales= "Li" + "H";
    }else if (element == "Na" && (val == 1)) {

        HidrurosMetales= "Na" + "H";
    }else if (element == "K" && (val == 1)) {

        HidrurosMetales= "K" + "H";
    }else if (element == "Rb" && (val == 1)) {

        HidrurosMetales= "Rb" + "H";
    }else if (element == "Cs" && (val == 1)) {

        HidrurosMetales= "Cs" + "H";
    }else{
        alert("Valencia Invalida")
        HidrurosMetales.Valencia=" ";
    }
    document.getElementsByName("ResultadoHM")[0].value = HidrurosMetales;
    DibujarImagen_HM();
}



/**
 * Calcular Sales Binarias
 * @method Calcular_Sales
 * @param {string} nombre del elemento químico (No Metal)
 * @param {string} nombre del elemento químico (Metal)
 * @param {number} valencia del elemento químico (Metal)
 * @return
 */
function Calcular_Sales (element1, element2, val) {
    var Sales;

    if(element1=="Cl" && (element2=="Li" && (val==1))) {
        Sales = "Li" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Na" && (val==1))) {
        Sales = "Na" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Mg" && (val==2))) {
        Sales = "Mg" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Al" && (val==3))) {
        Sales = "Al" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="K" && (val==1))) {
        Sales = "K" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Ca" && (val==2))) {
        Sales = "Ca" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Fe" && (val==2 || val==3))) {
        Sales = "Fe" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Ni" && (val==2 || val==3))) {
        Sales = "Ni" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Cu" && (val==1 || val==2))) {
        Sales = "Cu" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Zn" && (val==2))) {
        Sales = "Zn" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Ag" && (val==1))) {
        Sales = "Ag" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Cs" && (val==1))) {
        Sales = "Cs" + "Cl" + val;
    } else if(element1=="Cl" && (element2=="Ba" && (val==2))) {
        Sales = "Ba" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Au" && (val==1 || val==3))) {
        Sales = "Au" + "Cl" + val;
    }else if(element1=="Cl" && (element2=="Pb" && (val==2 || val==4))) {
        Sales = "Pb" + "Cl" + val;
    }if(element1=="Br" && (element2=="Li" && (val==1))) {
        Sales = "Li" + "Br" + val;
    }else if(element1=="Br" && (element2=="Na" && (val==1))) {
        Sales = "Na" + "Br" + val;
    }else if(element1=="Br" && (element2=="Mg" && (val==2))) {
        Sales = "Mg" + "Br" + val;
    }else if(element1=="Br" && (element2=="Al" && (val==3))) {
        Sales = "Al" + "Br" + val;
    }else if(element1=="Br" && (element2=="K" && (val==1))) {
        Sales = "K" + "Br" + val;
    }else if(element1=="Br" && (element2=="Ca" && (val==2))) {
        Sales = "Ca" + "Br" + val;
    }else if(element1=="Br" && (element2=="Fe" && (val==2 || val==3))) {
        Sales = "Fe" + "Br" + val;
    }else if(element1=="Br" && (element2=="Ni" && (val==2 || val==3))) {
        Sales = "Ni" + "Br" + val;
    }else if(element1=="Br" && (element2=="Cu" && (val==1 || val==2))) {
        Sales = "Cu" + "Br" + val;
    }else if(element1=="Br" && (element2=="Zn" && (val==2))) {
        Sales = "Zn" + "Br" + val;
    }else if(element1=="Br" && (element2=="Ag" && (val==1))) {
        Sales = "Ag" + "Br" + val;
    }else if(element1=="Br" && (element2=="Cs" && (val==1))) {
        Sales = "Cs" + "Br" + val;
    } else if(element1=="Br" && (element2=="Ba" && (val==2))) {
        Sales = "Ba" + "Br" + val;
    }else if(element1=="Br" && (element2=="Au" && (val==1 || val==3))) {
        Sales = "Au" + "Br" + val;
    }else if(element1=="Br" && (element2=="Pb" && (val==2 || val==4))) {
        Sales = "Pb" + "Br" + val;
    }else if(element1=="I" && (element2=="Li" && (val==1))) {
        Sales = "Li" + "I" + val;
    }else if(element1=="I" && (element2=="Na" && (val==1))) {
        Sales = "Na" + "I" + val;
    }else if(element1=="I" && (element2=="Mg" && (val==2))) {
        Sales = "Mg" + "I" + val;
    }else if(element1=="I" && (element2=="Al" && (val==3))) {
        Sales = "Al" + "I" + val;
    }else if(element1=="I" && (element2=="K" && (val==1))) {
        Sales = "K" + "I" + val;
    }else if(element1=="I" && (element2=="Ca" && (val==2))) {
        Sales = "Ca" + "I" + val;
    }else if(element1=="I" && (element2=="Fe" && (val==2 || val==3))) {
        Sales = "Fe" + "I" + val;
    }else if(element1=="I" && (element2=="Ni" && (val==2 || val==3))) {
        Sales = "Ni" + "I" + val;
    }else if(element1=="I" && (element2=="Cu" && (val==1 || val==2))) {
        Sales = "Cu" + "I" + val;
    }else if(element1=="I" && (element2=="Zn" && (val==2))) {
        Sales = "Zn" + "I" + val;
    }else if(element1=="I" && (element2=="Ag" && (val==1))) {
        Sales = "Ag" + "I" + val;
    }else if(element1=="I" && (element2=="Cs" && (val==1))) {
        Sales = "Cs" + "I" + val;
    } else if(element1=="I" && (element2=="Ba" && (val==2))) {
        Sales = "Ba" + "I" + val;
    }else if(element1=="I" && (element2=="Au" && (val==1 || val==3))) {
        Sales = "Au" + "I" + val;
    }else if(element1=="I" && (element2=="Pb" && (val==2 || val==4))) {
        Sales = "Pb" + "I" + val;
    }else{
        alert("Valencia Invalida")
        Sales.Valencia=" ";
    }
    document.getElementsByName("ResultadoSal")[0].value = Sales;
    DibujarImagen_Sal();
}



/**
 * Dibuja en el canvas la imagen de un tubo de ensayo con un Oxido No Metalico
 * @method DibujarImagen_ONM
 * @param {string} -
 * @param {number} -
 * @return
 */
function DibujarImagen_ONM() {
    var canvas = document.getElementById(elementid = "myCanvasO");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var xMax = canvas.width;
    var yMax = canvas.height;
    var posicionX=20;
    var posicionY=10;

    var img = new Image();
    img.src="imagenes/Tubos Azul.png";

    img.onload = function () {
        ctx.drawImage(img, x=posicionX, y=posicionY, 250, 130);
    }
}

/**
 * Dibuja en el canvas la imagen de un tubo de ensayo con un Oxido Metalico
 * @method DibujarImagen_OM
 * @param {string} -
 * @param {number} -
 * @return
 */
function DibujarImagen_OM() {
    var canvas = document.getElementById(elementid = "myCanvasO");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var xMax = canvas.width;
    var yMax = canvas.height;
    var posicionX=20;
    var posicionY=10;

    var img = new Image();
    img.src="imagenes/Tubos Amarillo.png";

    img.onload = function () {
        ctx.drawImage(img, x=posicionX, y=posicionY, 250, 130);
    }
}

/**
 * Dibuja en el canvas la imagen de un tubo de ensayo con un Hidruro No Metalico
 * @method DibujarImagen_HNM
 * @param {string} -
 * @param {number} -
 * @return
 */
function DibujarImagen_HNM() {
    var canvas = document.getElementById(elementid = "myCanvasH");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var xMax = canvas.width;
    var yMax = canvas.height;
    var posicionX=20;
    var posicionY=10;

    var img = new Image();
    img.src="imagenes/Tubos Verde.png";

    img.onload = function () {
        ctx.drawImage(img, x=posicionX, y=posicionY, 250, 130);
    }
}

/**
 * Dibuja en el canvas la imagen de un tubo de ensayo con un Hidruro Metalico
 * @method DibujarImagen_HM
 * @param {string} -
 * @param {number} -
 * @return
 */
function DibujarImagen_HM() {
    var canvas = document.getElementById(elementid = "myCanvasH");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var xMax = canvas.width;
    var yMax = canvas.height;
    var posicionX=20;
    var posicionY=10;

    var img = new Image();
    img.src="imagenes/Tubos Rojo.png";

    img.onload = function () {
        ctx.drawImage(img, x=posicionX, y=posicionY, 250, 130);
    }
}

/**
 * Dibuja en el canvas la imagen de un tubo de ensayo con una Sal Binaria
 * @method DibujarImagen_Sal
 * @param {string} -
 * @param {number} -
 * @return
 */
function DibujarImagen_Sal() {
    var canvas = document.getElementById(elementid = "myCanvasSal");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var xMax = canvas.width;
    var yMax = canvas.height;
    var posicionX=20;
    var posicionY=10;

    var img = new Image();
    img.src="imagenes/Tubos Lila.png";

    img.onload = function () {
        ctx.drawImage(img, x=posicionX, y=posicionY, 250, 130);
    }
}




/**
 * Anima una reaccion en un tubo dentro de la pagina de Creditos
 * @method AnimarReaccion
 * @param {string} -
 * @param {number} -
 * @return
 */
var y1=0;
var dy1=1;
function AnimarReaccion(){
    var canvas = document.getElementById(elementid = "myCanvasAnimacion");
    var ctx = canvas.getContext("2d");

    var img1 = new Image();
    img1.src="imagenes/ParaAnimacion 11.jpg";

    var img2 = new Image();
    img2.src="imagenes/ParaAnimacion 22.jpg";

    var img3 = new Image();
    img3.src="imagenes/ParaAnimacion 33.jpg";

    var img4 = new Image();
    img4.src="imagenes/ParaAnimacion 44.jpg";

    var img5 = new Image();
    img5.src="imagenes/ParaAnimacion 55.jpg";

    var img6 = new Image();
    img6.src="imagenes/ParaAnimacion 66.jpg";

    if(y1<10){
        img1.onload = function(){
            ctx.drawImage(img1, dx= 210, dy= 10,90, 120);
        }
    }
    if(y1>=10 && y1<20){
        img1.onload = function(){
            ctx.drawImage(img2, dx= 210, dy= 10,90, 120);
        }
    }
    if(y1>=20 && y1<30){
        img1.onload = function(){
            ctx.drawImage(img3, dx= 210, dy=10,90, 120);
        }
    }
    if(y1>=30 && y1<40){
        img1.onload = function(){
            ctx.drawImage(img4, dx= 210, dy=10,90, 120);
        }
    }
    if(y1>=40 && y1<50){
        img1.onload = function(){
            ctx.drawImage(img5, dx= 210, dy=10,90, 120);
        }
    }
    if(y1>=50 && y1<60){
        img1.onload = function(){
            ctx.drawImage(img6, dx= 210, dy=10,90, 120);
        }
    }
    y1+=dy1;
    if(y1>60){
        y1=0;
    }
}