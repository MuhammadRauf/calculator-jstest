function Calculator() {
}

Calculator.prototype.Plus = function(a, b) {
	if(!(typeof a === 'number')){
		throw new Error("The first argument should be of type number");
	}
	if(!(typeof b === 'number')){
		throw new Error("The second argument should be of type number");
	}
	var result = a + b;
	return result;
};

Calculator.prototype.Minus = function(a, b) {
	if(!(typeof a === 'number')){
		throw new Error("The first argument should be of type number");
	}
	if(!(typeof b === 'number')){
		throw new Error("The second argument should be of type number");
	}
	var result = a - b;
	return result;
};

Calculator.prototype.Divide = function(a,b) {
	if(!(typeof a === 'number')){
		throw new Error("The first argument should be of type number");
	}
	if(!(typeof b === 'number')){
		throw new Error("The second argument should be of type number");
	}
	if(b === 0){
		throw new Error("The operation not allowed, to be divided by zero!");
		return;
	}
	var result = a / b;
	return result;
}

Calculator.prototype.Average = function(list){
	if(!(list instanceof Array)){
		throw new Error("The argument should be list of type Array");
	}
	if(list.length == 0){
		return 0;				
	}
	
	var sum = 0;
	var value = 0;
	for(i=0; i<list.length;i++){
		value = list[i];
		if(!(typeof value === 'number')){
			throw new Error("The list should have all elements of type Number");
		}
		sum += value;
	}
	var average = sum / list.length;
	return average;
}

Calculator.prototype.MinMax = function(list, compare){
	if(!(list instanceof Array)){
		throw new Error("The argument should be list of type Array");
	}
	if(list.length == 0){
		return Number.MIN_VALUE;				
	}
	var value = list[0];
    if(!(typeof value === 'number')){
		throw new Error("The list should have all elements of type Number");
	} 	
	var min = value;
    for(i = 1;i<list.length;i++){
		value = list[i];
		if(!(typeof value === 'number')){
			throw new Error("The list should have all elements of type Number");
		}
		min = compare(min,value);
	} 	
	return min;
}

Calculator.prototype.Min = function(list) {
	return this.MinMax(list,function(min, value){
		if(value<min)
			min = value;
		return min;
	});
}

Calculator.prototype.Max = function(list) {
	return this.MinMax(list,function(max, value){
		if(value>max)
			max = value;
		return max;
	});
}

Calculator.prototype.getQuotesByName = function(name) {
	if(!(typeof name === 'string')){
		throw new Error("The quote name should be string");
	}	
	var quote = JSON.parse('{"empty" : "empty"}');
	var query = 'select * from yahoo.finance.quotes where symbol in ("'+name+'")';	
	jQuery.ajaxSetup({async:false});	
	$.get("https://query.yahooapis.com/v1/public/yql",
	{
		q: query,
        format: 'json',
		env: 'store://datatables.org/alltableswithkeys',
		callback: ''	        		
		
	}, function(data){
		quote = data;		
	});
	jQuery.ajaxSetup({async:true});
    return quote;	
}
