// connectors
import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_colon_back', {
    init: function() {
        this.appendDummyInput()
            .appendField(":");
        this.appendValueInput("COLON")
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Colon.");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
});

block('sparql_colon_front', {
    init: function() {
        this.appendValueInput("COLON")
        this.appendDummyInput()
            .appendField(":");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Colon.");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
});

block('sparql_colon', {
    init: function() {
        this.appendValueInput("COLON")
        this.appendDummyInput()
            .appendField(":");
        this.appendValueInput("COLON")
        this.appendValueInput("COLON")
            .appendField("variable name");
        this.setOutput(true, "String");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("for class properties.");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
});

block('sparql_braces', {
    init: function() {
        this.appendDummyInput()
            .appendField("{");

        this.appendStatementInput("PATTERN")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Group a set of triple patterns.");
        this.setHelpUrl("");
    }
    });
  
block('sparql_parentheses', {
    init: function() {
      this.appendValueInput("EXPRESSION")
          .setCheck(null)
          .appendField("(");
      this.appendDummyInput()
          .appendField(")");
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Group an expression.");
      this.setHelpUrl("");
    }
  });
  