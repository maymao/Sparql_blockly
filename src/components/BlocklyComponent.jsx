import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import '../blocks/index.js';
import {Sparql} from '../generator/index.js';
import { useState } from 'react';

const BlocklyComponent = () => {
  const blocklyRef = useRef(null);
  const workspaceRef = useRef(null);
  const [sparqlCode, setSparqlCode] = useState(''); // store the SPARQL code

  const TOOLBOX_XML = `
  <xml xmlns="http://www.w3.org/1999/xhtml">

  <category name="Basics" colour="#5B8976">
    <block type="sparql_braces"></block>
    <block type="sparql_parentheses"></block>
    <block type="sparql_*"></block>
    <block type="sparql_string"></block>
    <block type="sparql_number"></block>
  </category>

  <category name="Math" colour="#5B8976">
    <block type="sparql_add"></block>
    <block type="sparql_subtract"></block>
    <block type="sparql_multiply"></block>
    <block type="sparql_divide"></block>
    <block type="sparql_comparison"></block>
  </category>

  <category name="Logic" colour="#5B8976">
    <block type="sparql_and"></block>
    <block type="sparql_or"></block>
    <block type="sparql_not"></block>
  </category>

  <category name="Query" colour="#5CA699">
    <block type="sparql_prefix"></block>
    <block type="sparql_select"></block>
    <block type="sparql_where"></block>
    <block type="sparql_distinct_reduced"></block>
  </category>
      
  <category name="Connector" colour="#5C68A6">
    <block type="sparql_class"></block>
    <block type="sparql_optional"></block>
    <block type="sparql_property"></block>
  </category>

  <category name="Condition" colour="#5C68A6">
    <block type="sparql_condition"></block>
    <block type="sparql_filter"></block>
    <block type="sparql_existence"></block>
    <block type="sparql_orderby"></block>
    <block type="sparql_groupby"></block>
    <block type="sparql_having"></block>
    <block type="sparql_limit"></block>
    <block type="sparql_offset"></block>
    <block type="sparql_union"></block>
  </category>

  <category name="Variable" colour="#5CB763">
    <block type="sparql_class_with_property"></block>
    <block type="sparql_properties_in_class"></block>
    <block type="sparql_variable_type"></block>
    <block type="sparql_class_line"></block>
    <block type="sparql_variable_select"></block>
    <block type="sparql_variable_general"></block>
    <block type="sparql_variable_belong"></block>
    <block type="sparql_bind"></block>
  </category>

  <category name="Aggregate" colour="#5CB763">
    <block type="sparql_avg"></block>
    <block type="sparql_count"></block>
    <block type="sparql_max"></block>
    <block type="sparql_min"></block>
    <block type="sparql_sum"></block>
  </category>

  </xml>`;
  

 useEffect(() => {
    if (blocklyRef.current && !workspaceRef.current) {
      workspaceRef.current = Blockly.inject(blocklyRef.current, {
        toolbox: TOOLBOX_XML,
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
        move: {
          scrollbars: true,
          drag: true,
          wheel: true
        }
      });
    }
    
    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  const generateSparqlCode = () => {
    if (workspaceRef.current) {
      const topBlocks = workspaceRef.current.getTopBlocks(true);
      let code = '';
      topBlocks.forEach(block => {
        var currentBlock = block;
        while (currentBlock) {
          // code += Sparql.blockToCode(currentBlock);
          const blockCode = Sparql.blockToCode(currentBlock);
          code += Array.isArray(blockCode) ? blockCode[0] : blockCode;
          currentBlock = currentBlock.nextConnection && currentBlock.nextConnection.targetBlock();
        }
      });
      setSparqlCode(code);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div ref={blocklyRef} style={{ flex: 1, width: '100%' }} />
      <button onClick={generateSparqlCode} style={{ padding: '10px', margin: '10px' }}>Generate SPARQL Code</button>
      <pre style={{ padding: '10px', margin: '10px', backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>
        {sparqlCode}
      </pre>
    </div>
  );
};

export default BlocklyComponent;
