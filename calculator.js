function calc (operation, inp1, inp2) {
	if (isNaN(inp1) || isNaN(inp2) && operation !== 'cube' && operation !== 'CUBE') {
		return "Please provide number only";
	}
	else if (operation === 'add' || operation === 'ADD') {
		return inp1 + inp2;
	}
	else if (operation === 'sub' || operation === 'SUB') {
		return inp1 - inp2;
	}
	else if (operation === 'mult' || operation === 'MULT') {
		return inp1 * inp2;
	}
	else if (operation === 'cube' || operation === 'CUBE') {
		return inp1 * inp1 * inp1;
	}
	else {
		return "unknown operation";
	}
}

module.exports = {calc};