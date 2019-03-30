import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Header from '../../components/layouts/header'
import MainContent from '../../components/layouts/main-content'
import {fileReaderActions} from './actions';
import ActivityStatus from '../../common/enum/activity';

const styles = theme => ({
});

const _FileReaderDetail = ({classes, items, fetchDetail, fileReaderStore, ...other}) => {
  const { match } = other;
  const documentId = match.params.documentId;
  let item = fileReaderStore.fileReader;
  useEffect(() => {
    fetchDetail(documentId);
  }, [documentId]);
  return (
    <>
      <Header>
        Document #{documentId}
      </Header>
      <MainContent>
        {item && <div dangerouslySetInnerHTML={{__html: item.content}}></div>}
      </MainContent>
    </>
  );
}

const mapStateToProps = (rootReducer) => {
  return { fileReaderStore: rootReducer.fileReaderReducer };
}

const mapDispatchToProps = {
  fetchDetail: fileReaderActions.fetchDetail,
}
const FileReaderDetail = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(_FileReaderDetail));
export default FileReaderDetail;