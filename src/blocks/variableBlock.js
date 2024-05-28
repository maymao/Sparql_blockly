import Blockly from 'blockly';
import { block } from '../core/blocks.js';

// not in use
block('sparql_*', {
  init: function() {
    this.appendDummyInput("SYMBOL")
        .appendField("*")
    this.setColour(260);
    this.setOutput(true, "Variable");
  }
});

block('sparql_properties_in_class', {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck("Label")
    this.setPreviousStatement(true, "Property");
    this.setNextStatement(true, "Property");
    this.setColour(160);
    this.setTooltip("Connector. Use for Class with Property block.");
  }
});

block('sparql_variable_type', {
  init: function() {
    this.appendDummyInput("TYPE1")
        .appendField(new Blockly.FieldTextInput(" "), "VARIABLE1");
    this.appendValueInput("TYPE2")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(" "), "VARIABLE2");
    this.setColour(160);
    this.setTooltip("Type variable block, :_. Use for Class Property block.");
    this.setOutput(true, "Label");
    this.setInputsInline(true);
  }
});

block('sparql_variable_select', {
  init: function() {
    this.appendValueInput("NEXT_VARIABLE")
        .appendField("?")
        .appendField(new Blockly.FieldTextInput("var"), "VARIABLE");
    this.setColour(80);
    this.setOutput(true, "VARIABLE");
    this.setTooltip("Use for select/class block, indicate properties selected. ?_");
  }
});

block('sparql_variable_typename', {
  init: function() {
    this.appendDummyInput("VARIABLE")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("Typename"), "VARIABLE");
    this.setColour(360);
    this.setOutput(true, "VARIABLE");
    this.setTooltip("Type name in property block.");
    this.setHelpUrl(""); 
    this.setInputsInline(true);
  }
});

block('sparql_variable_varname', {
  init: function() {
    this.appendValueInput("TYPE")
        .setCheck("Label")
        .appendField("?")
        .appendField(new Blockly.FieldTextInput("varname"), "VARIABLE");
    this.setColour(360);
    this.setOutput(true, "VARIABLE");
    this.setTooltip("Variable name in property block.");
  }
});

block('sparql_bind', {
  init: function() {
    this.appendValueInput("EXPRESSION")
        .setCheck(null)
        .appendField("BIND");
    this.appendDummyInput()
        .appendField("AS")
        .appendField(new Blockly.FieldTextInput("newVar"), "VARIABLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
});

block('sparql_as', {
  init: function() {
    this.appendValueInput('VARIABLE1')
        .setCheck(['VARIABLE', 'Math']);
    this.appendDummyInput()
        .appendField("AS")
        .appendField(new Blockly.FieldTextInput("newVar"), "VARIABLE2");
    this.appendValueInput("NEXT_VARIABLE")
        .setCheck(null);
    this.setOutput(true, "VARIABLE");
    this.setColour(160);
    this.setInputsInline(true);
  }
});