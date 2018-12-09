import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChairService } from '../chair.service';
import { Chair } from '../chair';
import { Location } from '@angular/common';
import { ScreeningService } from '../screening.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'chair-edit',
  templateUrl: './chair-edit.component.html',
  styleUrls: ['./chair-edit.component.css']
})
export class ChairEditComponent implements OnInit {

  id: number=null;
  chair: Chair = new Chair();
  title='Új foglalás bejegyzése'
  url="";
  editableWhenEdit=false;
  editable=false;
  readOnly:boolean;
  readOnlyWhenEdit: boolean;
  constructor(
    private route: ActivatedRoute,
    private chairService: ChairService,
    private screeningService: ScreeningService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this. url = this.route.snapshot.url.join('');
    if(this.url.includes("screenings")){
      if(id){
        this.id = +id;
        const screening=await this.screeningService.getScreening(this.id);
        this.chair=new Chair();
        this.chair.movieTitle=screening.movieTitle;
        this.chair.roomName=screening.roomName;
        this.editable=true;
        this.title='Új foglalás bejegyzése a kiválasztott vetítéshez';
        
       }
    
  }else{
    if(id){
      this.id = +id;
      this.chair= await this.chairService.getChair(this.id);
      this.title = 'A kiválasztott foglalás módosítása';
      this.editable=true;
      this.editableWhenEdit=true;
    }
  }
  }

  async onFormSave(chair: Chair) {
    if (this.id) {
      if(this.url.includes("screenings")){
        await this.screeningService.addChairToScreening(this.id, chair);
        this.router.navigate(['/chairs']);
      }else{
      await this.chairService.modifyChair(this.id, chair)
      this.router.navigate(['/chairs']);
      
    } 
  }
  }
  
}
