export function define_panda_variable_blocks() {


    //  if (Blockly.Blocks['variables_get_panda'] && Blockly.Blocks['variables_set_panda']) {

    // Block for variable getter.
    Blockly.Blocks['variables_get_panda'] = {
        init: function() {
            this.appendDummyInput()
                .appendField('variable typed:')
                .appendField(new Blockly.FieldVariable(
                    "VAR_NAME", null, ['Panda'], 'Panda'), "FIELD_NAME");
            this.setOutput(true, 'Panda');
        }
    };


    // Block for variable setter.
    Blockly.Blocks['variables_set_panda'] = {
        init: function() {
            this.appendValueInput("NAME")
                .setCheck('Panda')
                .appendField("set")
                .appendField(new Blockly.FieldVariable(
                    "VAR_NAME", null, ['Panda'], 'Panda'), "FIELD_NAME")
                .appendField("to");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
        }
    };

    //   }
}