import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.movieId);
      //call api to get movie detail
      this.movieService.fetchMovieDetail(params.movieId).subscribe(
        (data) => {
          console.log(data.content);
          this.movieDetail = data.content;
        },
        (error) => {
          console.log(error);
        }
      )
    })
  }

}
