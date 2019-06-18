import React, { useState } from 'react'
import { Typography, Paper } from '@material-ui/core'
import Button from '../../commun/Button'
import ClickedText from '../../commun/ClickedText'
import { TextFieldInput } from '../../commun/textFieldInput'
import withStyles from '@material-ui/core/styles/withStyles'
import { validateLoginForm } from "../../../utils/Helpers"
import { withRouter } from 'react-router-dom'
import { styles } from './styles'


function Login(props) {
    const { classes } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Typography component="h2">
                    Connecter-vous à votre compte
       			</Typography>
                <form className={classes.form} onSubmit={e => {
                    e.preventDefault();
                    if (validateLoginForm(email, password)) {
                        props.history.push('/profile')
                    }
                }}>
                    <TextFieldInput
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id="outlined-email-input"
                        label="Email"
                        InputLabelProps={{
                            classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            },
                        }}
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                    <TextFieldInput
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        id="outlined-password-input"
                        label="Password"
                        InputLabelProps={{
                            classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            },
                        }}
                        className={classes.textField}
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
                        <Button
                            children={"S’inscrire"}
                            type="submit"
                            color="#E91D3D"
                            padding="22px 74px 22px 74px"
                            background="rgba(233, 29, 61, 0.05)"
                            fontWeigh="Bold"
                            marginbottom="14px"
                        />

                        <ClickedText
                            children="Mot de passe oublier ?"
                            fontSize='16px'
                            fontWeigh="Medium"
                            handleFocus={() => {
                                alert("Mot de passe oublier ?")
                            }} />
                    </div>
                </form>
            </Paper>
        </main >
    )
}

export default withRouter(withStyles(styles)(Login))