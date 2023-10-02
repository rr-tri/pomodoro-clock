import { useReducer, useEffect } from "react";
import Controls from "./components/Controls";
import "./App.css";

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  timerLabel: "Session",
  timeLeft: 1500, 
  isRunning: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_SESSION":
      return {
        ...state,
        sessionLength: Math.min(state.sessionLength + 1, 60),
        timeLeft:
          state.sessionLength < 60
            ? Math.min(state.sessionLength + 1, 60) * 60
            : state.sessionLength * 60,
      };
    case "DECREMENT_SESSION":
      return {
        ...state,
        sessionLength: Math.max(state.sessionLength - 1, 1),
        timeLeft:
          state.sessionLength > 0
            ? Math.max(state.sessionLength - 1, 1) * 60
            : state.sessionLength * 60,
      };
    case "INCREMENT_BREAK":
      return {
        ...state,
        breakLength: Math.min(state.breakLength + 1, 60),
        
      };
    case "DECREMENT_BREAK":
      return {
        ...state,
        breakLength: Math.max(state.breakLength - 1, 1),
      
      };
    case "TOGGLE_TIMER":
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    case "RESET":
      
      return {
        ...initialState
      };
    case "TICK":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    case "SWITCH_SESSION":
      return {
        ...state,
        timerLabel: state.timerLabel === "Session" ? "Break" : "Session",
        timeLeft:
          state.timerLabel === "Session"
            ? state.breakLength * 60
            : state.sessionLength * 60,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  useEffect(() => {
    let timer;
   
    if (state.isRunning && state.timeLeft > 0) {
      timer = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    } else if (state.timeLeft === 0) {
    setTimeout(() => {
      dispatch({ type: "SWITCH_SESSION" });
    }, 1000);
        
      
    document.getElementById('beep').currentTime = 0;
    document.getElementById('beep').play()
    }
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => {
      const beepAudio = document.getElementById('beep');
      beepAudio.pause();
      beepAudio.currentTime = 0;
      dispatch({ type: "RESET" });
    });

    return () => clearInterval(timer);
  }, [
    state.isRunning,
    state.timeLeft,
    state.timerLabel,
    state.sessionLength,
    state.breakLength,
  ]);
 
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">25 + 5 clock</h1>
      <div className="length-controls bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-2">
          <Controls state={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
