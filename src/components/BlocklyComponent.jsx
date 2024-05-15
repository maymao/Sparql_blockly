import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import '../blocks/index.js';

const BlocklyComponent = () => {
  const blocklyRef = useRef(null);
  const workspaceRef = useRef(null);
  const TOOLBOX_XML = `
  <xml xmlns="http://www.w3.org/1999/xhtml">

    <category name="Query" colour="#5CA699">
      <block type="sparql_prefix"></block>
      <block type="sparql_select"></block>
      <block type="sparql_where"></block>
    </category>
      
    <category name="Keyword" colour="#5C68A6">
      <block type="sparql_class"></block>
      <block type="sparql_optional"></block>
      <block type="sparql_property"></block>
      <block type="sparql_condition"></block>
      <block type="sparql_filter"></block>
      <block type="sparql_orderby"></block>
      <block type="sparql_groupby"></block>
      <block type="sparql_having"></block>
      <block type="sparql_union"></block>
    </category>

    <category name="Symbol" colour="#5CB763">
      <block type="sparql_variable_property"></block>
      <block type="sparql_variable_select"></block>
      <block type="sparql_variable_general"></block>
      <block type="sparql_variable_belong"></block>
    </category>

    <category name="Basics" colour="#5B8976">
      <block type="sparql_braces"></block>
      <block type="sparql_parentheses"></block>
      <block type="sparql_colon"></block>
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

  return <div ref={blocklyRef} style={{ height: '100vh', width: '100%' }} />;
};

export default BlocklyComponent;
