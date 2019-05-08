/*********************************************************************************
*		WEB222	–	Assignment	02
*		I	declare	that	this	assignment	is	my	own	work	in	accordance	with	Seneca		Academic	Policy.	
*		No	part	of	this	assignment	has	been	copied	manually	or	electronically	from	any	other	source
*		(including	web	sites)	or	distributed	to	other	students.	
*		
*		Name:	_Abiodun_Oke___	Date:	_01 MAR_2018__
*
********************************************************************************/

/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];


 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

var newCustomer = [
    {type: "customer", data: {customer_id: 80, store_id:193, first_name: "Stephen", last_name: "Oke", email: "stepsyd@gmail.com", address_id: 4536, add_date: null}},
];
var newAddress = [
    {type: "address", data: {address_id: 2525, address:"12, Fred Way St. Apt 56", city: "Charlton", province: "ON", postal_code: "L783T6" }},
];
var newStore = [
    {type: "store", data: {store_id: 200, name:"Grundson Park - Hawlette", address_id: 2525 }},
];

 var add_temp = '';
 var store_temp = ''; 
 var removed = false;
 var removedStore = false;


 var CustomerDB = {
 
    customers: [],
    addresses: [],
    stores: [],
     
     
//  1) insertData(allData)
     
    insertData: function(Obj){
       
        Obj.forEach((element, index, array) => {
            if(element.type == 'customer'){   
                var today = new Date();
                element.data.add_date = today;
                CustomerDB.customers.push(element.data);  
            }else if(element.type == 'store'){
                CustomerDB.stores.push(element.data); 
            }else if(element.type == 'address'){
                CustomerDB.addresses.push(element.data);     
            }
        });
        
    },
//     Methods for Customer Object
     
//     2) addCustomer(customerObj) 
     
    addCustomer: function(Obj){
        Obj.forEach((element,index,array) => {
            if(element.type !== 'customer'){
                console.log("Customer object is required");
            }else{
                var today = new Date();
                element.data.add_date = today;
                this.customers.push(element.data);
            }
        });
    },
   
   
//   Helping methods
    getAddressById_: function(address_id){
        
    CustomerDB.addresses.forEach((element,index,array) => {
        if(element.address_id == address_id){
           add_temp = element.address +" "+element.city+", "+ element.province + "."+element.postal_code;
        }
       });
          return add_temp;
    },
    getStoreById_: function(store_id){
        
    CustomerDB.stores.forEach((element) => {
        if(element.store_id == store_id){
           store_temp = element.name;
        }
       });
          return store_temp;
    },
//    End helping method block
   
   
   
//     3) outputCustomerById(customer_id)
     
    outputCustomerById: function(customer_id){
        this.customers.forEach((element) =>{
           if(element.customer_id == customer_id){
              console.log("Customer "+element.customer_id+":"+ element.first_name +" "+ element.last_name + " "+"(" +element.email+") \n" + 
                          "Home Address: "+ this.getAddressById_(element.address_id)  + "\n"+ "Joined:" + element.add_date );
           } 
        })
    },
//     4) outputAllCustomers()
     
    outputAllCustomers: function(){
        console.log('All Customers');
        this.customers.forEach((element) => {
             console.log("Customer "+element.customer_id+":"+ element.first_name +" "+ element.last_name + " "+"(" +element.email+") \n" + 
                          "Home Address: "+ this.getAddressById_(element.address_id)  + "\n"+ "Joined:" + element.add_date );
        })
    },
//     5) outputCustomersByStore(store_id)
     
    outputCustomersByStore: function(store_id){
        console.log("Customers in Store: "+this.getStoreById_(store_id));
        this.customers.forEach((element) => {
            if(element.store_id == store_id){
                
                console.log("Customer "+element.customer_id+":"+ element.first_name +" "+ element.last_name + " "+"(" +element.email+") \n" + 
                          "Home Address: "+ this.getAddressById_(element.address_id)  + "\n"+ "Joined:" + element.add_date );
            }
        })
    },
//     6) removeCustomerById(customer_id)
     
    removeCustomerById: function(customer_id){
        var count;
        var remove;
    
          for(var i = 0; i < this.customers.length;i++){
              if(customer_id == this.customers[i]['customer_id']){
                 
                  var t = this.customers[i]['address_id'] ;
                  count = CustomerDB.customers.reduce(function(n,x){
                    return n + (x.address_id == t  );
                   },0);
                  
                  if(count > 1){
//                       console.log("We can only remove Customer but not Address");
                      var remove = this.customers.splice(i,1);
                  }else{
//                       console.log("We can remove Customer and Address");
                      var remove = this.customers.splice(i,1);
                      this.removeAddressById(t);
//                       console.log(remove);
                  }
                  
              }
          }
    },
    
     
//      Methods to work with "address" data
//      7) addAddress(addressObj)
    addAddress: function(addressObj){
        addressObj.forEach((element,index,array) => {
            if(element.type !== 'address'){
                console.log("Customer object is required");
            }else{
                this.addresses.push(element.data);
            }
        });
    },
//      8) getAddressById(address_id)
     getAddressById: function(address_id){
         this.addresses.forEach((element) =>{
           if(element.address_id == address_id){
              console.log(element);
           } 
        })
     },
//      9) outputAllAddresses()
     outputAllAddresses: function(){
         console.log('All Addresses');
        this.addresses.forEach((element) => {
             console.log("Address "+element.address_id+":"+ element.address +" "+element.city+", "+element.province+ ". "+ element.postal_code);
        })
     },
//      10) removeAddressById(address_id)
     removeAddressById: function(address_id){
        
         for(var j = 0;j < this.addresses.length; j++){
             if(address_id == this.addresses[j].address_id){
                 this.addresses.splice(j,1);
             }
         }
         
         for(var k = 0;k < this.stores.length; k++){
             if(address_id == this.stores[k].address_id){
                 this.stores.splice(k,1);
             }else{
//                  Do nothing
             }
         }
      
     },
     
//      Methods to work with store
//      11) addStore(storeObj)
     addStore: function(storeObj){
         storeObj.forEach((element,index,array) => {
            if(element.type !== 'store'){
                console.log("Store object is required");
            }else{
                this.stores.push(element.data);
            }
        });
     },
//      12) getStoreById(store_id)
     getStoreById: function(store_id){
         this.stores.forEach((element) =>{
           if(element.store_id == store_id){
              console.log(element.name);
           } 
        });
     },
//      13) outputAllStores()
     outputAllStores: function(){
        console.log('All Stores');
        this.stores.forEach((element) => {
             console.log("Store "+element.store_id+ ":" + element.name +"\n"+" Location: "+ this.getAddressById_(element.address_id));
        })
     }
     
    
 };


// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 


//allow pasting;