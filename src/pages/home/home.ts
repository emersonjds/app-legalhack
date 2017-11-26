import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage   {

  public image: string;

  constructor(public navCtrl: NavController,    private camera: Camera){

  }

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(err);
      });
  }


}
