let myModule = (function () {
  //private variables / functions go here
  let myArray = ["One", "Two", "Three"];
  let secretItem = "Four";
  let getArrayNumber = function () {
    console.log(myArray.length);
  };
  let mySecretArray = function (newItem) {
    secretItem = newItem;
    myArray.push(newItem);
  };
  return {
    //the variables get returned here
    getArray: mySecretArray, //adds new item name to collection
    length: getArrayNumber, //returns number of items in collection
    setArray: function (item) {
      setArraySecret(item);
    },
  };
})();

myModule.getArray();
myModule.length();
