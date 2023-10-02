/* eslint-disable react/prop-types */

function Timer({ state }) {
  const minutes = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
  const seconds = (state.timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="text-6xl font-bold">
      <div id="time-left" className="text-center border border-spacing-5 rounded-lg p-4 border-cyan-500 m-3 ">
        {minutes}:{seconds}
      </div>
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </div>
  );
}

export default Timer;
