import { Component } from '@angular/core';
import { RoomcategoryserviceService } from 'src/app/adminservices/roomcategoryservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-editroomcategory',
  templateUrl: './editroomcategory.component.html',
  styleUrls: ['./editroomcategory.component.css']
})
export class EditroomcategoryComponent {
  categories:any = {}

  constructor(private roomcategoryservice: RoomcategoryserviceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id') || '';
    this.roomcategoryservice.editCategory(categoryId).subscribe((data) => {
      this.categories = data;
    })
  }

  onSubmit()
  {
     this.roomcategoryservice.updateCategory(this.categories.id,this.categories).subscribe(() => {
      this.router.navigate(['/displaycategory']);
     })
  }
}
