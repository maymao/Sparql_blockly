import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_where', {
    init: function() {
      this.appendDummyInput()
          .appendField("WHERE");
      this.appendStatementInput("CLASSES")
          .setCheck("Class")
          .appendField("classes");
      this.appendStatementInput("CONDITIONS")
          .setCheck("Condition")
          .appendField("conditions");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("Define classes and conditions for a SPARQL WHERE clause.");
      this.setHelpUrl("");
    }
  });