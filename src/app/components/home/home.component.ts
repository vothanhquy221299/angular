import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listMovie: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.fetchAllMovie().subscribe(
      //success
      (data) => {
        // console.log(data.content)
        this.listMovie = data.content;
      },
      //fail
      (error) =>{
        console.log(error)
      }
    )
  }

}
