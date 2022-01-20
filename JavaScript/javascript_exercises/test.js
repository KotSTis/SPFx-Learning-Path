// describe("pow", function() {
	
// 	it("2 raised to the power of 3 is 8", function() {
// 		assert.equal(pow(2, 3), 8);
// 	});

// 	it("3 raised to the power of 4 is 81", function () {
// 		assert.equal(pow(3, 4), 81);
// 	});
// });
// 


describe("pow", function(){
	
	//SUPER IMPORTANT WHEN USEING ALERT AND TESTING
	this.timeout(200000); 

	before(() => alert("Testing started"));
	after(() => alert("Testing ended"));
	beforeEach(() => alert("test go"));
	afterEach(() => alert("test done"));

	describe ("raises x to power of 3", function() {
		function makeTest(x) {
			let expected = x * x * x;
			it(`${x} in the power of 3 is ${expected}`, function() {
				assert.equal(pow(x,3), expected);
			});
		}

		for (let x = 1; x <= 5; x++) {
			makeTest(x);
		}
	});
	
	describe ("NaN checks", function(){
		it("for negative n the result is NaN", function() {
			assert.isNaN(pow(2,-1));
		});
		it("for non-integer n the result is NaN", function () {
			assert.isNaN(pow(2, 1.5));
		});
	});

});