// Get Section ID's
const series1Section = document.querySelector('#series-1');
const series2Section = document.querySelector('#series-2');
const series3Section = document.querySelector('#series-3');
const series4Section = document.querySelector('#series-4');

// Get Buttons ID's
const series1Button = document.querySelector('#series1-button');
const series2Button = document.querySelector('#series2-button');
const series3Button = document.querySelector('#series3-button');
const series4Button = document.querySelector('#series4-button');

// Series 4 Button Click Event
series4Button.addEventListener('click', () => {
    series1Section.style.display = 'none';
    series2Section.style.display = 'none';
    series3Section.style.display = 'none';
    series4Section.style.display = 'flex';

    series1Button.classList.remove('active');
    series2Button.classList.remove('active');
    series3Button.classList.remove('active');
    series4Button.classList.add('active');
});

// Series 3 Button Click Event
series3Button.addEventListener('click', () => {
    series1Section.style.display = 'none';
    series2Section.style.display = 'none';
    series3Section.style.display = 'flex';
    series4Section.style.display = 'none';

    series1Button.classList.remove('active');
    series2Button.classList.remove('active');
    series3Button.classList.add('active');
    series4Button.classList.remove('active');
});

// Series 2 Button Click Event
series2Button.addEventListener('click', () => {
    series1Section.style.display = 'none';
    series2Section.style.display = 'flex';
    series3Section.style.display = 'none';
    series4Section.style.display = 'none';

    series1Button.classList.remove('active');
    series2Button.classList.add('active');
    series3Button.classList.remove('active');
    series4Button.classList.remove('active');
});

// Series 1 Button Click Event
series1Button.addEventListener('click', () => {
    series1Section.style.display = 'flex';
    series2Section.style.display = 'none';
    series3Section.style.display = 'none';
    series4Section.style.display = 'none';

    series1Button.classList.add('active');
    series2Button.classList.remove('active');
    series3Button.classList.remove('active');
    series4Button.classList.remove('active');
});