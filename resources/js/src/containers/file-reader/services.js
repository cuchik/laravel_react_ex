import { BaseService } from "../../service/base.service";
import { FileReaderUrl } from '../../common/urls/file-reader';

export class FileReaderService extends BaseService {
  /**
   *
   */
  constructor(path) {
    super(path);
  }

  fetchFileReader(param) {
    return super.select(FileReaderUrl.Fetch)
      .then((response) => {
       return response
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error)
      })
  }

  fetchDetail(param) {
    return super.select(FileReaderUrl.Fetch + param)
      .then((response) => {
       return response
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error)
      })
  }

  uploadFile(data) {
    return super.post(FileReaderUrl.Fetch, data)
      .then((response) => {
       return response
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error)
      })
  }
}