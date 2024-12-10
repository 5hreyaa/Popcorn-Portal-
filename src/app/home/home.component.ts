
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


interface Movie {
  id: number;
  name: string;
  cover: string;
  rating: number;
  author?: string;
  published_on?: string;
  review?: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingMovies: Movie[] = [
    {
      id: 1,
      name: 'Dont Look Up',
      cover: 'https://tse1.mm.bing.net/th?id=OIP.fpXm64rujnrf2ItdHT0GCwAAAA&pid=Api&P=0&h=220',
      rating: 7.2,
      author: 'Adam McKay',
      published_on: '2021',
      review: 'Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.',
      expanded: false
    },
    {
      id: 2,
      name: 'The Lost Daughter',
      cover: 'https://m.media-amazon.com/images/M/MV5BZGY5ZTg1YzUtNTUwMy00YTVjLTg5OTItMTc4MmNmYjkxOTE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
      rating: 6.7,
      author: 'Maggie Gyllenhaal',
      published_on: '2021',
      review: 'A womans beach vacation takes a dark turn when she begins to confront the troubles of her past.',
      expanded: false
    },
    {
      id: 3,
      name: ' The 355',
      cover: 'https://tse1.mm.bing.net/th?id=OIP.46jj-rIX8H_OlCYYh4Og1AHaKC&pid=Api&P=0&h=220',
      rating: 5.6,
      author: 'Simon Kinberg' ,
      published_on : '2022',
      review:'When a top-secret weapon falls into mercenary hands, a wild-card C.I.A. agent joins forces with three international agents on a mission to retrieve it, while staying a step ahead of a mysterious woman whos tracking their every move.',
      expanded: false
    },
    {
      id: 4,
      name: 'Spider-Man: No Way Home',
      cover: 'https://tse2.mm.bing.net/th?id=OIP.cozDTVmDFNekRZWGGiVRbQHaK9&pid=Api&P=0&h=220',
      rating: 8.2,
      author: 'Jon Watts',
      published_on : '2021',
      review:'With Spider-Mans identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
      expanded: false
        },
    {
      id: 5,
      name: ' The Matrix Resurrections',
      cover: 'https://www.matrixfans.net/wp-content/uploads/2021/11/Matrix-Resurrections-Poster.jpg',
      rating: 5.7,
      author: 'Lana Wachowski',
      published_on : '2021',
      review:'Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.',
      expanded: false
    },
    {
      id: 6,
      name: 'The Power of the Dog',
      cover: 'https://www.themoviedb.org/t/p/original/czhsmToqvMDTNavT4LRsDTVUOwE.jpg',
      rating: 6.8,
      author: 'Jane Campion',
      published_on : '2021',
      review:'Charismatic rancher Phil Burbank inspires fear and awe in those around him. When his brother brings home a new wife and her son, Phil torments them until he finds himself exposed to the possibility of love.',
      expanded: false

    }
  ];

