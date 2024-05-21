import Blockly from 'blockly';
import { block } from '../core/blocks.js';
  
block('sparql_select', {
    init: function() {
      this.appendValueInput("VARIABLES")
          .setCheck("Variable")
          .appendField("SELECT");
      this.appendStatementInput("WHERE")
          .setCheck("Keyword")
          .appendField("WHERE");
      this.setPreviousStatement(true, 'Prefix');
      this.setColour(230);
      this.setTooltip("Perform a SPARQL select query.");
      this.setHelpUrl(""); 
    }
  });

  
block('sparql_distinct_reduced', {
    init: function() {
        this.appendValueInput("Variables")
            .appendField(new Blockly.FieldDropdown([["DISTINCT", "DISTINCT"], ["REDUCED", "REDUCED"]]), "DISTINCT");
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip("DISTINCT/REDUCED keyword seletion block connects to Select variables option.");
    }
});

block('sparql_where', {
    init: function() {
      this.appendStatementInput("CLASSES")
          .setCheck("Class")
          .appendField("CLASS");
      this.appendStatementInput("CONDITIONS")
          .setCheck("Condition")
          .appendField("CONDITION");
      this.setPreviousStatement(true, "Keyword");
    //   this.setNextStatement(true, "Keyword");
      this.setColour(210);
      this.setTooltip("Define classes and conditions for a SPARQL WHERE clause.");
    }
  });