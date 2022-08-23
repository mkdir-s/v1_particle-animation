let count = 100,
    particleClass = 'particle',
    particleColors = ['#f6e58d', '#ffbe76', '#ff7979', '#badc58'],
    container = document.getElementById('container'),
    w = container.offsetWidth,
    h = container.offsetHeight,
    elem;

for(let i=0; i < count; i++) {
    elem = document.createElement('div');
    elem.className = particleClass;
    container.appendChild(elem);
    gsap.set(elem, {
        x: gsap.utils.random(0, w),
        y: gsap.utils.random(0, h) - (h*0.5),
        scale: gsap.utils.random(0.5, 1),
        backgroundColor: gsap.utils.random(particleColors)
    })
    anime(elem);
}

function anime(elem) {
    gsap.to(elem, gsap.utils.random(5, 10), {
        y: h,
        ease: 'none',
        repeat: -1,
    })
    gsap.to(elem, gsap.utils.random(1, 6), {
        x: '+=50',
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
    })
}