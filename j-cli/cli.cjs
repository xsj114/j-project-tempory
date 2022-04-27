#!/usr/bin/env node

const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
const path = require( 'path' );
const process = require( 'process' );
const { exec } = require( 'child_process' );
const { commonQuestions } = require( './config/question/question-common.cjs' );
const vueQuestions = require( './config/question/question-vue.cjs' );
const reactQuestions = require( './config/question/question-react.cjs' );

let questions = [];

inquirer.prompt( commonQuestions ).then( ( answers ) => {
    switch ( answers['frameType'] ) {
    case 'vue':
        questions = questions.concat( vueQuestions );
        break;
    case 'react':
        questions = questions.concat( reactQuestions );
        break;
    }

    return inquirer.prompt( questions );
} ).then( ( { version } ) => {
    switch ( version ) {
    case 2:
        break;
    case 3:
        const templatePath = path.join( __dirname, './templates/webpack-vue3' );
        generateProject( templatePath );
        break;
    }
} );

const generateProject = ( templatePath ) => {
    const destDir = process.cwd();

    const rootStats = fs.statSync( templatePath );
    if ( rootStats && !rootStats.isDirectory() ) throw 'Template path must be a folder';

    fs.mkdirSync( path.join( destDir, 'vue3' ) );

    const generateFile = ( { sourcePath, targetPath, fileName } ) => {
        fs.readFile( sourcePath, { encoding: 'utf8' }, ( err, data ) => {
            if ( err ) throw err;
            fs.writeFile( targetPath, data, ( err ) => {
                if ( err ) throw err;
                if ( fileName === 'package.json' ) {
                    exec( 'cd vue3 && npm i', ( err, stdout, stderr ) => {
                        if ( err ) throw err;
                    } );
                }
            } );
        } );
    };

    const generateDir = ( templatePath, prevDir ) => {
        const files = fs.readdirSync( templatePath );
        for ( const file of files ) {
            const sourcePath = path.join( templatePath, file );
            fs.stat( sourcePath, ( err, stats ) => {
                if ( err ) throw err;
                const targetPath = `${prevDir}/${file}`;
                if ( stats.isDirectory() ) {
                    fs.mkdirSync( path.join( destDir, targetPath ) );
                    generateDir( sourcePath, targetPath );
                }
                if ( stats.isFile() ) {
                    generateFile( {
                        sourcePath,
                        targetPath,
                        fileName: file,
                    } );
                }
            } );
        }
    };

    // generate template directory structure
    generateDir( templatePath, 'vue3' );
};

