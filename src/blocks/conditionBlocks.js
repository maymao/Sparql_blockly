// GROUP BY …
// HAVING …
// ORDER BY …
// LIMIT …
// OFFSET …
// BINDINGS …
import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_condition', {
    init: function() {
      this.appendDummyInput()
          .appendField("Condition")
      this.appendStatementInput("Placeholder")
            .setCheck("Condition")
    this.appendStatementInput("ORDER")
            .setCheck("Condition")
      this.setPreviousStatement(true, "Condition");
      this.setNextStatement(true, "Condition");
      this.setColour(180);
      this.setTooltip("Define a filter condition.");
      this.setHelpUrl("");
    }
  });


block('sparql_filter', {
    init: function() {
      this.appendValueInput("FILTER_CONDITION")
          .setCheck("Condition")
          .appendField("FILTER");
      this.setPreviousStatement(true, "Property");
      this.setNextStatement(true, "Property");
      this.setColour(180);
      this.setTooltip("Apply a filter condition to the query.");
      this.setHelpUrl("");
    }
  });

block('sparql_orderby', {
    init: function() {
      this.appendDummyInput()
          .appendField("ORDER BY")
          .appendField(new Blockly.FieldDropdown([["ASC", "ASC"], ["DESC", "DESC"]]), "ORDER")
          .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
      this.setPreviousStatement(true, "Condition");
      this.setNextStatement(true, "Condition");
      this.setColour(160);
      this.setTooltip("Order results by a specified variable.");
      this.setHelpUrl("");
    }
  });


block('sparql_groupby', {
    init: function() {
      this.appendDummyInput()
          .appendField("GROUP BY")
          .appendField(new Blockly.FieldTextInput("variable"), "VARIABLE");
      this.setPreviousStatement(true, "Modifier");
      this.setNextStatement(true, "Modifier");
      this.setColour(160);
      this.setTooltip("Group results by specified variables.");
      this.setHelpUrl("");
    }
  });
  

block('sparql_having', {
    init: function() {
      this.appendValueInput("HAVING_CONDITION")
          .setCheck("Condition")
          .appendField("HAVING");
      this.setPreviousStatement(true, "Modifier");
      this.setNextStatement(true, "Modifier");
      this.setColour(180);
      this.setTooltip("Apply a condition to groups defined by GROUP BY.");
      this.setHelpUrl("");
    }
  });
  
  
  