//In knexfile.js
//    remove staging and development keys
//    add useNullAsDefault : true
//    give the database name for connection in filename
//         Here it will be './smurfs.db' if database somewhere on another computer need to give that path for connection.


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './smurfs.db',
    }
  },
  
  useNullAsDefault : true,
  
};
