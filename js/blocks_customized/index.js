export function createBlocksCustomized() {

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

}