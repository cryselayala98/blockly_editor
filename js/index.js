/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
    toolbox: toolbox,
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

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Insertando bloques personalizados */

Blockly.Blocks['prompt_for'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Prompt variable of ")
            .appendField(new Blockly.FieldDropdown([
                ["Integer", "Integer"],
                ["Double", "Double"],
                ["String", "String"],
                ["Character", "Character"],
                ["Boolean", "Boolean"]
            ]), "Data type")
            .appendField("type");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("https://www.w3schools.com/jsref/met_win_prompt.asp");
    }
};

Blockly.Blocks['create_variable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Declare")
            .appendField(new Blockly.FieldDropdown([
                ["Integer", "Integer"],
                ["Double", "Double"],
                ["Text", "Text"],
                ["Character", "Boolean"],
                ["Boolean", "Boolean"]
            ]), "NAME")
            .appendField("Variable");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);