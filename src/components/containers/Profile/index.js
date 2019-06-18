import React, { useState, useEffect } from 'react'
import { Paper, CircularProgress } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Button from '../../commun/Button'
import ClickedText from '../../commun/ClickedText'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router-dom'
import { styles } from './styles'

function Profile(props) {
    const { classes } = props

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        name:
        {
            first: "",
            last: "",
            title: "",
        },
        nat: "",
        picture: {
            medium: "",
            thumbnail: "",
            large: ""
        },
        location: {
            city: "",
        },
        dob: {
            age: ""
        }
    });

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch('https://randomuser.me/api/');
            const json = await res.json();
            setData(json.results[0]);
            setLoading(false);
        }
        fetchData()
    }, [])

    return (
        <main className={classes.main}>
            {loading ? <CircularProgress size={80} /> :
                <Paper className={classes.paper}>
                    <div style={{
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                        backgroundColor: "#E91D3D",
                        position: 'absolute',
                        top: '-75px',
                    }}>
                        <img alt="" style={{
                            objectFit: 'cover',
                            borderRadius: '50%',
                            width: '150px',
                            height: '150px',
                        }} src={data.picture.large} />
                    </div>
                    <div style={{ marginTop: '95px' }}>
                        <div className={classes.typographyTitle}>{data.name.first + ' ' + data.name.last + ', ' + data.dob.age}</div>
                        <div className={classes.typographyTitleI}>{data.location.city + ', ' + data.nat}</div>
                        <div className={classes.typographyText}>{"Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim."}</div>
                        <div style={{ padding: '0 127px 0 127px', marginBottom: '30px' }}>
                            <Divider variant='middle' />
                        </div>
                    </div>
                    <Button
                        children="Voir Profile"
                        color="#E91D3D"
                        padding="18px 29px 18px 29px"
                        background="rgba(233, 29, 61, 0.05)"
                        fontWeigh="bold"
                        marginbottom="14px"
                        disabled={false}
                        handleFocus={() => {
                            alert("Voir Profile")
                        }} />

                    <ClickedText
                        children="Supprimer le profile"
                        fontSize='16px'
                        fontWeigh="Medium"
                        handleFocus={() => {
                            alert("Supprimer le profile")
                        }} />
                </Paper>}
        </main>
    )
}

export default withRouter(withStyles(styles)(Profile))