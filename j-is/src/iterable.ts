import isFunction from './function'
export default ( arg: unknown ): boolean => {
    return isFunction( (arg as any)[ Symbol.iterator ] )
}
