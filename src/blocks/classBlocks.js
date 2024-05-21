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
  }
});
  
block('sparql_property', {
  init: function() {
    this.appendValueInput("PROPERTY")
        .appendField("Property")
        .setCheck(null);
    this.setPreviousStatement(true, "Property");
    this.setNextStatement(true, "Property");
    this.setColour(120);
    this.setTooltip("Enter a property name.");
  }
});
