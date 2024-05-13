import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_variable', {
    init: function() {
      this.appendDummyInput()
          .appendField("?")
          .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
      this.setPreviousStatement(true, "Variable");
      this.setNextStatement(true, "Variable");
      this.setColour(160);
      this.setTooltip("Enter a SPARQL variable name.");
      this.setHelpUrl(""); // 可以提供一个帮助链接
    }
  });
  
