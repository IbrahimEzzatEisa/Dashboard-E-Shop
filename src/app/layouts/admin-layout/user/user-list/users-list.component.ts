import { Component, OnInit  } from '@angular/core';
import { SwalService } from '../../../../shared/services/swal.service';
import { User } from '../../../../shared/models/user.model';
import { UsersService } from '../../../../shared/services/api/users.service';
import { UserUpdate } from '../../../../shared/models/userUpdate.model';

interface JobTitle {
  Name: string; 
  NameAr: string;
}

interface roles {
  Name: string; 
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

user: User;
UserList: User[]=[]


userUpadte: UserUpdate 


JobTitle=[ 
  {
  Name: 'Admin' ,
  NameAr: 'مدير' ,

  },

  {
    Name: 'Pharmacist', 
       NameAr: 'موظف' ,

    },

    {
      Name: 'Pharmacist',   
       NameAr: 'صيدلية' ,
    },

]

roles:any =[
  
]
userJob:string;
  constructor(private swalService: SwalService,
    private userServices: UsersService ) {  }


  ngOnInit(): void {
 this.user = new User()

 this.userUpadte = new UserUpdate();
 this.getAllData()
 

  }



  getFilterSubsctypesCategory(item: JobTitle ){
    this.userJob = item.NameAr;
    this.roles.name =item.Name;
    this.userUpadte.roles = [
      item.Name]

  }

  // get all data of annonce
  getAllData(){
    this.userServices.getAll('','1','100').subscribe(res =>{
       this.UserList = res.result

    })

  }

  save() {
    this.userServices.create(this.user).subscribe(res=> {
      this.getAllData();
      this.cancel();
    })
  }

  cancel() {
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.email = "";
    this.user.password ="";
    this.user.confirmPassword ="";
    }


    fill(prop: UserUpdate) {
      this.userUpadte.id = prop.id;
      this.userUpadte.firstName = prop.firstName;
      this.userUpadte.lastName = prop.lastName;
      this.userUpadte.email = prop.email;
 

    }
    updateData(){
      this.userServices.update(this.userUpadte).subscribe(res=> {
        this.getAllData();
        this.cancel();
      })
    }

    onSelect( $event) {
      //In my case $event come with a id value
      this.userUpadte.roles =$event.target.value;
    }
  


}






