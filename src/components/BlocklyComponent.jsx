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
    </category>
      
    <category name="Keyword" colour="#5C68A6">
      <block type="sparql_where"></block>
    </category>

    
    <category name="Symbol" colour="#5C68A6">
      <block type="sparql_variable"></block>
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