  theatreMovies: Movie[] = [
    {
      id: 1,
      name: 'Inside Out 2',
      cover: 'https://tse4.mm.bing.net/th?id=OIP.x8SC3ZoZRpFZ863Vw9qwWwHaHa&pid=Api&P=0&h=220',
      rating: 7.8,
      author: '	Kelsey Mann',
      review:'Joy, Sadness, Anger, Fear and Disgust have been running a successful operation by all accounts. However, when Anxiety shows up, they arent sure how to feel.',
      expanded: false
    },
    {
      id: 2,
      name: 'It Ends With Us',
      cover: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/it-ends-with-us-movie-poster.jpg',
      rating: 7.2,
      author: 'Justin Baldoni',
      review:'Lily Bloom moves to Boston to chase her lifelong dream of opening her own business. A chance meeting with charming neurosurgeon Ryle Kincaid soon sparks an intense connection, but as the two fall deeply in love, she begins to see sides of Ryle that remind her of her parents relationship. When Lilys first love, Atlas Corrigan, suddenly reenters her life, her relationship with Ryle gets upended, leaving her with an impossible choice.',
      expanded: false


    },
    {
      id: 3,
      name: 'Deadpool & Wolverine',
      cover: 'https://tse1.mm.bing.net/th?id=OIP.npNqKC2ox7mhjLwC_wfG2wAAAA&pid=Api&P=0&h=220',
      rating: 8.3,
      author: ' Shawn Levy',
      review:'Deadpools peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat. ',
      expanded: false

    },
    {
      id: 4,
      name: 'Despicable Me 4',
      cover: 'https://tse3.mm.bing.net/th?id=OIP.UWjPk_8wLi9HSWBjlIQigQHaLc&pid=Api&P=0&h=220',
      rating: 6.3,
      author: '	Chris Renaud',
      review:'Gru welcomes a new member to the family, Gru Jr., whos intent on tormenting his dad. However, their peaceful existence soon comes crashing down when criminal mastermind Maxime Le Mal escapes from prison and vows revenge against Gru. ',
      expanded: false
    },
    {
      id: 5,
      name: 'Twisters',
      cover: 'https://tse3.mm.bing.net/th?id=OIP.Zgd7wWVpua_KLOwfs8E26wHaLL&pid=Api&P=0&h=220',
      rating: 7.1,
      author: ' Lee Isaac Chung',
      review: 'Haunted by a devastating encounter with a tornado, Kate Cooper gets lured back to the open plains by her friend, Javi, to test a groundbreaking new tracking system. ',
      expanded: false


    },
    {
      id: 6,
      name: 'Hit Man',
      cover: 'https://tse2.mm.bing.net/th?id=OIP.CXH7NVrOgvcYttB5LcC2CwHaKd&pid=Api&P=0&h=220',
      rating: 6.9,
      author: 'Richard Linklater',
      review: 'Professional killer Gary Johnson breaks protocol to help a desperate woman trying to flee an abusive husband and finds himself falling for her.',
      expanded: false
    }
  ];
  actionMovies: Movie[] = [
    {
      id: 1,
      name: 'Rush',
      cover: 'https://tse3.mm.bing.net/th?id=OIP.O5-vWWdVb5n--rUP7Y5vfwHaKe&pid=Api&P=0&h=220',
      rating: 8.1,
      author: '	Ron Howard',
      published_on: '2013',
      review: 'In the mid-1970s, charismatic English playboy James Hunt (Chris Hemsworth) and Austrian perfectionist Niki Lauda (Daniel Brühl) share an intense rivalry in Formula 1 racing. ',
      expanded: false
    },
    {
      id: 2,
      name: 'Midnight Run',
      cover: 'https://flxt.tmsimg.com/assets/p10944_p_v13_af.jpg',
      rating: 7.5,
      author: '	Martin Brest',
      published_on: '1988',
      review: 'When Eddie Moscone (Joe Pantoliano) hires tight-lipped bounty hunter Jack Walsh (Robert De Niro) to locate a mob accountant named "The Duke" (Charles Grodin) and bring him to L.A., Eddie tells Jack that the job will be simple, or a "midnight run."',
      expanded: false
    },
    {
      id: 3,
      name: 'Edge of Tomorrow',
      cover: 'https://tse2.mm.bing.net/th?id=OIP.xNnnpX8240cj2e4Iz3BvCQHaLH&pid=Api&P=0&h=220',
      rating: 7.9,
      author: 'Doug Liman ',
      published_on: '1988',
      review: 'When Earth falls under attack from invincible aliens, no military unit in the world is able to beat them. Maj. William Cage (Tom Cruise), an officer who has never seen combat, is assigned to a suicide mission. "',
      expanded: false
    },
    {
      id: 4,
      name: 'Polite Society',
      cover: 'https://tse4.mm.bing.net/th?id=OIP.3WpiIicB3hsithiO9f23NQHaK9&pid=Api&P=0&h=220',
      rating: 6.6,
      author: ' Nida Manzoor ',
      published_on: '2023',
      review: 'Martial artist-in-training Ria Khan believes she must save her older sister Lena from her impending marriage. After enlisting the help of her friends, Ria attempts to pull off the most ambitious of all wedding heists in the name of independence"',
      expanded: false
    },
    {
      id: 5,
      name: 'Sisu',
      cover: 'https://resizing.flixster.com/Ufc547Ap_IcTZnERp_6DBoH3Wiw=/300x300/v2/https://flxt.tmsimg.com/assets/p23439761_v_h9_ac.jpg',
      rating: 6.9,
      author: ' 	Jalmari Helander ',
      published_on: '2023',
      review: 'During the last days of World War II, a solitary prospector crosses paths with Nazis on a scorched-Earth retreat in northern Finland. When the soldiers decide to steal his gold, they quickly discover they just tangled with no ordinary miner."',
      expanded: false
    },
    {
      id: 6,
      name: 'Spider-Man: Far From Home',
      cover: 'https://www.sonypictures.co.uk/sites/unitedkingdom/files/2021-09/DP_4710017_TC_1400x2100_DP_4710018_SpiderManFarFromHome_2019_ITUNES_2000x3000_UK_1333x2000_thumbnail.jpg',
      rating: 6.9,
      author: 'Jon Watts',
      published_on: '2019',
      review: 'Peter Parkers relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -"',
      expanded: false
    },

  ];
  romanticMovies: Movie[] = [
    {
      id: 1,
      name: 'Pride and Prejudice',
      cover: 'https://ih1.redbubble.net/image.3581071904.9280/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
      rating: 8.0,
    },
    {
      id: 2,
      name: 'The Notebook',
      cover: 'https://tse4.mm.bing.net/th?id=OIP.KXmSTiTH8CjhopufjJea2QHaLH&pid=Api&P=0&h=220',
      rating: 7.9,
    },
    {
      id: 3,
      name: 'When Harry Met Sally',
      cover: 'https://tse3.mm.bing.net/th?id=OIP._QPUJtE2u7STFVaL3Wg_LgHaLH&pid=Api&P=0&h=220',
      rating: 7.7,
    },
    {
      id: 4,
      name: ' How to Lose a Guy in 10 Days',
      cover: 'https://tse1.explicit.bing.net/th?id=OIP.L8qkII7uZK5P7twIjUiGLQHaJ4&pid=Api&P=0&h=220',
      rating: 6.5,
    },
    {
      id: 5,
      name: ' A Walk to Remember',
      cover: 'https://m.media-amazon.com/images/M/MV5BMTM1MTYzNjA3M15BMl5BanBnXkFtZTcwMjk2NTE4Mg@@._V1_.jpg',
      rating: 7.3,
    },
    {
      id: 6,
      name: 'The Idea of You',
      cover: 'https://tse1.mm.bing.net/th?id=OIP.mGcKJdiWNzgJcEVb0gTNugHaIX&pid=Api&P=0&h=220',
      rating: 6.3,
    },
  ];

