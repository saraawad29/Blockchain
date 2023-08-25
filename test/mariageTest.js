const Marriage = artifacts.require("Marriage");

contract("Marriage", function (accounts) { 
  let marriageInstance;  //creation d'un varible

  beforeEach(async () => {  // pour faire des actions avant chaque test
    marriageInstance = await Marriage.new();
  });

  it("should create a marriage", async () => {
    const partner1 = accounts[0];
    const partner2 = accounts[1];
    const result = await marriageInstance.createMarriage(partner1, partner2);
    assert.equal(result, "Felicitations");
  });

  it("should grant a divorce", async () => {
    await marriageInstance.createMarriage(accounts[0], accounts[1]);
    const result = await marriageInstance.divorce();
    assert.equal(result, "Divorce accorde");
  });
});

