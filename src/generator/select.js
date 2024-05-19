import { Sparql } from './sparqlGenerator.js';

Sparql.sparql_select = function(block) {
  // TODO: variable array input
  const select = Sparql.graphToCode(block, 'SELECT');
  return `SELECT ${select}`;
}

export { Sparql };