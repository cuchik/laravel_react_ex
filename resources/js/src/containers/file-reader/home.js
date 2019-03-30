import React from 'react';

import { withStyles } from '@material-ui/core';
import Header from './../../components/layouts/header';
import MainContent from '../../components/layouts/main-content';

const styles = theme => ({
  mainContent: {
    flex: 1,
    padding: '20px 36px',
    background: 'white',
  },
});

const FileReaderHome = ({classes}) => {
  return (
    <>
      <Header>
        Document Container
      </Header>
      <MainContent>
        <h1>Please choose your document and view detail. If you did not have any result, please upload new file!</h1>
      </MainContent>
    </>
  );
}

export default withStyles(styles)(FileReaderHome);