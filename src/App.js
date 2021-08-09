import '@fontsource/roboto';
import './css/styles.css';

import Grid from "@material-ui/core/Grid";
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import React from 'react';
import woman from './photos/woman.png';

const ResumePage = () => {
    return (
        <Grid Container>
            <div>
                <NavigationBar logoPic={woman}/>
                <Intro />
            </div>
        </Grid>
        );
}
export default ResumePage;
