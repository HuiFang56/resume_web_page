import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

const SelfIntro = ({logoPic}) => {
    const classes = useStyles();
    return (
        <Grid Container>
            <div>
            <Paper className={classes.paper}>item</Paper>
            </div>
        </Grid>
        )
}
 export default SelfIntro;