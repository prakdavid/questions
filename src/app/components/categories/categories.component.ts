import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: Array<Category>;
  private url: string = 'https://http-angular-7c791.firebaseio.com/categories.json';

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // insert data
    // this.categories = [
    //   new Category("Angular", "Angular description", "https://angular.io/assets/images/logos/angular/angular.svg", "angular", [{ name: "Angular"}]),
    //   new Category("TypeScript", "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.", "https://s.gravatar.com/avatar/3e2b342616822f8eabc9dd393840db4a?size=496&default=retro", "angular", [{ name: "Javascript"}, { name: 'TypeScript'}])
    // ];
    // console.log(this.categories);
    // this.http.put(this.url, this.categories).subscribe( res => console.log(res) );


    // this.categorieService.getCategories().subscribe( (categories) => {
    //   this.categories = categories;
    //   console.log(this.categories);
    // } );

    // get data from resolver
    this.activatedRoute.data.subscribe( (routeData) => {
      let data = routeData['data'];
      if (data) {
        this.categories = data;
        console.log(this.categories);
      }
    });
  }
}
