import React, { Component } from "react";
import background from "./../../assets/images/avenger.jpg";

export default class Exercise2 extends Component {
  render() {
    const arrMovie = [
      {
        movieId: 1283,
        movieName: "Trainwreck",
        alias: "trainwreck",
        trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
        description:
          "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1284,
        movieName: "Inside Out",
        alias: "inside-out",
        trailer: "https://www.youtube.com/embed/seMwpP0yeu4",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/insideout.jpg",
        description:
          "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1285,
        movieName: "Home",
        alias: "home",
        trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/home.jpg",
        description:
          "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1286,
        movieName: "Batman v Superman: Dawn of Justice",
        alias: "batman-v-superman-dawn-of-justice",
        trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
        description:
          "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1287,
        movieName: "Ant-Man",
        alias: "ant-man",
        trailer: "https://www.youtube.com/embed/1HpZevFifuo",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/antman.jpg",
        description:
          "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1288,
        movieName: "Jurassic World",
        alias: "jurassic-world",
        trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
        description:
          "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1289,
        movieName: "Fantastic Four",
        alias: "fantastic-four",
        trailer: "https://www.youtube.com/embed/AAgnQdiZFsQ",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
        description:
          "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1290,
        movieName: "Mad Max: Fury Road",
        alias: "mad-max-fury-road",
        trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg",
        description:
          "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1291,
        movieName: "True Detective",
        alias: "true-detective",
        trailer: "https://www.youtube.com/embed/TXwCoNwBSkQ",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/truedetective.jpg",
        description:
          "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1292,
        movieName: "The Longest Ride",
        alias: "the-longest-ride",
        trailer: "https://www.youtube.com/embed/FUS_Q7FsfqU",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
        description:
          "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1293,
        movieName: "The Walking Dead",
        alias: "the-walking-dead",
        trailer: "https://www.youtube.com/embed/R1v0uFms68U",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
        description:
          "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1294,
        movieName: "Southpaw",
        alias: "southpaw",
        trailer: "https://www.youtube.com/embed/Mh2ebPxhoLs",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
        description:
          "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1295,
        movieName: "Specter",
        alias: "specter",
        trailer: "https://www.youtube.com/embed/LTDaET-JweU",
        image: "https://movienew.cybersoft.edu.vn/hinhanh/spectre.jpg",
        description:
          "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
      {
        movieId: 1296,
        movieName: "Avengers: Infinity War ",
        alias: "avengers-infinity-war",
        trailer: "https://www.youtube.com/embed/DKqu9qc-5f4",
        image:
          "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
        description:
          "The Avengers superhero team and their allies must be ready to sacrifice their lives to fight against the mighty super villain Thanos before he destroys everything and puts an end to the universe.",
        group: "GP00",
        releaseDate: "2019-07-29T00:00:00",
        rating: 5,
      },
    ];
    const renderListMovie = () => {
    //   let newArrMovie = [];
      return arrMovie.map((item, index) => {
        return (
          <div key={item.movieId} className="col-4">
            <div className="content bg-white text-center p-3">
              <img className="w-100" src={item.image} alt="" />
              <h3>{item.movieName}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        );
      });
    //   console.log("newArrMovie",newArrMovie)
    //   return arrMovie;
    };
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        // className="container"
      >
        <h2>Demo State Exercise 2</h2>
        <div className="row g-5">
          {/* <div className="col-4">
            <div className="content">
              <img src="" alt="" />
              <h3></h3>
              <p></p>
            </div>
          </div> */}
          {renderListMovie()}
        </div>
      </div>
    );
  }
}
