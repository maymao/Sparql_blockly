const extendSparqlWithNot = (Sparql) => {
    Sparql.sparql_not = function(block) {
      const operand = Sparql.valueToCode(block, 'OPERAND', Sparql.ORDER_ATOMIC) || 'false';
      const code = `(!${operand})`;
      return [code, Sparql.ORDER_LOGICAL_NOT];
    };
};

const extendSparqlWithOr = (Sparql) => {
    Sparql.sparql_or = function(block) {
      const operand1 = Sparql.valueToCode(block, 'OPERAND1', Sparql.ORDER_ATOMIC) || 'false';
      const operand2 = Sparql.valueToCode(block, 'OPERAND2', Sparql.ORDER_ATOMIC) || 'false';
      const code = `(${operand1} || ${operand2})`;
      return [code, Sparql.ORDER_LOGICAL_OR];
    };
};

const extendSparqlWithAnd = (Sparql) => {
    Sparql.sparql_and = function(block) {
      const operand1 = Sparql.valueToCode(block, 'OPERAND1', Sparql.ORDER_ATOMIC) || 'false';
      const operand2 = Sparql.valueToCode(block, 'OPERAND2', Sparql.ORDER_ATOMIC) || 'false';
      const code = `(${operand1} && ${operand2})`;
      return [code, Sparql.ORDER_LOGICAL_AND];
    };
};
  
    
export { extendSparqlWithNot, extendSparqlWithOr, extendSparqlWithAnd};