const extendSparqlWithPrefix = (Sparql) => {
    Sparql.sparql_prefix = function(block) {
        var prefixLabel = block.getFieldValue('PREFIX_LABEL');
        var uri = block.getFieldValue('URI');
        
        if (prefixLabel === '' || uri === '') {
            return '';
        } else {
            var code = 'PREFIX ' + prefixLabel + ': <' + uri + '>\n';
            return code;
        }
    };
};
  
export { extendSparqlWithPrefix };
  