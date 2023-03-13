import { calculateTax } from "../src";

describe("Testes unitários da função que calcula a taxa", ()=>{
    it("deveria retonar 0 para valor menor que 2500",()=>{
        const value = generateValue(2000, 2200)
        const num = calculateTax(value)
        expect(num).toBe(0)
    })

    it("deveria retonar 0.075 do valor total do sálario",()=>{
        const value= generateValue(3000, 3100)
        const num = calculateTax(value)
        expect(num).toBe(value * 0.075)
    })

    it("deveria retonar 0.15 do valor total do sálario",()=>{
        const value= generateValue(3500, 4250)
        const num = calculateTax(value)
        expect(num).toBe(value * 0.15)
    })

    it("deveria retonar 0.225 do valor total do sálario",()=>{
        const value= generateValue(5000, 5300)
        const num = calculateTax(value)
        expect(num).toBe(value * 0.225)
    })

    it("deveria retonar 0.275 do valor total do sálario",()=>{
        const value= generateValue(6000, 8000)
        const num = calculateTax(value)
        expect(num).toBe(value * 0.275)
    })
})

function generateValue(min:number,max:number){
    const num = Math.floor(Math.random() * (max - min) + min)
    return num
}