import axios from 'axios';
// import HttpCode from '@j-xushijie/j-http-code';
// const code = new HttpCode()

const instance = axios.create( {
    timeout: 50000,
} );

const map = new Map();

const addMember = () => {
    map.set( '/dpss_sug/sug/', ( res ) => res.data.sug_list );
};

addMember();


const interceptRequest = instance.interceptors.request.use( function( request ) {
    return request;
}, function( error ) {
    return Promise.reject( error );
} );


const interceptResponse = instance.interceptors.response.use( function( response ) {
    const url = new URL( response.config.url );
    const callback = map.get( url.pathname );
    return callback ? callback( response ) : response.data;
}, function( error ) {
    return Promise.reject( error );
} );

export default instance;
