/*import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript'; // Or the generator of your choice
*/
//import './node_modules/blockly/python.js'; // Or the generator of your choice
//import * as Es from './node_modules/blockly/msg/es.js';
//importando desde npm


//inject Blockly into an empty div.
//blocly.inject(location, options)

console.log(Blockly);

var workspace = Blockly.inject('blocklyDiv', {

    toolbox: document.getElementById('toolbox'), //bloques disponiblespara el user
    collapse: true,
    comments: true,
    css: true, //by default it's true
    disable: false,
    grid: { //agregar una cuadrícula
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    horizontalLayout: false,
    //maxBlocks: 3, //by default it's infinity
    //maxInstances: //tipos de bloques y maxima cnt de bloques de cada tipo
    //media:
    move: {
        scrollbars: true,
        drag: true,
        wheel: false
    },
    oneBasedIndex: false, //strings desde el indice cero
    readOnly: false,
    scrollbars: true,
    sounds: true,
    //theme:
    //toolboxPosition: 'end' //by default it is 'start'
    trashcan: true,
    maxTrashcanContents: 10, //muestra el historial de elementos eliminados
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true
    },

    renderer: 'geras' //'zelos' //'thrasos'
});
let toolbox = document.getElementById('toolbox');
//para acceder a una categoría
//var category = toolbox.getToolboxItemById('categoryId');

//bloquear una categoría
//var category = toolbox.getToolboxItems()[0];
//category.setDisabled('true');

//agregando propiedades al custom personalizado
//me parece mejor porque agrego los bloques desde javascript y en el html solo muestro las categorías
/**
 * Construct the blocks required by the flyout for the colours category.
 * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
 * @return {!Array.<!Element>} Array of XML block elements.
 */

coloursFlyoutCallback = function(workspace) {
    // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
    //var colourList = myApplication.getPalette();
    var colourList = ['#4286f4', '#ef0447'];
    var xmlList = [];
    if (Blockly.Blocks['colour_picker']) {
        for (var i = 0; i < colourList.length; i++) {
            var blockText = '<block type="colour_picker">' +
                '<field name="COLOUR">' + colourList[i] + '</field>' +
                '</block>';
            var block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
        }
    }
    return xmlList;
};

workspace.registerToolboxCategoryCallback(
    'COLOUR_PALETTE', coloursFlyoutCallback);



function myUpdateFunction(event) {
    var code = Blockly.Python.workspaceToCode(workspace);
    //var code = Blockly.Java.workspaceToCode(workspace);
    document.getElementById('textarea').value = code;
}
workspace.addChangeListener(myUpdateFunction);