import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  public rent: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.rent = this.getShares('/rent');
    // this.rent.subscribe( res => {
    //   console.log(res);
    //   for ( let item of res) {
    //     if (localStorage.getItem('hero_type') === item.name) {
    //       this.SimpleHero = item;
    //     }
    //   }
    // });
  }
  getShares(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }
}
