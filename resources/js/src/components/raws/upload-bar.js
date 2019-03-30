import React from 'react';

const UploadBar = ({onChangeFile}) => {
  const openUpload = () => {
    document.getElementById('upload').click();
    return false;
  }
  const handleChange = (event) => {
    const file = event.target.files[0];
    onChangeFile(file);
  }
  return (
    <div className="upload-bar">
      <span className="upload-bar__heading">Files</span>
      <span className="upload-bar__button" onClick={openUpload}>Upload <i className="fas fa-upload"></i></span>
      <form encType="multipart/form-data">
        <input type="file" name="file" className="upload-bar__input" id="upload" onChange={handleChange} accept=".txt, text/html"/>
      </form>
    </div>
  );
}

export default UploadBar;