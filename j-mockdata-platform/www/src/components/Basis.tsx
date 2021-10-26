import React from 'react'
import Grid from '@material-ui/core/Grid';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ClearIcon from '@material-ui/icons/Clear';
import ForwardIcon from '@material-ui/icons/Forward';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { BasisComponentProps } from '../types'


const useStyles = makeStyles( (theme) => ({
    eyeIcon: {
        cursor: 'pointer',
        marginRight: theme.spacing(2)
    },
    clearIcon: {
        cursor: 'pointer',
        marginRight: theme.spacing(2)
    },
    forWardIcon: {
        cursor: 'pointer',
    },
    text: {
        marginRight: theme.spacing(2)
    }
}))


export default function Basis (props: BasisComponentProps) {

    const classes = useStyles();

    const { className, remove, field, handleChange, handleForwardClick } = props

    const disableText = (type: string) => {

        const fieldNumberTypes = ['string', 'number', 'boolean', 'undefined', 'null']

        const fieldValueTypes = ['undefined', 'null', 'array']
            
        if (type === 'fieldNumber') {
            return fieldNumberTypes.includes(field.fieldType.toLowerCase())
        } else if (type === 'fieldValue') {
            return fieldValueTypes.includes(field.fieldType.toLowerCase())
        }

    }

    const forWardIconShow = () => {
        const forWardIconTypes = ['array']
        return forWardIconTypes.indexOf(field.fieldType) > -1 && field.fieldNumber
    }

    return (
        <Grid
            container
            alignItems="center"
            className={className}
        >
            <TextField
                variant="outlined"
                name="fieldName"
                required
                label="fieldName"
                size="small"
                className={classes.text}
                onChange={handleChange}
                value={field.fieldName}
            />
            <TextField
                variant="outlined"
                name="fieldType"
                required
                label="fieldType"
                size="small"
                className={classes.text}
                onChange={handleChange}
                value={field.fieldType}
            />
            <TextField
                variant="outlined"
                name="fieldNumber"
                required
                label="fieldNumber"
                size="small"
                className={classes.text}
                onChange={handleChange}
                value={field.fieldNumber}
                disabled={disableText('fieldNumber')}
            />
            <TextField
                variant="outlined"
                name="fieldValue"
                required
                label="fieldValue"
                size="small"
                className={classes.text}
                onChange={handleChange}
                value={field.fieldValue}
                disabled={disableText('fieldValue')}
            />
            <RemoveRedEyeIcon
                className={classes.eyeIcon}
            />
            <ClearIcon
                className={classes.clearIcon}
                onClick={remove}
            />
            {
                forWardIconShow() ? (
                    <ForwardIcon
                        className={classes.forWardIcon}
                        onClick={handleForwardClick}
                    />
                ) : null
            }
        </Grid>
    )
}
