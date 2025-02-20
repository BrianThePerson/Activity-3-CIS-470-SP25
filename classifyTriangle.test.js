
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      //test at extremes / boundary values
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
      expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
      expect(classifyTriangle(199, 199, 199)).toBe('Equilateral');
      //test a few more in-range values
      expect(classifyTriangle(25, 25, 25)).toBe('Equilateral');
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
      expect(classifyTriangle(150, 150, 150)).toBe('Equilateral');
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      //test around boundaries
      expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 201, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(0, 0, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //test negative value handling
      expect(classifyTriangle(-1, -1, -1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 200, -1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(-1, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      //test more extreme out-of-range values
      expect(classifyTriangle(250, 300, 400)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(0, -100, -200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
      expect(classifyTriangle(2, 5, 8)).toBe('Not a Triangle');
      expect(classifyTriangle(1, 10, 12)).toBe('Not a Triangle');
      expect(classifyTriangle(200, 195, 2)).toBe('Not a Triangle');
    });
  });
  