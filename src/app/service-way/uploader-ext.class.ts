import { UploaderX } from '../../uploadx';

export class UploaderExt extends UploaderX {
  onCancel() {
    console.log('Canceled');
  }
}
