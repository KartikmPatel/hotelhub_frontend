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
  newImageFiles: ImageFile[] = []; // Holds the file input values

  constructor(
    private roomservice: RoomserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id') || '';
    this.loadRoomImages(); // Load existing images when the component initializes
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
      this.newImageFiles[index].file = file; // Update the file for the specific input
    } else {
      this.newImageFiles[index] = { file: null }; // Reset if no file is selected
    }
  }

  // Add a new file input field
  addNewImageInput() {
    this.newImageFiles.push({ file: null }); // Add a placeholder for a new input
  }

  // Delete an image
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

  // Upload images
  uploadImages() {
    const formData = new FormData();

    formData.append('roomId', this.roomId);

    // Append all selected files to the form data
    this.newImageFiles.forEach((imageFile) => {
      if (imageFile.file) {
        formData.append('images', imageFile.file, imageFile.file.name);
      }
    });

    // Call the service to upload the images
    this.roomservice.addRoomImages(formData).subscribe(
      (response) => {
        console.log('Images uploaded successfully:', response);
        this.loadRoomImages(); // Reload images to display the newly added ones
        this.newImageFiles = []; // Clear all the file input fields
      },
      (error) => {
        console.error('Error uploading images:', error);
      }
    );
  }
}