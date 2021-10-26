import {
    ExtendFn,
    Field
} from '../types'
import Mock from 'mockjs'

const Random = Mock.Random

export const extend: ExtendFn = (dest, ...sources) => {
    const obj = sources[0]
    for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            dest[property] = obj[property]
        }
    }
    if (sources.length > 1) {
        return extend(dest, ...sources.splice(1, sources.length - 1))
    }
    return dest
}


export const mockFn: (fieldArray: Field[]) => unknown = ( fieldArray) => {

    fieldArray.forEach(field => {
        let fieldType = field.fieldType.toLowerCase()
        switch (fieldType) {
            case 'string':
                mockString(field.fieldName, field.fieldNumber, field.fieldValue)
                break;
            case 'number':
                mockNumber(field.fieldName, field.fieldNumber, field.fieldValue)
                break;
            case 'boolean':
                mockBoolean(field.fieldName, field.fieldNumber, field.fieldValue)
                break;
            case 'undefined':
                mockUndefined(field.fieldName, field.fieldNumber, field.fieldValue)
                break;
            case 'null':
                mockNull(field.fieldName, field.fieldNumber, field.fieldValue)
                break;
            case 'array':
                mockArray(field.fieldName, field.fieldNumber, field.fieldValue)
                break
        }
    })
}

function mockString (fieldName: string, fieldNumber: string, fieldValue: string) {

    const mockValue: string = fieldValue ? fieldValue : Random.string()
    const result = Mock.mock({
        fieldName: mockValue
    })

    return result
}

function mockNumber (fieldName: string, fieldNumber: string, fieldValue: string) {

    const mockValue: number = fieldValue ? Number(fieldValue) : Random.integer()
    const result = Mock.mock({
        [fieldName]: mockValue
    })
    return result
}

function mockBoolean (fieldName: string, fieldNumber: string, fieldValue: string) {

    const mockValue: boolean = fieldValue !== 'false' &&  fieldValue !== '' ? true : false
    const result = Mock.mock({
        [fieldName]: mockValue
    })
    return result
}

function mockUndefined (fieldName: string, fieldNumber: string, fieldValue: string) {
    
    const mockValue: undefined = undefined
    const result = {
        [fieldName]: mockValue
    }
    return result
}

function mockNull (fieldName: string, fieldNumber: string, fieldValue: string) {
    
    const mockValue: null = null
    const result = {
        [fieldName]: mockValue
    }
    return result
}

function mockArray (fieldName: string, fieldNumber: string, fieldValue: string) {

    if (!fieldNumber) {
        return {
            [fieldName]: []
        }
    }
}
