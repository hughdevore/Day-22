var expect = chai.expect;


describe('max', function() {
	it('should only take two arguments', function() {
		expect(function(){max(2, 2, 2)}).to.throw('The number of arguments must be two.');
		expect(function(){max(2)}).to.throw('The number of arguments must be two.');
	});

	it('The arguments should only be numbers', function() {
		expect(function(){max('a', 2)}).to.throw('The first argument should be a number');
		expect(function(){max(2, 'a')}).to.throw('The second argument should be a number');
		expect(function(){max([], 2)}).to.throw('The first argument should be a number');
		expect(function(){max(2, [])}).to.throw('The second argument should be a number');
		expect(function(){max({}, 2)}).to.throw('The first argument should be a number');
		expect(function(){max(2, {})}).to.throw('The second argument should be a number');
		expect(function(){max(true, 2)}).to.throw('The first argument should be a number');
		expect(function(){max(2, true)}).to.throw('The second argument should be a number');
	});

	it('should return the greater of the two arguments', function(){
		expect(max(8,15)).to.equal(15);
		expect(max(5,1)).to.equal(5);
		expect(max(10,10)).to.equal(10);
	});
});


describe('maxOfThree', function() {
	it('should only take three arguments', function() {
		expect(function(){maxOfThree()}).to.throw('The number of arguments must be three.');
		expect(function(){maxOfThree(2, 2)}).to.throw('The number of arguments must be three.');
		expect(function(){maxOfThree(2)}).to.throw('The number of arguments must be three.');
		expect(function(){maxOfThree(2, 4, 5, 6)}).to.throw('The number of arguments must be three.');
	});

	it('The arguments should only be numbers', function(){
		expect(function(){maxOfThree('a', 2, 3)}).to.throw('The first argument should be a number');
		expect(function(){maxOfThree(2, 'a', 3)}).to.throw('The second argument should be a number');
		expect(function(){maxOfThree(2, 3, 'a')}).to.throw('The third argument should be a number');
		expect(function(){maxOfThree([], 2, 3)}).to.throw('The first argument should be a number');
		expect(function(){maxOfThree(2, [], 3)}).to.throw('The second argument should be a number');
		expect(function(){maxOfThree(2, 3, [])}).to.throw('The third argument should be a number');
		expect(function(){maxOfThree({}, 2, 3)}).to.throw('The first argument should be a number');
		expect(function(){maxOfThree(2, {}, 3)}).to.throw('The second argument should be a number');
		expect(function(){maxOfThree(2, 3, {})}).to.throw('The third argument should be a number');
		expect(function(){maxOfThree(true, 2, 3)}).to.throw('The first argument should be a number');
		expect(function(){maxOfThree(3, true, 2)}).to.throw('The second argument should be a number');
		expect(function(){maxOfThree(2, 3, true)}).to.throw('The third argument should be a number');
	});

	it('Should return the greater of the three arguments', function() {
		expect(maxOfThree(34, 25, 27)).to.equal(34);
		expect(maxOfThree(27, 34, 25)).to.equal(34);
		expect(maxOfThree(25, 27, 34)).to.equal(34);
		expect(maxOfThree(22.5, 23, 20)).to.equal(23);
	});
});


describe('isVowel', function(){
	it('char should be a character', function(){
		expect(function(){isVowel()}).to.throw('The argument must be a string');
		expect(function(){isVowel([])}).to.throw('The argument must be a string');
		expect(function(){isVowel({})}).to.throw('The argument must be a string');
		expect(function(){isVowel(true)}).to.throw('The argument must be a string');
	});

	it('char should be one character long', function() {
		expect(function(){isVowel('a','b')}).to.throw('The argument must be one character long');
	});

	it('char should be a vowel', function(){
		expect(isVowel('a')).to.equal('Vowel');
		expect(isVowel('e')).to.equal('Vowel');
		expect(isVowel('i')).to.equal('Vowel');
		expect(isVowel('o')).to.equal('Vowel');
		expect(isVowel('u')).to.equal('Vowel');
	});
});


describe('rovarspraket', function(){
	it('Phrase should be a string', function(){
		expect(function(){rovarspraket()}).to.throw('The argument must be a string');
		expect(function(){rovarspraket([])}).to.throw('The argument must be a string');
		expect(function(){rovarspraket({})}).to.throw('The argument must be a string');
		expect(function(){rovarspraket(true)}).to.throw('The argument must be a string');
	});

	it('Phrase should not be an empty string', function(){
		expect(function(){rovarspraket('')}).to.throw('The argument cannot be an empty string');
	});

	it('Phrase should translate to rovarspraket', function(){
		expect(rovarspraket('fun')).to.equal('fofunon');
		expect(rovarspraket('time')).to.equal('totimome');
	});
});


describe('sum', function() {
	it('should take an array', function(){
		expect(function(){sum()}).to.throw('The argument must be an array');
		expect(function(){sum('a')}).to.throw('The argument must be an array');
		expect(function(){sum({})}).to.throw('The argument must be an array');
		expect(function(){sum(true)}).to.throw('The argument must be an array');
	});

	it('should not be an empty array', function(){
		expect(function(){sum([])}).to.throw('The argument cannot be an empty array');
	});

	it('should take an array of numbers', function(){
		expect(function(){sum(['a', 2, 5])}).to.throw('The array must contain only numbers');
		expect(function(){sum([2 , 5, {}])}).to.throw('The array must contain only numbers');
		expect(function(){sum([2, true, 5])}).to.throw('The array must contain only numbers');
		expect(function(){sum([2, [1], 5])}).to.throw('The array must contain only numbers');
	});

	it('should add numbers in array', function(){
		expect(sum([1,3,6,10,7])).to.equal(27);
		expect(sum([5,8,1])).to.equal(14);
	});
});


