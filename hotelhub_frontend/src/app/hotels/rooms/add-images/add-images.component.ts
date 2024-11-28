import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomserviceService } from 'src/app/hotelservices/roomservice.service';

interface ImageFile {
  file: File | null;
}

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.css']
})
export class AddImagesComponent {
  roomId: string = '';
  images: any[] = [];
  newImageFiles: ImageFile[] = [];

  constructor(
    private roomservice: RoomserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id') || '';
    this.loadRoomImages();
  }

  // Load existing images for the room
  loadRoomImages() {
    this.roomservice.getRoomImages(this.roomId).subscribe(
      (data) => {
        this.images = data.$values;
      },
      (error) => {
        console.error('Error loading room images:', error);
      }
    );
  }

  // Handle image file input change
  onImageFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.newImageFiles[index].file = file; // Update file in the specific index
    }
  }

  // Add new image input field
  addNewImageInput() {
    this.newImageFiles.push({ file: null }); // Add a placeholder for a new image input
  }

  // Delete image
  deleteImage(imageId: string) {
    this.roomservice.deleteRoomImages(imageId).subscribe(
      () => {
        this.loadRoomImages(); // Reload images after deletion
      },
      (error) => {
        console.error('Error deleting image:', error);
      }
    );
  }

  // Upload images along with roomId
  uploadImages() {
    const formData = new FormData();

    formData.append('roomId', this.roomId);

    this.newImageFiles.forEach((imageFile) => {
      if (imageFile.file) {
        formData.append('images', imageFile.file, imageFile.file.name);
      }
    });

    // Make the HTTP request to upload images
    this.roomservice.addRoomImages(formData).subscribe(
      (response) => {
        // console.log('Images uploaded successfully:', response);
        this.loadRoomImages();

      },
      (error) => {
        console.error('Error uploading images:', error);
      }
    );
  }
}
