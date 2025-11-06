
// Animación de partículas (estrellas)
const canvas = document.createElement('canvas');
canvas.id = 'particles-canvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '0';
canvas.style.pointerEvents = 'none';
document.getElementById('particles-bg').appendChild(canvas);

const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
	particles = [];
	for (let i = 0; i < 80; i++) {
		particles.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			r: Math.random() * 2 + 1,
			dx: (Math.random() - 0.5) * 0.5,
			dy: (Math.random() - 0.5) * 0.5,
			color: Math.random() > 0.7 ? '#ffd700' : '#e10600'
		});
	}
}
createParticles();

function animateParticles() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let p of particles) {
		ctx.beginPath();
		ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
		ctx.fillStyle = p.color;
		ctx.shadowColor = p.color;
		ctx.shadowBlur = 10;
		ctx.fill();
		p.x += p.dx;
		p.y += p.dy;
		if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
		if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
	}
	requestAnimationFrame(animateParticles);
}
animateParticles();

// Temporizador oferta especial
function startCountdown() {
	const countdown = document.getElementById('countdown');
	// Oferta termina en 12 horas desde la carga
	const end = new Date();
	end.setHours(end.getHours() + 12);
	function updateTimer() {
		const now = new Date();
		let diff = Math.max(0, end - now);
		let h = Math.floor(diff / (1000 * 60 * 60));
		let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		let s = Math.floor((diff % (1000 * 60)) / 1000);
		countdown.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
		if (diff > 0) setTimeout(updateTimer, 1000);
		else countdown.textContent = '¡Finalizada!';
	}
	updateTimer();
}
window.addEventListener('DOMContentLoaded', startCountdown);

// Efecto de suscripción
document.querySelector('.subscribe')?.addEventListener('submit', function(e) {
	e.preventDefault();
	const email = document.getElementById('email').value;
	alert('¡Gracias por suscribirte, gamer!');
	this.reset();
});
