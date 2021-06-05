let w;

const setCounter = (e) => {
    document.getElementById("counter").innerHTML = e.data;
  };

const startCounter = () => {
  if (typeof w == "undefined") {
    w = new Worker("./worker.js");
  }

  w.onmessage = setCounter;
};



const stopCounter = () => {
    w.terminate();
    w = undefined;
}