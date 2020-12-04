//import './../node_modules/blockly/blockly.'
//import './../node_modules/blockly/msg/es.js'
//import './../node_modules/blockly/blocks_compressed.js'
import { define_panda_variable_blocks } from './typed_variables.js';
import { createBlocksCustomized } from './blocks_customized/index.js'

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks");


var options = {
    toolbox: workspaceBlocks,
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: 'start',
    css: true,
    media: 'https://blockly-demo.appspot.com/static/media/',
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true,
    grid: {
        spacing: 20,
        length: 1,
        colour: '#888',
        snap: false
    }
};

/* Inject your workspace */
var workspace = Blockly.inject('blocklyDiv', options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */


/* Insertando bloques personalizados */
createBlocksCustomized()


//agregando una variable typed "panda"
//var panda_button = document.getElementById("workspaceBlocks");

// register a callback for this type's button




//workspace.registerToolboxCategoryCallback('CREATE_TYPED_VARIABLE', createFlyout)


/*workspace.registerButtonCallback('panda', function() {
    Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'panda');
});*/


const createFlyout = function(workspace) {

    let xmlList = [];
    // Add your button and give it a callback name.

    const button = document.createElement('button');
    button.setAttribute('text', 'Create Typed Variable');
    button.setAttribute('callbackKey', 'Panda');

    workspace.registerButtonCallback('Panda', (button) => {
        Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'Panda');
    });

    xmlList.push(button);


    //Creando los bloques de getter y setter

    const blockList = Blockly.VariablesDynamic.flyoutCategoryBlocks(workspace);

    console.log(blockList);
    xmlList = xmlList.concat(blockList);

    /*   const get_panda = document.createElement(block);
       button.setAttribute('callbackKey', 'variables_get_panda');

       xmlList.push(get_panda);

       define_panda_variable_blocks();*/


    /*
        // This gets all the variables that the user creates and adds them to the
        // flyout.
        const blockList = Blockly.VariablesDynamic.flyoutCategoryBlocks(workspace);

        console.log("blocklist");
        console.log(blockList);
        xmlList = xmlList.concat(blockList);
        return xmlList;
    */
    return xmlList;
}

workspace.registerToolboxCategoryCallback('CREATE_TYPED_VARIABLE', createFlyout)

/*const typedVarModal = new TypedVariableModal(workspace, 'callbackName', [
    ["Integer", "Integer"],
    ["Double", "Double"],
    ["Text", "Text"],
    ["Boolean", "Boolean"]
])
typedVarModal.init();*/


/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);