const extendSparqlWithNumber = (Sparql) => {
    Sparql.sparql_number = function(block) {
      const number = block.getFieldValue('NUMBER');
      const code = `${number}`;
      return [code, Sparql.ORDER_ATOMIC];
    };
};

const extendSparqlWithString = (Sparql) => {
    Sparql.sparql_string = function(block) {
        const string = block.getFieldValue('STRING');
        const code = `"${string}"`;
        return [code, Sparql.ORDER_ATOMIC];
    };
};

const extendSparqlWithVariableSelect = (Sparql) => {
    Sparql.sparql_variable_select = function(block) {
      const variable = block.getFieldValue('VARIABLE') || '';
      let code = `?${variable}`;
      var nextBlock = block.getInputTargetBlock('NEXT_VARIABLE');
      
      while (nextBlock) {
        var nextCode = nextBlock.getFieldValue('VARIABLE');
        if (nextCode) {
          code += ` ?${nextCode}`;
        }
        nextBlock = nextBlock.getInputTargetBlock('NEXT_VARIABLE');
      }
      
      return [code, Sparql.ORDER_ATOMIC];
  };
};

const extendSparqlWithVariableVarname = (Sparql) => {
  Sparql.sparql_variable_varname = function(block) {
    const varName = block.getFieldValue('VARIABLE') || 'unknownVar';
    var code = '?' + varName;
    const type = block.getInputTargetBlock('TYPE');
    const typeCode = type ? ' ' + type.getFieldValue('VARIABLE1') + ':' + type.getFieldValue('VARIABLE2') : '';
    if (typeCode) {
      code += typeCode;
      const name = type.getInputTargetBlock('TYPE2');
      if (name) {
        const nameCode = name.type == 'sparql_variable_typename' ? ' :' + name.getFieldValue('VARIABLE') : ' ?' + name.getFieldValue('VARIABLE');
        if (nameCode) {
          code += nameCode;
        }
      }
    }
    // code += '\n';
    return [code, Sparql.ORDER_ATOMIC];
  };
}

const extendSparqlWithVariableTypename = (Sparql) => {
  Sparql.sparql_variable_typename = function(block) {
    const varName = block.getFieldValue('VARIABLE') || 'unknownType';
    const code = ':' + varName;
    return [code, Sparql.ORDER_ATOMIC];
  };
}

const extendSparqlWithVariableType = (Sparql) => {
  Sparql.sparql_variable_type = function(block) {
    const variable1 = block.getFieldValue('VARIABLE1') || 'unknownVar';
    const variable2 = block.getFieldValue('VARIABLE2') || 'unknownVar';
    const nextBlock = block.getInputTargetBlock('TYPE2');
    // const varnameCode = Sparql.valueToCode(nextBlock, 'VARIABLE', Sparql.ORDER_ATOMIC) || '';
    var nameCode = '';
    if (nextBlock) {
      nameCode = nextBlock.type == 'sparql_variable_typename' ? ' :' + nextBlock.getFieldValue('VARIABLE') : ' ?' + nextBlock.getFieldValue('VARIABLE');
    }
    let code = variable1 + ':' + variable2;  // variable1:variable2
    if (nameCode) {
      code += nameCode;  
    }

    return [code, Sparql.ORDER_ATOMIC];
  };
}

  
export { 
  extendSparqlWithNumber, 
  extendSparqlWithString, 
  extendSparqlWithVariableSelect,
  extendSparqlWithVariableTypename,
  extendSparqlWithVariableVarname,
  extendSparqlWithVariableType
 };
  