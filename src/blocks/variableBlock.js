import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_variable_property', {
    init: function() {
      this.appendDummyInput("VARIABLE")
          .appendField("?")
          .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
      this.appendStatementInput("PROPERTY")
      this.setPreviousStatement(true, "Variable");
      this.setNextStatement(true, "Variable");
      this.setColour(160);
      this.setTooltip("Use for class property block, first input refers to classname, connected by properties. ");
      this.setHelpUrl(""); 
      this.setInputsInline(true);
      this.setOutput(true, "Variable");
    }
  });

block('sparql_variable_select', {
  init: function() {
    this.appendDummyInput("VARIABLE")
        .appendField("?")
        .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
    this.setPreviousStatement(true, "Variable");
    this.setNextStatement(true, "Variable");
    this.setColour(160);
    this.setOutput(true, "Variable");
    this.setTooltip("Use for select/class block, indicate properties selected.");
    this.setHelpUrl(""); 
    this.setInputsInline(true);
  }
});

  block('sparql_variable_belong', {
    init: function() {
      this.appendDummyInput("VARIABLE")
          .appendField(new Blockly.FieldTextInput("property name"), "VARIABLE");
      this.setColour(360);
      this.setOutput(true, "Variable");
      this.setTooltip("belong.");
      this.setHelpUrl(""); 
      this.setInputsInline(true);
    }
  });

  block('sparql_variable_general', {
    init: function() {
      this.appendDummyInput("VARIABLE")
          .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
      this.setColour(360);
      this.setOutput(true, "Variable");
      this.setTooltip("general.");
      this.setHelpUrl(""); 
      this.setInputsInline(true);
    }
  });

  

  
