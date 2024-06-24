// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

   //To stored the value Returned From Central, the database (db1, db2, db3)
   let valueReturnedFromCentral = "";

   //Storing the result returned from fuction central in database.js 
   let db = central(id);

   //then then then 
   db.then(result => {
   valueReturnedFromCentral = result;
   
   //Showing the returned object 
   dbs[valueReturnedFromCentral](id).then(result=>{
      console.log(result);
   })
})
}

getUserData(7);