function parseMolecule(f) {
  for (let modified = true; modified;) {
    // if parens are found this is set back to true, else we break the loop before next iteration
    modified = false;

    // expand the most nested set of parentheses or brackets until there are none left
    // this regex looks for parens enclosing only atoms, and the optional following number
    f = f.replace(/\(((?:[A-Z][a-z]?\d*)+)\)(\d*)|\{((?:[A-Z][a-z]?\d*)+)\}(\d*)|\[((?:[A-Z][a-z]?\d*)+)\](\d*)/, (_, p1, p2, p3, p4, p5, p6) => {
      p1 = p1 || p3 || p5;  // coalesce p1 from each of the options; p1 is the enclosed set of atoms
      p2 = p2 || p4 || p6;  // coalesce p2 from each of the options; p2 is the optional following number
      modified = true;      // continue looping
      p2 = Number(p2) || 1; // 1s are omitted so if p2 doesn't exist then it is 1
      // insert omitted 1s, then multiply all values by the number of groups
      p1 = p1.replace(/([A-Z])(?![\da-z])|([A-Z][a-z])(?!\d)/g, '$1$21').replace(/\d+/g, match => match * p2);
      return p1;
    })
  }

  // return an object whose keys are the atoms and values are the occurrences of that atom in the molecule
  // we never coalesce multiple occurrences of the same atom before now, so we have to add to the existing value if it exists
  return f.match(/[A-Z][a-z]?\d*/g).reduce((acc, atom) => ({...acc, [atom.match(/\D+/)]: (acc[atom.match(/\D+/)] || 0) + (Number(atom.match(/\d+/) || 1))}), {});
}

// Tests
console.log('Running given sample tests; no further output indicates success');

const equalsAtomically = (obj1, obj2) => Object.entries(obj1).every(([k,v]) => obj2[k] === v) && Object.entries(obj2).every(([k,v]) => obj1[k] === v);
console.assert(equalsAtomically(parseMolecule("H2O"), {H: 2, O: 1}), "Should parse water");
console.assert(equalsAtomically(parseMolecule("Mg(OH)2"), {Mg: 1, O: 2, H: 2}), "Should parse magnesium hydroxide: Mg(OH)2");
console.assert(equalsAtomically(parseMolecule("K4[ON(SO3)2]2"), {K: 4, O: 14, N: 2, S: 4}), "Should parse Fremy's salt: K4[ON(SO3)2]2");