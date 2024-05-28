const extendSparqlWithDistinctReduced = (Sparql) => {
  Sparql.sparql_distinct_reduced = function(block) {
    const keyword = block.getFieldValue('DISTINCT');
    let code = `${keyword}`;
    var nextBlock = block.getInputTargetBlock('VARIABLE');

    if (!nextBlock) {
      code += ' *';
    } 
    
    while (nextBlock) {
      var nextCode = Sparql.blockToCode(nextBlock)[0];
      if (nextCode) {
        code += ` ${nextCode}`;
      }
      nextBlock = nextBlock.getInputTargetBlock('NEXT_VARIABLE');
    }
    
    return [code, Sparql.ORDER_ATOMIC];
  };
};

const extendSparqlWithSelect = (Sparql) => {
  Sparql.sparql_select = function(block) {
    var variablesCode = Sparql.valueToCode(block, 'VARIABLES', Sparql.ORDER_ATOMIC) || '*';
    
    var whereCodes = [];
    var currentBlock = block.getInputTargetBlock('WHERE');
    
    while (currentBlock) {
      switch (currentBlock.type) {
        case 'sparql_property':
          whereCodes.push(Sparql.sparql_property(currentBlock) || '');
          break;
        case 'sparql_filter':
          whereCodes.push(Sparql.sparql_filter(currentBlock) || '');
          break;
        case 'sparql_optional':
          whereCodes.push(Sparql.sparql_optional(currentBlock) || '');
          break;
        case 'sparql_union':
          whereCodes.push(Sparql.sparql_union(currentBlock) || '');
          break;
        case 'sparql_bind':
          whereCodes.push(Sparql.sparql_bind(currentBlock) || '');
          break;
        default:
          console.warn('Unhandled block type:', currentBlock.type);
          break;
      }
      currentBlock = currentBlock.nextConnection && currentBlock.nextConnection.targetBlock();
    }
  
    var whereCode = whereCodes.join('  ');
    var code = `SELECT ${variablesCode}\nWHERE {\n  ${whereCode}\n}`;
    return code;
  };
};


const extendSparqlWithCondition = (Sparql) => {
  Sparql.sparql_condition = function(block) {
    var conditionsCode = Sparql.statementToCode(block, 'CONDITIONS', Sparql.ORDER_NONE);
    conditionsCode = conditionsCode.trim(); 
  
    var code = "";
    if (conditionsCode) {
      code += conditionsCode; 
    }
    code += "\n";  
    return code;
  };
};

const extendSparqlWithClass = (Sparql) => {
  Sparql.sparql_class = function(block) {
    var propertiesCode = '';
    var currentBlock = block.getInputTargetBlock('PROPERTIES');

    while (currentBlock) {
      switch (currentBlock.type) {
        case 'sparql_property':
          propertiesCode += Sparql.sparql_property(currentBlock) || '';
          break;
        case 'sparql_filter':
          propertiesCode += Sparql.sparql_filter(currentBlock) || '';
          break;
        case 'sparql_optional':
          propertiesCode += Sparql.sparql_optional(currentBlock) || '';
          break;
        default:
          console.warn('Unhandled block type:', currentBlock.type);
          break;
      }
      currentBlock = currentBlock.nextConnection && currentBlock.nextConnection.targetBlock();
    }

    var code = "\n" + propertiesCode.trim() + "\n";
    return code;
  };
}

const extendSparqlWithProperty = (Sparql) => {
  Sparql.sparql_property = function(block) {
    var propertyCode = Sparql.valueToCode(block, 'PROPERTY', Sparql.ORDER_ATOMIC);
    propertyCode = propertyCode.trim(); 

    var code =  propertyCode + "\n";
    return code;
  };
}

const extendSparqlWithClassWithProperty = (Sparql) => {
  Sparql.sparql_class_with_property = function(block) {
    var classNameCode = Sparql.valueToCode(block, 'CLASS_NAME', Sparql.ORDER_ATOMIC) || 'unknownClass';
    var propertiesCodes = [];

    var connectorBlock = block.getInputTargetBlock('PROPERTIES');

    while (connectorBlock) {
      var variableTypeCode = Sparql.valueToCode(connectorBlock, 'INPUT', Sparql.ORDER_NONE) || '';
      propertiesCodes.push(variableTypeCode);

      connectorBlock = connectorBlock.nextConnection && connectorBlock.nextConnection.targetBlock();
    }

    for (var i = 0; i < propertiesCodes.length; i++) {
      console.log(propertiesCodes.length);
      if (i == 0 && propertiesCodes.length == 1) {
        propertiesCodes[i] = '  ' + propertiesCodes[i] + ' .';
      } else if (i == 0) {
        propertiesCodes[i] = '  ' + propertiesCodes[i] + '; \n';

      } else if (i == propertiesCodes.length - 1) {
        propertiesCodes[i] = '        ' + propertiesCodes[i] + ' .';
      } else {
        propertiesCodes[i] = '  ' + propertiesCodes[i] + ' ;\n';
      }

    }

    var code = '  ' + classNameCode + propertiesCodes.join('');
    

    return [code, Sparql.ORDER_ATOMIC];
  };
}

const extendSparqlWithPropertiesInClass = (Sparql) => {
  Sparql.sparql_properties_in_class = function(block) {
    var variableTypeCode = Sparql.valueToCode(block, 'INPUT', Sparql.ORDER_NONE) || '';
    var code = variableTypeCode;
    return code;
  };
}

export { 
  extendSparqlWithDistinctReduced, 
  extendSparqlWithSelect,
  extendSparqlWithCondition, 
  extendSparqlWithClass, 
  extendSparqlWithProperty,
  extendSparqlWithClassWithProperty,
  extendSparqlWithPropertiesInClass
};