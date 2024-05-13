import { block } from '../core/blocks.js';
import Blockly from 'blockly';

block('sparql_prefix', {
    init: function() {
      this.appendDummyInput()
          .appendField("PREFIX");
      this.appendDummyInput()
          .appendField("Prefix Label:")
          .appendField(new Blockly.FieldTextInput("ex"), "PREFIX_LABEL");
      this.appendDummyInput()
          .appendField("URI:")
          .appendField(new Blockly.FieldTextInput("http://example.com/"), "URI");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip("Define a PREFIX for SPARQL queries.");
      this.setHelpUrl(""); // 可以添加一个帮助链接
      this.setInputsInline(true);
    }
  });
  