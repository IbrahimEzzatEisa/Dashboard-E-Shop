import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}





export const ROUTES: RouteInfo[] = [
  { path: 'settings', title: 'الطلبات  ',  icon:' settings', class: '' },

   { path: 'users', title: 'المستخدمين ',  icon:' supervisor_account', class: ' '   },
   { path: 'language', title: ' المدينة ',  icon:' language', class: '' },
   { path: 'musics', title: ' الطيارين ',  icon:' local_shipping    ', class: '' },
   { path: 'albumcategory', title: 'الاقسام  ',  icon:' emoji_symbols', class: '' },
   { path: 'stars', title: '   المنتجات ',  icon:' redeem   ', class: '' },
   { path: 'home', title: '   المحلات ',  icon:' redeem   ', class: '' },
   { path: 'pharma', title: '   الصيدلية ',  icon:' redeem   ', class: '' },
   { path: 'notification', title: '   الاشعارات ',  icon:' redeem   ', class: '' },
   { path: 'image', title: '  الصفحة الرئيسية ',  icon:' redeem   ', class: '' },


  { path: 'album', title: 'من نحن ',  icon:' emoji_symbols', class: '' },
  { path: 'problem', title: 'الشكاوي  ',  icon:' library_books', class: '' },
  
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];


  constructor( private router: Router) { }

  ngOnInit() {

     
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);  }


  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
