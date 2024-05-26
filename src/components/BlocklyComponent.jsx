import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import '../blocks/index.js';
import {Sparql} from '../generator/index.js';
import { useState } from 'react';

const BlocklyComponent = () => {
  const blocklyRef = useRef(null);
  const workspaceRef = useRef(null);
  const [sparqlCode, setSparqlCode] = useState(''); // store the SPARQL code
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    <block type="sparql_condition"></block>
    <block type="sparql_distinct_reduced"></block>
  </category>
      
  <category name="Connector" colour="#5C68A6">
    <block type="sparql_optional"></block>
    <block type="sparql_property"></block>
  </category>

  <category name="Condition" colour="#5C68A6">
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
    <block type="sparql_variable_typename"></block>
    <block type="sparql_variable_varname"></block>
    <block type="sparql_bind"></block>
  </category>

  <category name="Aggregate" colour="#5CB763">
    <block type="sparql_avg"></block>
    <block type="sparql_count"></block>
    <block type="sparql_max"></block>
    <block type="sparql_min"></block>
    <block type="sparql_sum"></block>
  </category>

  <category name="Predefined Queries(修改中)" colour="#5B80A5">
  <block type="sparql_select">
    <value name="VARIABLES">
      <block type="sparql_variable_select">
        <field name="VAR">?var</field>
      </block>
    </value>
    <statement name="WHERE">
      <block type="sparql_property">
        <value name="PROPERTY">
          <block type="sparql_class_with_property">
            <field name="VAR">?property1</field>
          </block>
        </value>
        <next>
          <block type="sparql_property">
            <value name="PROPERTY">
              <block type="sparql_class_with_property">
                <field name="VAR">?property2</field>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
  </block>

  <block type="sparql_properties_in_class">
    <value name="INPUT">
      <block type="sparql_variable_type"></block>
    </value>
  </block>
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
    <div style={{ display: 'flex', height: '100vh' }}>
      <div ref={blocklyRef} style={{ flex: 2, minWidth: '66%' }} />
      <div style={{
        width: sidebarOpen ? '400px' : '0',
        transition: 'width 0.5s',
        overflow: 'hidden',
        height: '55%',
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#74CD97',
        borderLeft: '2px solid #ccc',
        padding: '10px',
        boxSizing: 'border-box',
        overflowY: 'auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        borderRadius: '10px'
      }}>
        <button onClick={generateSparqlCode} style={{
          padding: '10px',
          position: 'absolute',
          bottom: '15px',
          right: '20px',
          backgroundColor: '#6FBF8E',
          border: 'none',
          borderRadius: '10px',
          color: 'white',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer'
        }}>
          Generate SPARQL Code
        </button>
        <pre style={{
          flex: 1,
          overflow: 'auto',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          marginTop: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
          borderRadius: '10px',
          padding: '10px',
          textAlign: 'left', 
          whiteSpace: 'pre-wrap',
          maxHeight: 'calc(100% - 60px)',
          overflowY: 'auto', 
          height: 'calc(100% - 50px)'
        }}>
          {sparqlCode}
        </pre>
      </div>
      <button onClick={toggleSidebar} style={{
        position: 'absolute',
        top: '20px',
        right: sidebarOpen ? '420px' : '50px',
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s, right 0.5s',
        width: '50px',
        height: '50px',
        backgroundColor: '#6FBF8E',
        borderRadius: '50%',
        border: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {sidebarOpen ? '>' : '<'}
      </button>
    </div>
  );
};

export default BlocklyComponent;
