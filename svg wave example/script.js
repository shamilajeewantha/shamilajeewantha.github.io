window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = scrollTop / scrollHeight;

    // Select all path elements
    const lines = document.querySelectorAll('#progress-svg path');
    const totalLines = lines.length;

    lines.forEach((line, index) => {
        // Calculate when each line should start changing color
        const lineStart = index / totalLines;
        const lineEnd = (index + 1) / totalLines;

        if (scrollPercentage >= lineStart) {
            const colorValue = Math.min(52 + (203 * ((scrollPercentage - lineStart) / (lineEnd - lineStart))), 180);
            line.setAttribute('stroke', `rgb(0, ${Math.round(colorValue)}, 0)`); // Green color transition
        }        
        else {
            // Reset the color to black when scrolling past a line's range
            line.setAttribute('stroke', 'black');
        }
    });
});
