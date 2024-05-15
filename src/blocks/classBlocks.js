import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_class', {
  init: function() {
    this.appendDummyInput()
        .appendField("Class Properties")
    this.appendStatementInput("PROPERTIES")
        .setCheck("Property")
    this.setPreviousStatement(true, "Class");
    this.setNextStatement(true, "Class");
    this.setColour(120);
    this.setTooltip("Select a class.");
    this.setHelpUrl("");
  }
});
  
block('sparql_property', {
  init: function() {
    this.appendValueInput("PROPERTY")
        .appendField("Property connector")
        .setCheck(null);
    this.setPreviousStatement(true, "Property");
    this.setNextStatement(true, "Property");
    this.setColour(120);
    this.setTooltip("Enter a SPARQL property name.");
    this.setHelpUrl("");
  }
});

block('sparql_optional', {
  init: function() {
    this.appendStatementInput("PATTERN")
        .setCheck(null)
        .appendField("OPTIONAL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Optional pattern.");
    this.setHelpUrl("");
  }
});
  

