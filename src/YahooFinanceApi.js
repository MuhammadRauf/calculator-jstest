function YahooFinanceApi(mock) {
	
	this.mock = mock;	
	this.quote = '{"query":{"count":1,"created":"2017-02-23T07:38:07Z","lang":"en-US","results":{"quote":{"symbol":"GOOGL","Ask":"851.41","AverageDailyVolume":"1656790","Bid":"851.25","AskRealtime":null,"BidRealtime":null,"BookValue":"201.12","Change_PercentChange":"+2.09 - +0.25%","Change":"+2.09","Commission":null,"Currency":"USD","ChangeRealtime":null,"AfterHoursChangeRealtime":null,"DividendShare":null,"LastTradeDate":"2/22/2017","TradeDate":null,"EarningsShare":"27.88","ErrorIndicationreturnedforsymbolchangedinvalid":null,"EPSEstimateCurrentYear":"33.45","EPSEstimateNextYear":"39.07","EPSEstimateNextQuarter":"8.10","DaysLow":"846.71","DaysHigh":"853.79","YearLow":"672.66","YearHigh":"867.00","HoldingsGainPercent":null,"AnnualizedGain":null,"HoldingsGain":null,"HoldingsGainPercentRealtime":null,"HoldingsGainRealtime":null,"MoreInfo":null,"OrderBookRealtime":null,"MarketCapitalization":"588.65B","MarketCapRealtime":null,"EBITDA":"29.86B","ChangeFromYearLow":"178.70","PercentChangeFromYearLow":"+26.57%","LastTradeRealtimeWithTime":null,"ChangePercentRealtime":null,"ChangeFromYearHigh":"-15.64","PercebtChangeFromYearHigh":"-1.80%","LastTradeWithTime":"4:00pm - <b>851.36</b>","LastTradePriceOnly":"851.36","HighLimit":null,"LowLimit":null,"DaysRange":"846.71 - 853.79","DaysRangeRealtime":null,"FiftydayMovingAverage":"831.13","TwoHundreddayMovingAverage":"807.89","ChangeFromTwoHundreddayMovingAverage":"43.47","PercentChangeFromTwoHundreddayMovingAverage":"+5.38%","ChangeFromFiftydayMovingAverage":"20.23","PercentChangeFromFiftydayMovingAverage":"+2.43%","Name":"Alphabet Inc.","Notes":null,"Open":"848.00","PreviousClose":"849.27","PricePaid":null,"ChangeinPercent":"+0.25%","PriceSales":"6.50","PriceBook":"4.22","ExDividendDate":null,"PERatio":"30.54","DividendPayDate":null,"PERatioRealtime":null,"PEGRatio":"1.32","PriceEPSEstimateCurrentYear":"25.44","PriceEPSEstimateNextYear":"21.79","Symbol":"GOOGL","SharesOwned":null,"ShortRatio":"1.66","LastTradeTime":"4:00pm","TickerTrend":null,"OneyrTargetPrice":"990.84","Volume":"1140851855","HoldingsValue":null,"HoldingsValueRealtime":null,"YearRange":"672.66 - 867.00","DaysValueChange":null,"DaysValueChangeRealtime":null,"StockExchange":"NMS","DividendYield":null,"PercentChange":"+0.25%"}}}}';	
	this.null_quote_start = '{"query":{"count":1,"created":"2017-02-23T08:06:38Z","lang":"en-US","results":{"quote":{"symbol":"';
	this.null_quote_end = '","Ask":null,"AverageDailyVolume":null,"Bid":null,"AskRealtime":null,"BidRealtime":null,"BookValue":null,"Change_PercentChange":null,"Change":null,"Commission":null,"Currency":null,"ChangeRealtime":null,"AfterHoursChangeRealtime":null,"DividendShare":null,"LastTradeDate":null,"TradeDate":null,"EarningsShare":null,"ErrorIndicationreturnedforsymbolchangedinvalid":null,"EPSEstimateCurrentYear":null,"EPSEstimateNextYear":null,"EPSEstimateNextQuarter":null,"DaysLow":null,"DaysHigh":null,"YearLow":null,"YearHigh":null,"HoldingsGainPercent":null,"AnnualizedGain":null,"HoldingsGain":null,"HoldingsGainPercentRealtime":null,"HoldingsGainRealtime":null,"MoreInfo":null,"OrderBookRealtime":null,"MarketCapitalization":null,"MarketCapRealtime":null,"EBITDA":null,"ChangeFromYearLow":null,"PercentChangeFromYearLow":null,"LastTradeRealtimeWithTime":null,"ChangePercentRealtime":null,"ChangeFromYearHigh":null,"PercebtChangeFromYearHigh":null,"LastTradeWithTime":null,"LastTradePriceOnly":null,"HighLimit":null,"LowLimit":null,"DaysRange":null,"DaysRangeRealtime":null,"FiftydayMovingAverage":null,"TwoHundreddayMovingAverage":null,"ChangeFromTwoHundreddayMovingAverage":null,"PercentChangeFromTwoHundreddayMovingAverage":null,"ChangeFromFiftydayMovingAverage":null,"PercentChangeFromFiftydayMovingAverage":null,"Name":null,"Notes":null,"Open":null,"PreviousClose":null,"PricePaid":null,"ChangeinPercent":null,"PriceSales":null,"PriceBook":null,"ExDividendDate":null,"PERatio":null,"DividendPayDate":null,"PERatioRealtime":null,"PEGRatio":null,"PriceEPSEstimateCurrentYear":null,"PriceEPSEstimateNextYear":null,"Symbol":"GOOfjfkejkfjekfjek","SharesOwned":null,"ShortRatio":null,"LastTradeTime":null,"TickerTrend":null,"OneyrTargetPrice":null,"Volume":null,"HoldingsValue":null,"HoldingsValueRealtime":null,"YearRange":null,"DaysValueChange":null,"DaysValueChangeRealtime":null,"StockExchange":null,"DividendYield":null,"PercentChange":null}}}}';
}

YahooFinanceApi.prototype.Get = function(name) {
	
	// just putting mocking function...
	if(this.mock && name === 'GOOGL')
		return JSON.parse(this.quote);	
	else if(this.mock)
		return JSON.parse(this.null_quote_start+name+this.null_quote_end);
	
	var jsobj = JSON.parse('{}');
	var query = 'select * from yahoo.finance.quotes where symbol in ("'+name+'")';	
	jQuery.ajaxSetup({async:false});	
	$.get("https://query.yahooapis.com/v1/public/yql",
	{
		q: query,
        format: 'json',
		env: 'store://datatables.org/alltableswithkeys',
		callback: ''	        		
		
	}, function(data){
		jsobj = data;		
	});
	jQuery.ajaxSetup({async:true});
    return jsobj;	
}