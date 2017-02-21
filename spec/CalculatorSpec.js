describe("Calculator", function(){
	var calculator;
	
	var flag;
	var value;

	var empty_list;
	var all_values;
	var all_values_avg_expt;
	var all_values_min_expt;
	var all_values_max_expt;
	var neg_values;
	var neg_values_avg_expt;
	var neg_values_min_expt;
	var neg_values_max_expt;
	var neg_pos;
	var neg_pos_values_avg_expt;
	var neg_pos_values_min_expt;
	var neg_pos_values_max_expt;
	var non_neg;
	
	beforeEach(function(){
		calculator = new Calculator();
		flag = false;
		value = 0;
		
		empty_list = [];
		all_values = [4,5,6,3,8,100,250,2,6];
		neg_values = [-85,-86,-36,-3]
		neg_pos = [125,-84,-25,-98,6,500,800,2];
		non_neg = ['this is simple', 34,'ofcourse',-5,0];
		
		all_values_avg_expt = 42.67;
		
	});

	describe("Plus", function(){
		it("should add 2 and 5 to 7", function(){
			var expected = 7;
			var result = calculator.Plus(2,5);
			expect(result).toBe(expected);
		});

		it("should add 2 and -5 to -3", function(){
			var expected = -3;
			var result = calculator.Plus(2,-5);
			expect(result).toBe(expected);
		});
		
		it("should add -2 and 5 to 3", function(){
			var expected = 3;
			var result = calculator.Plus(-2,5);
			expect(result).toBe(expected);
		});
		
		it("should add -2 and -5 to -7", function(){
			var expected = -7;
			var result = calculator.Plus(-2,-5);
			expect(result).toBe(expected);
		});

		it("should throw exception, if values other than number are used, as Plus('string value', 2)", function(){			
			expect(function(){
				var result = calculator.Plus('string value', 2);
			}).toThrow();
		});
		
	});
    

	describe("Minus", function(){
		it("should subtract 2 from 5, to 3", function(){
			var expected = 3;
			var result = calculator.Minus(5,2);
			expect(result).toBe(expected);
		});
		
		it("should subtract 2 from -5, to -7", function(){
			var expected = -7;
			var result = calculator.Minus(-5,2);
			expect(result).toBe(expected);
		});
		
		it("should subtract -2 from 5, to 7", function(){
			var expected = 7;
			var result = calculator.Minus(5,-2);
			expect(result).toBe(expected);
		});
		
		it("should subtract -2 from -5, to -3", function(){
			var expected = -3;
			var result = calculator.Minus(-5,-2);
			expect(result).toBe(expected);
		});
		
		it("should throw exception, if values other than number are used, as Minus('string value', 2)", function(){			
			expect(function(){
				var result = calculator.Minus('string value', 2);
			}).toThrow();
		});
	});
    
	
	describe("Divide",function(){
		
		it("should operate to 5, for 15 divided by 3",function(){
			var expected = 5;
			var result = calculator.Divide(15,3);			
			expect(result).toBe(expected);
		});
		
		it("should operate to -5, for -15 divided by 3",function(){
			var expected = -5;
			var result = calculator.Divide(-15,3);			
			expect(result).toBe(expected);
		});
		
		it("should operate to -5, for 15 divided by -3",function(){
			var expected = -5;
			var result = calculator.Divide(15,-3);			
			expect(result).toBe(expected);
		});
		
		it("should operate to 5, for -15 divided by -3",function(){
			var expected = 5;
			var result = calculator.Divide(-15,-3);			
			expect(result).toBe(expected);
		});
		
		it("should throw exception, if tried to divide by zero", function(){
			expect(function(){
				var result = calculator.Divide(1,0);
			}).toThrow();
		});
		
		it("should throw exception, if values other than number are used, as Divide('string value', 2)", function(){			
			expect(function(){
				var result = calculator.Divide('string value', 2);
			}).toThrow();
		});
	});    	
	
	describe("Average", function(){
		
		it("should be 0, when list is empty", function(){
			var result = calculator.Average(empty_list);
			expect(result).toBe(0);
		});
	
		it("should calculate average of 5,5,8 to 6", function(){
			var expected = 6;
			var values = [5, 5, 8];
			var result = calculator.Average(values);
			expect(result).toBe(expected);
		});	
		
		it("should calculate average of "+all_values+" to "+all_values_avg_expt+", with 2 decimal points",function(){
			var result = Number(calculator.Average(all_values).toFixed(2));
			expect(result).toBe(all_values_avg_expt);
		});
		
		it("should throw exception, if values other than number are used, as Average([1,2, 'string value'])", function(){			
			expect(function(){
				var values = [1, 2, 'string value']
				var result = calculator.Plus('string value', 2);
			}).toThrow();		
		});

        it("should produce some average for all nagative values")		
	});
	
	describe("Minimum", function(){
		it("should have minimum value 3 of 4,6,7,3,8",function(){
			var expected = 3;
			var values = [4,6,7,3,8];
			var result = calculator.Min(values);
			expect(result).toBe(expected);
		});
		
		it("should throw exception, if values other than number are used, as Min(['string value', 2])", function(){			
			expect(function(){
				var result = calculator.Min(['string value', 2]);
			}).toThrow();
		});
	});
	
	describe("Maximum", function(){
		it("should have minimum value 10 of 4,10,6,7,3,8",function(){
			var expected = 10;
			var values = [4,10,6,7,3,8];
			var result = calculator.Max(values);
			expect(result).toBe(expected);
		});
		
		
		it("should throw exception, if values other than number are used, as Max(['string value', 2])", function(){			
			expect(function(){
				var result = calculator.Max(['string value', 2]);
			}).toThrow();
		});
	});
	
	describe("Method 'Get Quotes by name'", function(){
		
		it("should get quotes for 'GOOGL', check data received and with same symbol 'GOOGL'", function(){
			var value = "";
			expect(function(){
				var name = 'GOOGL';
				var result = calculator.getQuotesByName(name);			
				var symbol = result.query.results.quote.symbol;
				expect(symbol).toBeDefined();
				expect(symbol).toBe(name);
			}).not.toThrow();			
		});
		
		it("should throw exception for 'GOO fjfkejkfjekfjek', as not a quote symbol", function(){
			var value = "";
			expect(function(){
				var name = 'GOO fjfkejkfjekfjek';
				var result = calculator.getQuotesByName(name);			
				var symbol = result.query.results.quote.symbol;
				expect(symbol).not.toBeDefined();
			}).not.toThrow();			
		});
	});
});