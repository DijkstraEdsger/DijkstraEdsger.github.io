let i = 0;

const counter = () => {
    postMessage(++i);
    setTimeout(() => {
        counter();
    }, 500);
}

counter();