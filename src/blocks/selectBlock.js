import Blockly from 'blockly';
import { block } from '../core/blocks.js';
  
block('sparql_select', {
    init: function() {
      this.appendDummyInput()
          .appendField("SELECT");
      this.appendValueInput("VARIABLES")
          .setCheck("Variable")
          .appendField("variables");
      this.appendStatementInput("WHERE")
          .setCheck(null)
          .appendField("WHERE");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
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