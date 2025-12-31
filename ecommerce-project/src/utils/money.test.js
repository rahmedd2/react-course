import { it, expect, describe } from 'vitest'
import { formatMoney } from "./money"


describe ("Test Suite for formatMoney Function", ()=>{
    it('Formats 199 cents as $1.99', ()=>{
    expect(formatMoney(199)).toBe('$1.99');
    })

    it('Formats 190 cents as $1.90', ()=>{
        expect(formatMoney(190)).toBe('$1.90');
    })
})