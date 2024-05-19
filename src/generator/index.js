import { extendSparqlWithPrefix } from "./prefix";
import { extendSparqlWithAdd, extendSparqlWithDivide, extendSparqlWithMultiply, extendSparqlWithSubtract } from "./maths.js";
import { extendSparqlWithAnd, extendSparqlWithOr, extendSparqlWithNot } from "./logics.js";
import { Sparql } from "./sparqlGenerator.js";

extendSparqlWithPrefix(Sparql);
extendSparqlWithAdd(Sparql);
extendSparqlWithSubtract(Sparql);
extendSparqlWithMultiply(Sparql);
extendSparqlWithDivide(Sparql);
extendSparqlWithAnd(Sparql);
extendSparqlWithOr(Sparql);
extendSparqlWithNot(Sparql);

export { Sparql };