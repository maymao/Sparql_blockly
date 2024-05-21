
const extendSparqlWithDistinctReduced = (Sparql) => {
  Sparql.sparql_distinct_reduced = function(block) {
    const keyword = block.getFieldValue('DISTINCT') || '';
    let code = `${keyword}`;
    var nextBlock = block.getInputTargetBlock('VARIABLE');
    
    while (nextBlock) {
      const nextCode = nextBlock.getFieldValue('VARIABLE');
      if (nextCode) {
        code += ` ?${nextCode}`;
      }
      nextBlock = nextBlock.getInputTargetBlock('NEXT_VARIABLE');
    }
    
    return [code, Sparql.ORDER_ATOMIC];
  };
};

const extendSparqlWithSelect = (Sparql) => {
  Sparql.sparql_select = function(block) {
    var variablesCode = Sparql.valueToCode(block, 'VARIABLES', Sparql.ORDER_ATOMIC) || '*';
    var whereCode = Sparql.statementToCode(block, 'WHERE').trim();

    var code = 'SELECT ' + variablesCode + '\n WHERE {' + whereCode + '\n}\n';
  
    return code;
  };
}
export { extendSparqlWithDistinctReduced, extendSparqlWithSelect };