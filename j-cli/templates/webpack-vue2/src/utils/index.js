export const extend = ( dest, ...sources ) => {
    const obj = sources[ 0 ];
    for ( const property in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, property ) ) {
            dest[ property ] = obj[ property ];
        }
    }
    if ( sources.length > 1 ) {
        return extend( dest, ...sources.splice( 1, sources.length - 1 ) );
    }
    return dest;
};

