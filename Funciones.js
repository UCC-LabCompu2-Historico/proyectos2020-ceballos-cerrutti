function Calcular_O_NoMetales(element, val) {

    if (element=="B" && (val==3)){

        OxidosNoMetal.Resultado.value = "B" + "2O" + val;
    }else{
        if (element=="C" && (val==2 || val==4)){

            OxidosNoMetal.Resultado.value = "C" + "2O" + val;
        }else{
            if (element=="N" && (val==3 || val==5)){

                OxidosNoMetal.Resultado.value = "N" + "2O" + val;
            }else{
                if (element=="F" && (val==1)){

                    OxidosNoMetal.Resultado.value = "F" + "2O" + val;
                }else{
                    if (element=="Si" && (val==4)){

                        OxidosNoMetal.Resultado.value = "Si" + "2O" + val;
                    }else{
                        if (element=="S" && (val==4 || val==6)){

                            OxidosNoMetal.Resultado.value = "S" + "2O" + val;
                        }else{
                            if (element=="Cl" && (val==1 || val==3 || val==5 || val==7)){

                                OxidosNoMetal.Resultado.value = "Cl" + "2O" + val;
                            }else{
                                if (element=="As" && (val==3 || val==5)){

                                    OxidosNoMetal.Resultado.value = "As" + "2O" + val;
                                }else{
                                    if (element=="Se" && (val==4 || val==6)){

                                        OxidosNoMetal.Resultado.value = "Se" + "2O" + val;
                                    }else{
                                        if (element=="Br" && (val==1 || val==3 || val==5 || val==7)){

                                            OxidosNoMetal.Resultado.value = "Br" + "2O" + val;
                                        }else{
                                            if (element=="Te" && (val==4 || val==6)){

                                                OxidosNoMetal.Resultado.value = "Te" + "2O" + val;
                                            }else{
                                                if (element=="I" && (val==1 || val==3 || val==5 || val==7)){

                                                    OxidosNoMetal.Resultado.value = "I" + "2O" + val;
                                                }else{
                                                    alert("Valencia Invalida")
                                                    OxidosNoMetal.Valencia=" ";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



function Calcular_O_Metales(element, val) {

    if (element=="H" && (val==1)){

        OxidosMetal.Resultado.value = "H" + "2O" + val;
    }else{
        if (element=="Li" && (val==1)){

            OxidosMetal.Resultado.value = "Li" + "2O" + val;
        }else{
            if (element=="Be" && (val==2)){

                OxidosMetal.Resultado.value = "Be" + "2O" + val;
            }else{
                if (element=="Na" && (val==1)){

                    OxidosMetal.Resultado.value = "Na" + "2O" + val;
                }else{
                    if (element=="Mg" && (val==2)){

                        OxidosMetal.Resultado.value = "Mg" + "2O" + val;
                    }else{
                        if (element=="Al" && (val==3)){

                            OxidosMetal.Resultado.value = "Al" + "2O" + val;
                        }else{
                            if (element=="K" && (val==1)){

                                OxidosMetal.Resultado.value = "K" + "2O" + val;
                            }else{
                                if (element=="Ca" && (val==2)){

                                    OxidosMetal.Resultado.value = "Ca" + "2O" + val;
                                }else{
                                    if (element=="Cr" && (val==2 || val==3)){

                                        OxidosMetal.Resultado.value = "Cr" + "2O" + val;
                                    }else{
                                        if (element=="Mn" && (val==2 || val==3)){

                                            OxidosMetal.Resultado.value = "Mn" + "2O" + val;
                                        }else{
                                            if (element=="Fe" && (val==2 || val==3)){

                                                OxidosMetal.Resultado.value = "Fe" + "2O" + val;
                                            }else{
                                                if (element=="Co" && (val==2 || val==3)){

                                                    OxidosMetal.Resultado.value = "Co" + "2O" + val;
                                                }else{
                                                    if (element=="Ni" && (val==2 || val==3)){

                                                        OxidosMetal.Resultado.value = "Ni" + "2O" + val;
                                                    }else{
                                                        if (element=="Cu" && (val==1 || val==2)){

                                                            OxidosMetal.Resultado.value = "Cu" + "2O" + val;
                                                        }else{
                                                            if (element=="Zn" && (val==2)){

                                                                OxidosMetal.Resultado.value = "Zn" + "2O" + val;
                                                            }else{
                                                                if (element=="Ag" && (val==1)){

                                                                    OxidosMetal.Resultado.value = "Ag" + "2O" + val;
                                                                }else{
                                                                    if (element=="Cs" && (val==1)){

                                                                        OxidosMetal.Resultado.value = "Cs" + "2O" + val;
                                                                    }else{
                                                                        if (element=="Ba" && (val==2)){

                                                                            OxidosMetal.Resultado.value = "Ba" + "2O" + val;
                                                                        }else{
                                                                            if (element=="Pt" && (val==2 || val==4)){

                                                                                OxidosMetal.Resultado.value = "Pt" + "2O" + val;
                                                                            }else{
                                                                                if (element=="Au" && (val==1 || val==3)){

                                                                                    OxidosMetal.Resultado.value = "Au" + "2O" + val;
                                                                                }else{
                                                                                    if (element=="Hg" && (val==1 || val==2)){

                                                                                        OxidosMetal.Resultado.value = "Hg" + "2O" + val;
                                                                                    }else{
                                                                                        if (element=="Pb" && (val==2 || val==4)){

                                                                                            OxidosMetal.Resultado.value = "Pb" + "2O" + val;
                                                                                        }else{
                                                                                            alert("Valencia Invalida")
                                                                                            OxidosMetal.Valencia=" ";
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}




function Calcular_H_NoMetales(element, val) {

    if (element=="C" && (val==-2)){

        HidrurosNoMetales.Resultado.value = "H" + "2C";
    }else{
        if (element=="S" && (val==-2)){

            HidrurosNoMetales.Resultado.value = "H" + "2S";
        }else{
            if (element=="Se" && (val==-2)){

                HidrurosNoMetales.Resultado.value = "H" + "2Se";
            }else{
                if (element=="Te" && (val==-2)){

                    HidrurosNoMetales.Resultado.value = "H" + "2Te";
                }else{
                    if (element=="N" && (val==-1)){

                        HidrurosNoMetales.Resultado.value = "H" + "N";
                    }else{
                        if (element=="F" && (val==-1)){

                            HidrurosNoMetales.Resultado.value = "H" + "F";
                        }else{
                            if (element=="Cl" && (val==-1)){

                                HidrurosNoMetales.Resultado.value = "H" + "Cl";
                            }else{
                                if (element=="Br" && (val==-1)){

                                    HidrurosNoMetales.Resultado.value = "H" + "Br";
                                }else{
                                    if (element=="I" && (val==-1)){

                                        HidrurosNoMetales.Resultado.value = "H" + "I";
                                    }else{
                                        alert("Valencia Invalida")
                                        HidrurosNoMetales.Valencia=" ";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



function Calcular_H_Metales(element, val) {

    if (element == "Li" && (val == 1)) {

        HidrurosMetales.Resultado.value = "Li" + "H";
    }else{
        if (element == "Na" && (val == 1)) {

            HidrurosMetales.Resultado.value = "Na" + "H";
        }else{
            if (element == "K" && (val == 1)) {

                HidrurosMetales.Resultado.value = "K" + "H";
            }else{
                if (element == "Rb" && (val == 1)) {

                    HidrurosMetales.Resultado.value = "Rb" + "H";
                }else{
                    if (element == "Cs" && (val == 1)) {

                        HidrurosMetales.Resultado.value = "Cs" + "H";
                    }
                }
            }
        }
    }
}
function Calcular_Sales (element, element, val) {
   if(element=="Cl" && (element=="Li" && (val==1))) {
       Sales.Resultado.value = "Li" + "Cl" + val;
   }
}


function DibujarImagen_NM() {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var img = new Image();
    img.src="imagenes/Tubos de ensayo - Azul.jpg";
}
function DibujarImagen_M() {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var img = new Image();
    img.src="imagenes/Tubos de ensayo - Lila.jpg";
}