import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStylesInput = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        borderRadius: 1,
        backgroundColor: '#FFFFFF',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#FFFFFF',
        },
        '&$focused': {
            backgroundColor: '#FFFFFF',
            boxShadow: `${fade('#333333', 0.1)} 0 0  2px`,
            borderColor: '#FFFFFF',
        },
    },
    focused: {},
}));

export const TextFieldInput = (props) => {
    const classes = useStylesInput();

    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}
