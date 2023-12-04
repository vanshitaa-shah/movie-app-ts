import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieState {
  movies: MovieDataType[];
}

interface MovieAction {
  type: string;
  id: string;
}

const initialMovieState: MovieState = {
  movies: moviesData,
};

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOGGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (action.id === movie.id)
            return { ...movie, isBookmarked: !movie.isBookmarked };
          return movie;
        }),
      };
    default:
      return state;
  }
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: Dispatch<MovieAction>;
}>({
  state: initialMovieState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
