import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined;

  ngOnInit(): void {

  }
}

interface Movie {
  id: number;
  name: string;
  cover: string;
  rating: number;
  author?: string;
  published_on?: string;
  review?: string;
}
