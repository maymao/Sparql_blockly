import Blockly from 'blockly';
import { block } from '../core/blocks.js';


block('sparql_add', {
    init: function() {
      this.appendValueInput("ADDEND1")
          .setCheck(["Number", "Variable"])
      this.appendValueInput("ADDEND2")
          .setCheck(["Number", "Variable"])
          .appendField("+");
      this.setOutput(true, "Number");
      this.setColour(100);
      this.setTooltip("Adds two numbers or variables.");
      this.setHelpUrl("");
      this.setInputsInline(true);
    }
  });

block('sparql_subtract', {
    init: function() {
      this.appendValueInput("MINUEND")
          .setCheck(["Number", "Variable"])
      this.appendValueInput("SUBTRAHEND")
          .setCheck(["Number", "Variable"])
          .appendField("-");
      this.setOutput(true, "Number");
      this.setColour(100);
      this.setTooltip("Subtracts one number or variable from another.");
      this.setInputsInline(true);
      this.setHelpUrl("");
    }
  });

block('sparql_multiply', {
    init: function() {
      this.appendValueInput("FACTOR1")
          .setCheck(["Number", "Variable"])
      this.appendValueInput("FACTOR2")
          .setCheck(["Number", "Variable"])
          .appendField("*");
      this.setOutput(true, "Number");
      this.setColour(50);
      this.setTooltip("Multiplies two numbers or variables.");
      this.setInputsInline(true);
      this.setHelpUrl("");
    }
  });

  
block('sparql_divide', {
    init: function() {
      this.appendValueInput("DIVIDEND")
          .setCheck(["Number", "Variable"])
      this.appendValueInput("DIVISOR")
          .setCheck(["Number", "Variable"])
          .appendField("/");
      this.setOutput(true, "Number");
      this.setColour(50);
      this.setTooltip("Divides one number or variable by another.");
      this.setInputsInline(true);
      this.setHelpUrl("");
    }
  });

block('sparql_comparison', {
    init: function() {
      this.appendValueInput("OPERAND1")
          .setCheck(["Number", "Variable"]);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ["=", "="], 
            ["!=", "!="], 
            [">", ">"], 
            ["<", "<"], 
            [">=", ">="], 
            ["<= ", "<="]
          ]), "OPERATOR");
      this.appendValueInput("OPERAND2")
          .setCheck(["Number", "Variable"]);
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Comparison operations: =, !=, >, <, >=, <=.");
      this.setHelpUrl("");
    }
  });

// Sparql.ORDER_ATOMIC = 0;  // 0 is the lowest precedence
// Sparql.ORDER_RELATIONAL = 1;

// Sparql.sparql_comparison = function(block) {
//     var value_operand1 = Sparql.valueToCode(block, 'OPERAND1', Sparql.ORDER_ATOMIC);
//     var dropdown_operator = block.getFieldValue('OPERATOR');
//     var value_operand2 = Sparql.valueToCode(block, 'OPERAND2', Sparql.ORDER_ATOMIC);
//     var code = value_operand1 + ' ' + dropdown_operator + ' ' + value_operand2;
//     return [code, Sparql.ORDER_RELATIONAL];
//   };
  
  
  
