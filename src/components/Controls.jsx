/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Timer from "./Timer";
function Controls({ state, dispatch }) {
  return (
    <div className="flex flex-col items-center  p-4" >
      <div className="flex flex-row m-3 space-x-5">
        <div>
          <div id="break-label" className="text-lg font-bold">
            Break Length
          </div>
          <div className="flex items-center space-x-4">
            <button
              id="break-decrement"
              className="bg-blue-500  active:bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch({ type: "DECREMENT_BREAK" })}
              disabled={state.isRunning}
            >
              -
            </button>
            <div id="break-length" className="text-3xl font-semibold">
              {state.breakLength}
            </div>
            <button
              className="bg-blue-500  active:bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              id="break-increment"
              onClick={() => dispatch({ type: "INCREMENT_BREAK" })}
              disabled={state.isRunning}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <div id="session-label" className="text-lg font-bold">
            Session Length
          </div>
          <div className="flex items-center space-x-4">
            <button
              id="session-decrement"
              className="bg-blue-500  active:bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch({ type: "DECREMENT_SESSION" })}
              disabled={state.isRunning}
            >
              -
            </button>
            <div id="session-length" className="text-3xl font-semibold">
              {state.sessionLength}
            </div>
            <button
              id="session-increment"
              className="bg-blue-500  active:bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch({ type: "INCREMENT_SESSION" })}
              disabled={state.isRunning}
            >
              +
            </button>
          </div>
        </div>
      </div>
        <Timer state={state} dispatch={dispatch} />
      <div id="timer-label" className="p-2 text-lg font-bold">
        {state.timerLabel}
      </div>
      <div className="flex items-center space-x-4">
        <button
          id="start_stop"
          className="bg-blue-500 active:bg-white  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "TOGGLE_TIMER" })}
        >
          Start/Stop
        </button>
        <button
          id="reset"
          
          className="bg-blue-500  active:bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "RESET" })}
          // disabled={!state.isRunning}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Controls;
