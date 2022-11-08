import { getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle"

test('should give properly rectangle perimeter', () =>{
    const output = getRectanglePerimeter(2, 3);
    expect(output).toBe(10);
});

test('should give properly rectangle area', () =>{
    const output = getRectangleArea(2, 3);
    expect(output).toBe(6);
});

test('should give the info about perimeter and area', () =>{
    const output = getRectangleInfo(2, 3);
    expect('The perimeter of a rectangle is ${perimeter} and the area is ${area}'); 
});
