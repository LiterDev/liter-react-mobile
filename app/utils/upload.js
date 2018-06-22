export const FILE_UPLOAD_REQUEST = '@@@@FILE_UPLOAD_REQUEST';
export const FILE_UPLOAD_SUCCESS = '@@@@FILE_UPLOAD_SUCCESS';
export const FILE_UPLOAD_ERROR = '@@@@FILE_UPLOAD_ERROR';


// No redux-saga
function upload(endpoint, file, onProgress, onSuccess, onFailure) {
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      const progress = e.loaded / e.total;
      onProgress(progress);
    }
  });
  xhr.onreadystatechange = (e) => {
    // Handle completion and failure
  };
  xhr.open('POST', endpoint, true);
  xhr.send(file);
}

exports.upload;
