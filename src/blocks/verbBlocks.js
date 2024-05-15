import Blockly from 'blockly';
import { block } from '../core/blocks.js';

Blockly.Blocks['sparql_union'] = {
    init: function() {
      this.appendStatementInput("PATTERN1")
          .setCheck(null)
          .appendField("UNION {");
      this.appendDummyInput()
          .appendField("}");
      this.appendStatementInput("PATTERN2")
          .setCheck(null)
          .appendField("UNION {");
      this.appendDummyInput()
          .appendField("}");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("Union of patterns.");
      this.setHelpUrl("");
    }
  };
  