---
title: useEffect
allDay: false
startTime: 20:30
endTime: 21:00
date: 2024-08-09
completed: 
tags:
  - React
---
```jsx

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);



  useEffect(function() {
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
  }, [])
```
> 
> The fetch is initiated upon mount as specified by the `[]` at the end of the `useEffect`.
> 
```jsx


  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}

```

This ensures that the `useStates` aren’t stuck updating in an infinite loop, causing the `fetch` to run infinitely.