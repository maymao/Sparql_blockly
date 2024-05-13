import Blockly from 'blockly';
import { block } from '../core/blocks.js';
  
block('sparql_select', {
    init: function() {
      this.appendDummyInput()
          .appendField("SELECT");
      this.appendStatementInput("VARIABLES")
          .setCheck("Variable")
          .appendField("variables");
      this.appendStatementInput("WHERE")
          .setCheck(null)
          .appendField("WHERE");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Perform a SPARQL select query.");
      this.setHelpUrl(""); // 可以提供一个帮助链接
    }
  });
