import Blockly from 'blockly';
import { block } from '../core/blocks.js';

block('sparql_where', {
    init: function() {
      this.appendDummyInput()
          .appendField("WHERE");
      this.appendStatementInput("CONDITIONS")
          .setCheck(null)
          .appendField("conditions");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("Define conditions for a SPARQL WHERE clause.");
      this.setHelpUrl(""); // 可以添加一个帮助链接
    }
  });

//   Blockly.Blocks['sparql_where'] = {
//     init: function() {
//       this.appendDummyInput()
//           .appendField("WHERE");
//       this.appendStatementInput("CONDITIONS")
//           .setCheck(null)
//           .appendField("conditions");
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(210);
//       this.setTooltip("Define conditions for a SPARQL WHERE clause.");
//       this.setHelpUrl(""); // 可以添加一个帮助链接
//     }
//   };
  