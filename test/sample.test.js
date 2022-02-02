const assert = require('assert')
const {MongoClient} = require('mongodb');

describe("Connection test", function() {

  describe("Mongodb can open connection", function() {

    it("Connects and disconnects successfully", async function() {
      let openAndCloseConnection = async function() {
        let url = process.env.MONGODB_URI
    
        console.log(url)
        const client = new MongoClient(url)
        await client.connect()  
        await client.close()
      }
      assert.doesNotThrow(openAndCloseConnection)
    })
  })
})
