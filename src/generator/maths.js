const extendSparqlWithAdd = (Sparql) => {
    Sparql.sparql_add = function(block) {
      const addend1 = Sparql.valueToCode(block, 'ADDEND1', Sparql.ORDER_ATOMIC) || '0';
      const addend2 = Sparql.valueToCode(block, 'ADDEND2', Sparql.ORDER_ATOMIC) || '0';
      const code = `(${addend1} + ${addend2})`;
      return [code, Sparql.ORDER_ADDITION];
    };
};
const extendSparqlWithSubtract = (Sparql) => {
    Sparql.sparql_subtract = function(block) {
      const minuend = Sparql.valueToCode(block, 'MINUEND', Sparql.ORDER_ATOMIC) || '0';
      const subtrahend = Sparql.valueToCode(block, 'SUBTRAHEND', Sparql.ORDER_ATOMIC) || '0';
      const code = `(${minuend} - ${subtrahend})`;
      return [code, Sparql.ORDER_SUBTRACTION];
    };
};

const extendSparqlWithMultiply = (Sparql) => {
    Sparql.sparql_multiply = function(block) {
      const factor1 = Sparql.valueToCode(block, 'FACTOR1', Sparql.ORDER_ATOMIC) || '1';
      const factor2 = Sparql.valueToCode(block, 'FACTOR2', Sparql.ORDER_ATOMIC) || '1';
      const code = `(${factor1} * ${factor2})`;
      return [code, Sparql.ORDER_MULTIPLICATION];
    };
};
  

const extendSparqlWithDivide = (Sparql) => {
    Sparql.sparql_divide = function(block) {
      const dividend = Sparql.valueToCode(block, 'DIVIDEND', Sparql.ORDER_ATOMIC) || '1';
      const divisor = Sparql.valueToCode(block, 'DIVISOR', Sparql.ORDER_ATOMIC) || '1';
      const code = `(${dividend} / ${divisor})`;
      return [code, Sparql.ORDER_DIVISION];
    };
};

export { extendSparqlWithAdd, extendSparqlWithSubtract, extendSparqlWithMultiply, extendSparqlWithDivide };
  