import alt from '../alt'

export default alt.createActions(class UploadActions {
  constructor() {
    this.generateActions(
      'sendToDownloader',
      'setUploadToken',
      'uploadFile'
    )
  }
})
