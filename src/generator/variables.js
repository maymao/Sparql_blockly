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
  
export { extendSparqlWithNumber, extendSparqlWithString, extendSparqlWithVariableSelect };
  