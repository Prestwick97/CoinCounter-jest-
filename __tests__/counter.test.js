import { Counter } from './../src/counter.js';

describe('Counter', () => {

  test('should return error message if argument is not a number', () => {
    var counter = new Counter("hello");
    expect(counter.toEqual("invalid input"));
  });

  // test('should return error message if arguments are not a number with 0-2 decimal places', () => {
  //   var counter = new Counter(5.987)
  // });
});