  thrillerMovies: Movie[] = [
    {
      id: 1,
      name: 'Se7en',
      cover: 'https://www.themoviedb.org/t/p/original/uaIipTX22dckryhtzRGaZ8CrjD4.jpg',
      rating: 8.6,
    },
    {
      id: 2,
      name: 'Shutter Island',
      cover: 'https://www.themoviedb.org/t/p/original/2RxcY2XRenqNMCuqhVHQdR6RH0A.jpg',
      rating: 8.2,
    },
    {
      id: 3,
      name: 'The Silence of the Lambs',
      cover: 'https://tse2.mm.bing.net/th?id=OIP.qt3jDFKZQ9QsCkFdeUrZFQHaLH&pid=Api&P=0&h=220',
      rating: 8.6,
    },
    {
      id: 4,
      name: 'The Sixth Sense',
      cover: 'https://www.themoviedb.org/t/p/original/9ZnU9sJQcouG8HjjlXuRS2TgSy5.jpg',
      rating: 8.2,
    },
    {
      id: 5,
      name: 'Zodiac',
      cover: 'https://media-cache.cinematerial.com/p/500x/oovn6xu1/zodiac-movie-poster.jpg?v=1456233264',
      rating: 7.7,
    },
    {
      id: 6,
      name: 'Inception',
      cover: 'https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg',
      rating: 8.8,
    },

  ];

