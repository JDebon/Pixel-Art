var nombreColores = [
    'White',
    'LightYellow',
    'LemonChiffon',
    'LightGoldenrodYellow',
    'PapayaWhip',
    'Moccasin',
    'PeachPuff',
    'PaleGoldenrod',
    'Bisque',
    'NavajoWhite',
    'Wheat',
    'BurlyWood',
    'Tan',
    'Khaki',
    'Yellow',
    'Gold',
    'Orange',
    'DarkOrange',
    'OrangeRed',
    'Tomato',
    'Coral',
    'DarkSalmon',
    'LightSalmon',
    'LightCoral',
    'Salmon',
    'PaleVioletRed',
    'Pink',
    'LightPink',
    'HotPink',
    'DeepPink',
    'MediumVioletRed',
    'Crimson',
    'Red',
    'FireBrick',
    'DarkRed',
    'Maroon',
    'Brown',
    'Sienna',
    'SaddleBrown',
    'IndianRed',
    'RosyBrown',
    'SandyBrown',
    'Goldenrod',
    'DarkGoldenrod',
    'Peru',
    'Chocolate',
    'DarkKhaki',
    'DarkSeaGreen',
    'MediumAquaMarine',
    'MediumSeaGreen',
    'SeaGreen',
    'ForestGreen',
    'Green',
    'DarkGreen',
    'OliveDrab',
    'Olive',
    'DarkOliveGreen',
    'YellowGreen',
    'LawnGreen',
    'Chartreuse',
    'GreenYellow',
    'Lime',
    'SpringGreen',
    'LimeGreen',
    'LightGreen',
    'PaleGreen',
    'PaleTurquoise',
    'AquaMarine',
    'Cyan',
    'Turquoise',
    'MediumTurquoise',
    'DarkTurquoise',
    'DeepSkyBlue',
    'LightSeaGreen',
    'CadetBlue',
    'DarkCyan',
    'Teal',
    'Steelblue',
    'LightSteelBlue',
    'Honeydew',
    'LightCyan',
    'PowderBlue',
    'LightBlue',
    'SkyBlue',
    'LightSkyBlue',
    'DodgerBlue',
    'CornflowerBlue',
    'RoyalBlue',
    'SlateBlue',
    'MediumSlateBlue',
    'DarkSlateBlue',
    'Indigo',
    'Purple',
    'DarkMagenta',
    'Blue',
    'MediumBlue',
    'DarkBlue',
    'Navy',
    'Thistle',
    'Plum',
    'Violet',
    'Orchid',
    'DarkOrchid',
    'Fuchsia',
    'Magenta',
    'MediumOrchid',
    'BlueViolet',
    'DarkViolet',
    'DarkOrchid',
    'MediumPurple',
    'Lavender',
    'Gainsboro',
    'LightGray',
    'Silver',
    'DarkGray',
    'Gray',
    'DimGray',
    'LightSlateGray',
    'DarkSlateGray',
    'Black'
];
var paleta = $('#paleta')[0];
var grillaPixeles = $('#grilla-pixeles')[0];
var click = false;
// Variable para guardar el elemento 'color-personalizado, Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

$('document').ready(init);

function init() {
    generarPaleta();
    generarGrilla();
    detectarcCambioColor();
    eventosPixeles();
}

colorPersonalizado.addEventListener('change', function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    $('#indicador-de-color').css('background-color', colorActual);
});

function generarPaleta() {
    for (var i = 0; i < nombreColores.length; i++) {
        var color = nombreColores[i];
        var casillaPaleta = $('<div>').appendTo('#paleta');
        casillaPaleta.css('background-color', color);
        casillaPaleta.addClass('color-paleta');
    }
}

function generarGrilla() {
    for (var i = 0; i < 1750; i++) {
        var pixel = $('<div>').appendTo('#grilla-pixeles');
    }
}
function eventosPixeles() {
    $('#grilla-pixeles div').on('mouseup', detectarClick);
    $('#grilla-pixeles div').on('mousedown', detectarClick);
    $('#grilla-pixeles div').on('mousedown', PintarPixel);
    $('#borrar').on('click', limpiarGrilla);
}

function limpiarGrilla() {
    $('#grilla-pixeles div').animate({ 'background-color': '#ffffff' }, 1500);
}

function detectarClick() {
    if (event.type === 'mousedown') {
        click = true;
        pintarArrastre();
    }
    if (event.type === 'mouseup') {
        click = false;
        pintarArrastre();
    }
}

function pintarArrastre() {
    if (click === true) {
        $('#grilla-pixeles div').on('mouseenter', PintarPixel);
    }
    if (click === false) {
        $('#grilla-pixeles div').off('mouseenter');
    }
}
function eventoSuperHeroe() {
    //todo: Tratar de modular lo mas eficientemente posible la seleccion del superheroe
    $('#batman').on('click', cargarSuperheroe);
}
function detectarcCambioColor() {
    $('#paleta div').on('click', cambiarColor);
}

function cambiarColor() {
    var colorAhora = $(this).css('background-color');
    $('#indicador-de-color').css('background-color', colorAhora);
}

function PintarPixel() {
    //CAMBIAR NOMBRE VARIABLE COLORAHORA2
    var colorAhora2 = $('#indicador-de-color').css('background-color');
    $(this).css('background-color', colorAhora2);
}
