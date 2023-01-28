const postgres = require( "postgres" );

module.exports = {
  name: "sql",
  version: "1.0.0",
  register: async server => {

   
    const sql = postgres();

    server.decorate( "toolkit", "sql", sql ); //Add sql client to the request toolkit, so in hapi it would be h.sql
  }
};
