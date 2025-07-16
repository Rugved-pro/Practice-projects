 const display = document.getElementById("display");
        let timer = null;
        let startTime = 0;
        let elapsedTime = 0;
        let isRunning = false;

        function start() {
            if (!isRunning) {
                startTime = Date.now() - elapsedTime;
                timer = setInterval(update, 10);
                isRunning = true;
            }
        }

        function stop() {
            if (isRunning) {
                clearInterval(timer);
                isRunning = false;
            }
        }

        function reset() {
            stop();
            elapsedTime = 0;
            display.textContent = "00:00:00:00";
        }

        function update() {
            const currentTime = Date.now();
            elapsedTime = currentTime - startTime;

            let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
            let seconds = Math.floor((elapsedTime / 1000) % 60);
            let milliseconds = Math.floor((elapsedTime % 1000) / 10);

            // Add leading zeros
            const pad = (num, size) => num.toString().padStart(size, '0');

            display.textContent = `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}:${pad(milliseconds, 2)}`;
        }