import { Component } from '@angular/core';
import { Service } from '../../service/auth_service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  uploader: FileUploader;
  uploading: boolean = false;
  constructor(private service: Service, private router: Router) {
    this.uploader = new FileUploader({
      url: 'http://localhost:3000/sendtemp', itemAlias: 'avatar',
      method: 'POST',
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  }
  ngOnInit(): void {
    this.uploading = false;
  }
  async send() {
    this.uploading=true;
    const x = await this.uploader.uploadAll();
    // console.log(this.uploader.isUploading)
    setTimeout(() => { // allowing to upload properly
      this.router.navigate(['/graph'])
    }, 6000);
  }
}
