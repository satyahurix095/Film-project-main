import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./App.css";

export default function App() {
  const [name, setname] = useState("name");
  const [poster, setposter] = useState("poster");
  const [rating, setrating] = useState("rating");
  const [summary, setsummary] = useState("summary");

  const peopleData = [
    {
      "id": "99",
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
      "id": "100",
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      "id": "101",
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": "102",
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "id": "104",
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": "105",
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": "106",
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "PS2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8,
      "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
      "id": "108"
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8,
      "trailer": "https://youtu.be/NgsQ8mVkN8w",
      "id": "109"
    }
  ]
  
  const [movieList, setmovieList] = useState(peopleData);

  return (
    <div>
      <div className="input-box">
        <input
          onChange={(event) => setname(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(event) => setposter(event.target.value)}
          type="text"
          placeholder="Poster"
        />
        <input
          onChange={(event) => setrating(event.target.value)}
          type="text"
          placeholder="rating"
        />
        <input
          onChange={(event) => setsummary(event.target.value)}
          type="text"
          placeholder="summary"
        />
        <button
          onClick={(event) =>
            setmovieList([...movieList, { name, poster, rating, summary }])
          }
        >
          Add Movie
        </button>

        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
           {/* <Route path="/movies/:id" 
          element={<MovieDetials />} 
          />  */}
           <Route
          path="/movies/:id"
          element={<MovieDetials movielist={movieList} />}
        />
        
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="App">
        {movieList.map((person, index) => (
          <Movie
            key={index}
            id={index}
            name={person.name}
            poster={person.poster}
            rating={person.rating}
            summary={person.summary}
            trailer = {person.trailer}
          />
        ))}
      </div>
    </div>
  );
}
function PageNotFound() {
  return <h1>404 error Page not found</h1>;
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}









function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Movie({ name, poster, rating, summary, trailer , id }) {
  const [hide, sethide] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="film-container">
      <img src={poster} alt={name} />
      <div className="title-bar">
        <h2>{name}- {id}</h2> <h3>⭐{rating}</h3>
      </div>
      <button
        onClick={() => {
          sethide(hide == true ? false : true);
        }}
      >
        Toggle {hide ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </button>{" "}
      <IconButton
        aria-label="details"
        onClick={() => navigate("/movies/" + id)}
      >
         <InfoIcon /> 
      </IconButton>
      {hide == false ? <p>{summary}</p> : " "}
      
    </div>
  );
}

function MovieDetials({movielist}) {
  const navigate = useNavigate();
  const {id} = useParams();
  const abc = movielist[id];
    return (
      <div className="Movie">
      <iframe
        width="1311"
        height="649"
        src={abc.trailer}
        title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="title-bar">
        <h2>{abc.name}</h2>
        <p> ⭐ {abc.rating}</p>
      </div>

      <p>{abc.summary}</p>
      <IconButton
        aria-label="Go back"
        onClick={() => navigate(-1)}
        sx={{ color: "blue" }} // Custom style to set the color to blue
      >
        <ArrowBackIcon />
      </IconButton>
    
    </div>
    );
}






