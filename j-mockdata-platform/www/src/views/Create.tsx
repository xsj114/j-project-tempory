import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Basis from '../components/Basis'
import Header from '../components/Header'
import Button from '@material-ui/core/Button'
import { mockFn } from '../util/'

import { makeStyles } from '@material-ui/core/styles';
import { Field } from '../types'


const useStyles = makeStyles( (theme) => ({
    basis: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(3)
    },
    addButton: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2)
    },
    generateButton: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2)
    }
}))

const field: Field = {
    fieldName: '',
    fieldType: '',
    fieldValue: '',
    fieldNumber: ''
}

export default function Create () {

    const classes = useStyles();

    let history = useHistory()

    const [ fieldArray, setArrayNumber ] = useState([field])
    
    const handleButtonClick = () => {
        const newFieldArray = fieldArray.map(ele => ele)
        newFieldArray.push(field)
        setArrayNumber(newFieldArray)
    }

    const handleRemoveField = (currentIndex: number) => {
        const newFieldArray = fieldArray.filter((ele, index) => currentIndex !== index) 
        setArrayNumber(newFieldArray)
    }

    const handleChange: (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => void = (event, currentIndex) => {

        const newFieldArray = fieldArray.map((ele: Field, index) => {
            if (index === currentIndex) {
                const data: Field = Object.assign({}, ele, {
                    [event.target.name]: event.target.value
                })
                return data
            }
            return ele 
        })
        setArrayNumber(newFieldArray)
    }

    const handleGenerate = () => {
        mockFn(fieldArray)
    }

    const handleForwardClick = (field: Field) => {
        const {fieldName} = field
        history.push(`/create/${fieldName}`)
    }


    return (
        <>
            <Header/>
            {
                fieldArray.map((ele, index) => {
                    return (
                        <Basis
                            className={classes.basis}
                            key={index}
                            remove={()=>handleRemoveField(index)}
                            field={ele}
                            handleChange={(event: React.ChangeEvent<HTMLInputElement>)=>handleChange(event, index)}
                            handleForwardClick={()=>handleForwardClick(ele)}
                        />
                    )
                })
            }
            <Button
                variant="contained"
                color="primary"
                className={classes.addButton}
                onClick={handleButtonClick}
            >
                ADD FIELD 
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.generateButton}
                onClick={handleGenerate}
            >
                GENERATE     
            </Button>
        </>
    )
}
