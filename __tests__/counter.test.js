import { Counter } from './../src/counter.js';
import { OtherCounter } from './../src/counter.js';

describe('Counter', () => {

  test('should return error message if argument is not a number', () => {
    var counter = Counter("hello");
    expect(counter).toBe("invalid input");
  });

  test('should return error message if arguments are not a number with 0-2 decimal places', () => {
    var counter = Counter(5.987);
    expect(counter).toBe("invalid input");
  });

  test('should return number of quarters that make up the number', () => {
    var counter = Counter(4.99);
    expect(counter[0]).toBe(19);
  });


  test('should return number of dimes that make up the number', () => {
    var counter = Counter(4.99);
    expect(counter[1]).toBe(2);
  });

  
  test('should return number of nickels that make up the number', () => {
    var counter = Counter(4.99);
    expect(counter[2]).toBe(0);
  });


  test('should return number of pennies that make up the number', () => {
    var counter = Counter(4.99);
    expect(counter[3]).toBe(4);
  });
});

describe('OtherCounter', () => {
  
  test('should return error message if arguments are not a number with 0-2 decimal places', ()=> {
    var counter = OtherCounter(5.99);
    expect(counter).toBe(23);
  });

});