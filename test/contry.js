var chakram = require('./../lib/chakram.js'),
    expect = chakram.expect;
	

describe("Countries API", function () {
	before("Call API", function () {
		countries = chakram.get("https://restcountries.eu/rest/v1/all");
    });
	
	it("should return 200 on success", function () {
		return expect(countries).to.have.status(200);
	});
});