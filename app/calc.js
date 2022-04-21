"use strict"

const createCalculator = () => {
    let result = 0;
  
    return{
      set: function(value){
        return result = value;
      },

      add: function (value) {
        return result += value;
      },
  
      sub: function (value) {
        return result -= value;
      },
  
      div: function (value) {
        return result /= value;
      },
  
      mult: function (value) {
        return result *= value;
      }
    };
};
  


module.exports = createCalculator();