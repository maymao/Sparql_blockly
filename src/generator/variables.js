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
  
  
export { extendSparqlWithNumber, extendSparqlWithString };
  