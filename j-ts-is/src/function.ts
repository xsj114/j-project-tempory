import isAsyncFunction from './async-function'
export default ( arg: unknown ): arg is ( args: unknown[] ) => any => {
    return ({}).toString.call( arg ) === '[object Function]' || isAsyncFunction( arg )
}
