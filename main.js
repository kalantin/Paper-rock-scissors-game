const btn = document.querySelector('.btn');
const computer = document.querySelector('.computer');
const drawResult = document.querySelector('.draw');
const winResult = document.querySelector('.win');
const lostResult = document.querySelector('.lost');
const img = document.querySelectorAll('img');
const arrayChoose = [`Rock`, `Scissors`, `Paper`];

let player;
let draw = 0;
let win = 0;
let lost = 0;

const choose = (e) => {
	img.forEach((el) => {
		if (el.classList.contains('choose')) {
			el.classList.remove('choose');
		}
	});
	e.target.classList.add('choose');
};

const play = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	const computerChoose = arrayChoose[randomNumber];
	img.forEach((el) => {
		if (el.classList.contains('choose')) {
			player = el.alt;
			console.log(`Gracz: ${player}`);
		}
	});
	if (player === computerChoose) {
		draw++;
		drawResult.textContent = `Draw: ${draw}`;
		computer.textContent = `Computer choose: ${computerChoose}`;
	} else if (
		(player === `Scissors` && computerChoose === `Paper`) ||
		(player === `Paper` && computerChoose === `Rock`) ||
		(player === `Rock` && computerChoose === `Scissors`)
	) {
		win++;
		winResult.textContent = `Win: ${win}`;
		computer.textContent = `Computer choose: ${computerChoose}`;
	} else if (
		(player === `Rock` && computerChoose === `Paper`) ||
		(player === `Paper` && computerChoose === `Scissors`) ||
		(player === `Scissors` && computerChoose === `Rock`)
	) {
		lost++;
		lostResult.textContent = `Lost: ${lost}`;
		computer.textContent = `Computer choose: ${computerChoose}`;
	}
};

btn.addEventListener('click', play);
img.forEach((el) => {
	el.addEventListener('click', choose);
});
