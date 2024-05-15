import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_and', {
    init: function() {
      this.appendValueInput("OPERAND1")
          .setCheck(["Boolean", "Variable"])
      this.appendValueInput("OPERAND2")
          .setCheck(["Boolean", "Variable"])
          .appendField("AND");
      this.setOutput(true, "Boolean");
      this.setColour(510);
      this.setTooltip("Logical AND operation.");
      this.setHelpUrl("");
      this.setInputsInline(true);
    }
  });


block('sparql_or', {
    init: function() {
      this.appendValueInput("OPERAND1")
          .setCheck(["Boolean", "Variable"])
      this.appendValueInput("OPERAND2")
          .setCheck(["Boolean", "Variable"])
          .appendField("OR");
      this.setOutput(true, "Boolean");
      this.setColour(510);
      this.setTooltip("Logical OR operation.");
      this.setInputsInline(true);
      this.setHelpUrl("");
    }
  });
  
block('sparql_not', {
    init: function() {
      this.appendValueInput("OPERAND")
          .setCheck(["Boolean", "Variable"])
          .appendField("NOT");
      this.setOutput(true, "Boolean");
      this.setColour(510);
      this.setTooltip("Logical NOT operation.");
      this.setInputsInline(true);
      this.setHelpUrl("");
    }
  });
  


  