export const styles = theme => ({
    main: {
        width: 'auto',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
    },
    paper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 0px 10px 1px rgba(165, 175, 186, 0.16)',
        width: '560px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '40px 32px 40px 32px',

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    textField: {
        width: '100%',
        boxShadow: '0 0 2px rgba(165, 175, 186, 0.5)',
    },
    submit: {
        marginTop: theme.spacing(3),
    },
    cssLabel: {
        '&$cssFocused': {
            color: '#333333',
            fontFamily: 'Avenir',
            fontSize: '17px',
            fontWeight: 'Medium',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
        },
    },
    cssFocused: {},
});