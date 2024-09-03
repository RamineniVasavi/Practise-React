import { Sum } from '../Sum';
import "@testing-library/jest-dom"

test("testing sum function",()=>{
    const result=Sum(6,7);
    //Assertion 
    expect(result).toBe(13);
});