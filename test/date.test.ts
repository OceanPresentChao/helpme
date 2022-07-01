import { describe, expect, it } from 'vitest'
import { isDateValid } from '../src/date'
describe('should', () => {
    it('exported', () => {
        expect(isDateValid(1995, 11, 17)).toEqual(true)
    })
})