describe('multiply', function() {
	it('should take an array', function(){
		expect(function(){multiply()}).to.throw('The argument must be an array');
		expect(function(){multiply('a')}).to.throw('The argument must be an array');
		expect(function(){multiply({})}).to.throw('The argument must be an array');
		expect(function(){multiply(true)}).to.throw('The argument must be an array');
	});

	it('should not be an empty array', function(){
		expect(function(){multiply([])}).to.throw('The argument cannot be an empty array');
	});

	it('should take an array of numbers', function(){
		expect(function(){multiply(['a', 2, 5])}).to.throw('The array must contain only numbers');
		expect(function(){multiply([2 , 5, {}])}).to.throw('The array must contain only numbers');
		expect(function(){multiply([2, true, 5])}).to.throw('The array must contain only numbers');
		expect(function(){multiply([2, [1], 5])}).to.throw('The array must contain only numbers');
	});

	it('should multiply numbers in array', function(){
		expect(multiply([1,2,2,4,2])).to.equal(32);
		expect(multiply([5,8,1])).to.equal(40);
	});multiply
});


describe('reverse', function(){
	it('should be a string', function(){
		expect(function(){reverse()}).to.throw('The argument must be a string');
		expect(function(){reverse([])}).to.throw('The argument must be a string');
		expect(function(){reverse({})}).to.throw('The argument must be a string');
		expect(function(){reverse(true)}).to.throw('The argument must be a string');
	});

	it('should not be an empty string', function(){
		expect(function(){reverse('')}).to.throw('The argument cannot be an empty string');
	});

	it('should be reversed', function(){
		expect(reverse('carpenter')).to.equal('retneprac');
		expect(reverse('test')).to.equal('tset');
	});
});


describe('findLongestWord', function(){
	it('words should be an array', function(){
		expect(function(){findLongestWord()}).to.throw('The argument must be an array');
		expect(function(){findLongestWord('a')}).to.throw('The argument must be an array');
		expect(function(){findLongestWord({})}).to.throw('The argument must be an array');
		expect(function(){findLongestWord(true)}).to.throw('The argument must be an array');
	});

	it('words should not be an empty array', function(){
		expect(function(){findLongestWord([])}).to.throw('The argument cannot be an empty array');
	});

	it('words should be an array of strings', function(){
		expect(function(){findLongestWord([2, 'hello', 'hi'])}).to.throw('The array must contain only strings');
		expect(function(){findLongestWord(['hello', 'hi', {}])}).to.throw('The array must contain only strings');
		expect(function(){findLongestWord(['hello', true, 'hi'])}).to.throw('The array must contain only strings');
		expect(function(){findLongestWord([['hey'], 'hello', 'hi'])}).to.throw('The array must contain only strings');
	});

	it('should find the longest string in the array', function(){
		expect(findLongestWord(['hi','hey','hello'])).to.equal('hello');
		expect(findLongestWord(['bird','is','cheese'])).to.equal('cheese');
	});
});


describe('filterLongWords', function(){
	it('words should be an array', function(){
		expect(function(){filterLongWords()}).to.throw('The arguments must be entered');

		expect(function(){filterLongWords(1,2)}).to.throw('The first argument must be an array');
		expect(function(){filterLongWords({},2)}).to.throw('The first argument must be an array');
		expect(function(){filterLongWords(true,2)}).to.throw('The first argument must be an array');
		expect(function(){filterLongWords('s',2)}).to.throw('The first argument must be an array');
	});

	it('i should be an integer', function(){
		expect(function(){filterLongWords(['apple', 'bee'],-1)}).to.throw('The second argument must be a positive integer');
		expect(function(){filterLongWords(['apple', 'bee'],[])}).to.throw('The second argument must be an integer');
		expect(function(){filterLongWords(['donkey', 'bee'],{})}).to.throw('The second argument must be an integer');
		expect(function(){filterLongWords(['trumpet', 'bee'],'a')}).to.throw('The second argument must be an integer');
	});

	it('words should be an array of strings', function(){
		expect(function(){filterLongWords([2, 'hello', 'hi'], 5)}).to.throw('The array must contain only strings');
		expect(function(){filterLongWords(['hello', 'hi', {}], 5)}).to.throw('The array must contain only strings');
		expect(function(){filterLongWords(['hello', true, 'hi'], 5)}).to.throw('The array must contain only strings');
		expect(function(){filterLongWords([['hey'], 'hello', 'hi'], 5)}).to.throw('The array must contain only strings');
	});

	it('should filter to build array of words longer than i', function(){
		expect(filterLongWords(['hi','hey','hello'], 3)).to.equal(['hello']);
		expect(filterLongWords(['bird','is','cheese'], 2)).to.equal(['bird','cheese']);
	});
});

describe('charFreq', function() {
	it('should be entered as a string', function() {
		expect(function(){charFreq()}).to.throw('The argument must be a string');
		expect(function(){charFreq([])}).to.throw('The argument must be a string');
		expect(function(){charFreq({})}).to.throw('The argument must be a string');
		expect(function(){charFreq(true)}).to.throw('The argument must be a string');
	});

	it('should return an object containing the frequency list', function(){
		expect(charFreq('aabbccbbaacc')).to.equal({a: 4, b: 4, c: 4});
	});
});