  comedyMovies: Movie[] = [
    {
      id: 1,
      name: 'Superbad',
      cover: 'https://cdn.kinocheck.com/i/6npzym06ww.jpg',
      rating: 7.6,
    },
    {
      id: 2,
      name: 'The Hangover',
      cover: 'https://tse3.mm.bing.net/th?id=OIP.xcoB3aFMqBzJMmeH8WTKYAHaJ4&pid=Api&P=0&h=220',
      rating: 7.7,
    },
    {
      id: 3,
      name: 'Good Boys',
      cover: 'https://www.themoviedb.org/t/p/original/3fzcLTF9IjRuGcMGVTyD3N2vxez.jpg',
      rating: 6.7,
    },
    {
      id: 4,
      name: 'Stuber',
      cover: 'https://tse1.mm.bing.net/th?id=OIP.S9HsYH2aKjBsWg7oCz8pSgAAAA&pid=Api&P=0&h=220',
      rating: 6.2,
    },
    {
      id: 5,
      name: 'Shazam!',
      cover: 'https://m.media-amazon.com/images/I/91dzRbdC2hL._AC_SL1500_.jpg',
      rating: 7.0,
    },
    {
      id: 6,
      name: 'When We First Met',
      cover: 'https://tse1.mm.bing.net/th?id=OIP.3bzSNvvdwkpFNxpgpNu99wHaLH&pid=Api&P=0&h=220',
      rating: 6.4,
    },

  ];

  popularMovies: Movie[] =
    [
      {
        "id": 1,
        "name": " The Shawshank Redemption",
        "cover": "https://originalvintagemovieposters.com/wp-content/uploads/2015/05/Shawshank-Redemption-3205LB.jpg",
        "rating": 8.3,

      },
      {
        "id": 2,
        "name": " The Godfather",
        "cover": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "rating": 9.2,

      },
      {
        "id": 3,
        "name": " The Dark Knight",
        "cover": "https://tse4.mm.bing.net/th?id=OIP.UUg0MwA-cXUpR8CySNqi1AHaKW&pid=Api&P=0&h=220",
        "rating": 9.0,

      },
      {
        "id": 4,
        "name": " The Godfather Part II",
        "cover": "https://tse2.mm.bing.net/th?id=OIP.8agimF51smb_0RhcmoO0rAHaLH&pid=Api&P=0&h=220",
        "rating": 9.0,

      },

      {
        "id": 5,
        "name": "12 Angry Men",
        "cover": "https://tse4.explicit.bing.net/th?id=OIP.xdzeRPhN35_X1F6rH5hZaQHaLH&pid=Api&P=0&h=220",
        "rating": 9,

      },
      {
        "id": 6,
        "name": "Schindler's List",
        "cover": "https://tse3.mm.bing.net/th?id=OIP.73Equox0GByRwvV5-QflJgHaLH&pid=Api&P=0&h=220",
        "rating": 9,

      },
      {
        "id": 7,
        "name": " The Lord of the Rings: The Return of the King",
        "cover": "https://tse2.explicit.bing.net/th?id=OIP.40FIQUvmKRpPWXXMltt4FQHaLH&pid=Api&P=0&h=220",
        "rating": 9,

      },
      {
        "id": 8,
        "name": "  Pulp Fiction",
        "cover": "https://tse4.mm.bing.net/th?id=OIP.wrDo_CaDwBgyE0R3yW6m2AHaLH&pid=Api&P=0&h=220",
        "rating": 8.9,

      },
      {
        "id": 9,
        "name": " The Lord of the Rings: The Fellowship of the Ring",
        "cover": "https://tse3.mm.bing.net/th?id=OIP.Fe-zd7pd7lKnwdBauA28UQHaLH&pid=Api&P=0&h=220",
        "rating": 8.9,

      },
      {
        "id": 9,
        "name": " The Good, the Bad and the Ugly",
        "cover": "https://tse3.mm.bing.net/th?id=OIP.QK5XZyf_fYGiGXvkPDK2xAHaKj&pid=Api&P=0&h=220",
        "rating": 8.9,

      },


      {
        "id": 10,
        "name": "Fight Club",
        "cover": "https://posterspy.com/wp-content/uploads/2017/09/poster-a42.jpg",
        "rating": 8.8,

      },
      {
        "id": 11,
        "name": " Inception",
        "cover": "https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpg",
        "rating": 8.8,

      }

    ];

    currentIndex = 0;
    slide(direction: 'left' | 'right'): void {
      if (direction === 'left') {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.popularMovies.length - 1;
      } else {
        this.currentIndex = (this.currentIndex < this.popularMovies.length - 1) ? this.currentIndex + 1 : 0;
      }
    }




  constructor() {}

  ngOnInit(): void {}

  toggleDetails(movie: Movie): void {
    movie.expanded = !movie.expanded;
  }

}
