import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_*', {
  init: function() {
    this.appendDummyInput("SYMBOL")
        .appendField("*")
    this.setColour(260);
    this.setOutput(true, "Variable");
  }
});

block('sparql_class_line', {
  init: function() {
    this.appendValueInput("INPUT1")
    this.appendValueInput("INPUT2")
    this.appendValueInput("INPUT3")
    this.setPreviousStatement(true, "Variable");
    this.setNextStatement(true, "Variable");
    this.setColour(160);
    this.setTooltip("3 inputs in a line. Use for Class Property block.");
  }
});

block('sparql_properties_in_class', {
  init: function() {
    this.appendValueInput("INPUT1")
    this.appendValueInput("INPUT2")
    this.setPreviousStatement(true, "Variable");
    this.setNextStatement(true, "Variable");
    this.setColour(160);
    this.setTooltip("2 inputs in a line. Use for Class with Property block.");
  }
});

block('sparql_class_with_property', {
  init: function() {
    this.appendValueInput("PROPERTY")
      .appendField("Class name")
    this.appendStatementInput("PROPERTY")
    this.setPreviousStatement(true, "Variable");
    this.setNextStatement(true, "Variable");
    this.setColour(160);
    this.setTooltip("Class with property block, first input ?_ _:_ :_, connected by properties. Use for Class Property block.");
    this.setHelpUrl(""); 
    this.setOutput(true, "Variable");
  }
});

block('sparql_variable_type', {
  init: function() {
    this.appendDummyInput("TYPE1")
        .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
    this.appendValueInput("TYPE2")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
    this.setColour(160);
    this.setTooltip("Type variable block, :_. Use for Class Property block.");
    this.setHelpUrl(""); 
    this.setOutput(true, "Variable");
    this.setInputsInline(true);
  }
});

block('sparql_variable_select', {
  init: function() {
    this.appendValueInput("NEXT_VARIABLE")
        .appendField("?")
        .appendField(new Blockly.FieldTextInput("var"), "VARIABLE");
    this.setColour(80);
    this.setOutput(true, "Variable");
    this.setTooltip("Use for select/class block, indicate properties selected. ?_");
  }
});

// Blockly.Blocks['sparql_variable_select'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("?")
//         .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
//     this.appendValueInput("NEXT_VARIABLE")
//         .setCheck("Variable");
//     this.setInputsInline(true);
//     this.setOutput(true, "Variable");
//     this.setColour(160);
//     this.setTooltip("Select SPARQL variable");
//     this.setHelpUrl("");  // URL to help documentation if needed
//   }
// };

block('sparql_variable_belong', {
  init: function() {
    this.appendDummyInput("VARIABLE")
        .appendField(new Blockly.FieldTextInput("暂时没用"), "VARIABLE");
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
        .appendField(new Blockly.FieldTextInput("暂时没用"), "VARIABLE");
    this.setColour(360);
    this.setOutput(true, "Variable");
    this.setTooltip("general.");
    this.setHelpUrl(""); 
    this.setInputsInline(true);
  }
});


block('sparql_bind', {
  init: function() {
    this.appendValueInput("EXPRESSION")
        .setCheck(null)
        .appendField("BIND(");
    this.appendDummyInput()
        .appendField("AS")
        .appendField(new Blockly.FieldTextInput("?newVar"), "VARIABLE")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Bind a new variable.");
    this.setHelpUrl("");
  }
});
