'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Draggable, ScrollTrigger);

const showreelCards = [
    {
        src: '/assets/ai-generated/work-douwe.png',
        alt: 'Campanha social com copo, gravador e criacao musical',
        client: 'douwe egberts',
        title: 'feestje bouwe? app douwe',
        type: 'social',
        theme: 'maroon',
        sticker: '/assets/Card-Sticker SVG/sticker-camera.svg',
    },
    {
        src: '/assets/ai-generated/work-school.png',
        alt: 'Criadores gravando conteudo em set colorido',
        client: 'hema',
        title: 'skibidi school',
        type: '360',
        theme: 'pink',
        sticker: '/assets/Footer-Sticker SVG/footer-sticker-boom.svg',
    },
    {
        src: '/assets/ai-generated/work-social.png',
        alt: 'Artista em set social com microfone e camera',
        client: 'hema',
        title: 'hema socials',
        type: 'social',
        theme: 'pink',
        sticker: '/assets/Card-Sticker SVG/sticker-smiley.svg',
    },
    {
        src: '/assets/ai-generated/motion-live.png',
        alt: 'Show intimista com publico e luzes de palco',
        client: 'truus live',
        title: 'palco em movimento',
        type: 'activation',
        theme: 'green',
        sticker: '/assets/Card-Sticker SVG/sticker-heart.svg',
    },
    {
        src: '/assets/ai-generated/motion-dance.png',
        alt: 'Dancarino em set neon para video curto',
        client: 'short form',
        title: 'reels que puxam o ritmo',
        type: 'social',
        theme: 'blue',
        sticker: '/assets/Footer-Sticker SVG/footer-sticker-hands.svg',
    },
    {
        src: '/assets/ai-generated/motion-launch.png',
        alt: 'Mesa de direcao criativa para lancamento musical',
        client: 'artist launch',
        title: 'direcao criativa 360',
        type: 'design',
        theme: 'orange',
        sticker: '/assets/Card-Sticker SVG/sticker-phone.svg',
    },
    {
        src: '/assets/ai-generated/motion-studio.png',
        alt: 'Sessao de gravacao em estudio criativo',
        client: 'studio',
        title: 'conteudo que vira conversa',
        type: '360',
        theme: 'blue',
        sticker: '/assets/Footer-Sticker SVG/footer-sticker-camera.svg',
    },
];

function getLoopOffset(index, activeIndex) {
    const total = showreelCards.length;
    let offset = (index - activeIndex + total) % total;
    if (offset > total / 2) offset -= total;
    return offset;
}

function getCardStatus(index, activeIndex) {
    const offset = getLoopOffset(index, activeIndex);
    if (offset === 0) return 'active';
    if (offset === -1) return '2-before';
    if (offset === -2) return '3-before';
    if (offset === 1) return '2-after';
    if (offset === 2) return '3-after';
    return offset < 0 ? 'hidden-left' : 'hidden-right';
}

function TypeIcon({ type }) {
    if (type === '360') {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M13.75 7.75C13.75 7.33579 13.4142 7 13 7C12.5858 7 12.25 7.33579 12.25 7.75C12.25 10.1758 11.7141 11.7513 10.7327 12.7327C9.75127 13.7141 8.17581 14.25 5.75 14.25C5.33579 14.25 5 14.5858 5 15C5 15.4142 5.33579 15.75 5.75 15.75C8.17581 15.75 9.75127 16.2859 10.7327 17.2673C11.7141 18.2487 12.25 19.8242 12.25 22.25C12.25 22.6642 12.5858 23 13 23C13.4142 23 13.75 22.6642 13.75 22.25C13.75 19.8242 14.2859 18.2487 15.2673 17.2673C16.2487 16.2859 17.8242 15.75 20.25 15.75C20.6642 15.75 21 15.4142 21 15C21 14.5858 20.6642 14.25 20.25 14.25C17.8242 14.25 16.2487 13.7141 15.2673 12.7327C14.2859 11.7513 13.75 10.1758 13.75 7.75Z" fill="currentColor" />
                <path d="M6 5.5C6 5.22386 5.77614 5 5.5 5C5.22386 5 5 5.22386 5 5.5C5 6.48063 4.78279 7.0726 4.4277 7.4277C4.0726 7.78279 3.48063 8 2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9C3.48063 9 4.0726 9.21721 4.4277 9.5723C4.78279 9.9274 5 10.5194 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 10.5194 6.21721 9.9274 6.5723 9.5723C6.9274 9.21721 7.51937 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C7.51937 8 6.9274 7.78279 6.5723 7.4277C6.21721 7.0726 6 6.48063 6 5.5Z" fill="currentColor" />
            </svg>
        );
    }

    if (type === 'activation') {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M10.9 1C11.3556 1 11.725 1.36937 11.725 1.825V3.75C11.725 4.20564 11.3556 4.575 10.9 4.575C10.4444 4.575 10.075 4.20564 10.075 3.75V1.825C10.075 1.36937 10.4444 1 10.9 1Z" fill="currentColor" />
                <path d="M4.575 10.9C4.575 11.3556 4.20564 11.725 3.75 11.725H1.825C1.36937 11.725 1 11.3556 1 10.9C1 10.4444 1.36937 10.075 1.825 10.075H3.75C4.20564 10.075 4.575 10.4444 4.575 10.9Z" fill="currentColor" />
                <path d="M9.32792 7.69133C8.31574 7.29369 7.30288 8.26251 7.68076 9.26684L12.5445 22.1927C12.9174 23.1834 14.3019 23.2877 14.8242 22.3645L17.5058 17.6238L22.3528 14.979C23.2792 14.4735 23.193 13.1384 22.209 12.7518L9.32792 7.69133Z" fill="currentColor" />
            </svg>
        );
    }

    if (type === 'design') {
        return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5.713 8.128L5.467 8.694C5.42856 8.78617 5.3637 8.8649 5.2806 8.92027C5.1975 8.97565 5.09986 9.00519 5 9.00519C4.90014 9.00519 4.8025 8.97565 4.7194 8.92027C4.6363 8.8649 4.57144 8.78617 4.533 8.694L4.287 8.128C3.85448 7.12672 3.06238 6.32392 2.067 5.878L1.308 5.539C1.21592 5.49664 1.13792 5.42877 1.08324 5.34343C1.02855 5.25809 0.99949 5.15886 0.99949 5.0575C0.99949 4.95615 1.02855 4.85692 1.08324 4.77157C1.13792 4.68623 1.21592 4.61836 1.308 4.576L2.025 4.257C3.0454 3.79838 3.85106 2.96588 4.276 1.931L4.53 1.32C4.56716 1.22536 4.63197 1.1441 4.71599 1.08683C4.8 1.02955 4.89932 0.998921 5.001 0.998921C5.10268 0.998921 5.202 1.02955 5.28602 1.08683C5.37003 1.1441 5.43484 1.22536 5.472 1.32L5.725 1.93C6.14949 2.96508 6.95479 3.79794 7.975 4.257L8.693 4.577C8.7848 4.61948 8.86253 4.68734 8.91701 4.77258C8.97148 4.85781 9.00043 4.95685 9.00043 5.058C9.00043 5.15916 8.97148 5.2582 8.91701 5.34343C8.86253 5.42866 8.7848 5.49652 8.693 5.539L7.933 5.877C6.93782 6.32337 6.14607 7.12653 5.714 8.128H5.713Z" fill="currentColor" />
                <path d="M19.229 3.371L14.289 7.213C10.343 6.239 6.559 8.546 5.501 12.497C5.399 12.877 5.367 13.262 5.334 13.666C5.219 15.06 5.087 16.671 2.001 18.996C4.501 20.496 9.001 21.998 12.503 21.998C13.64 21.997 14.7619 21.7377 15.7841 21.2397C16.8062 20.7416 17.7018 20.0179 18.4032 19.123C19.1047 18.2282 19.5936 17.1857 19.8332 16.0742C20.0727 14.9627 20.0566 13.8113 19.786 12.707L23.626 7.769C23.7757 7.57664 23.8499 7.33625 23.8348 7.093C23.8197 6.84974 23.7163 6.62038 23.544 6.448L20.55 3.454C20.3778 3.28156 20.1485 3.17796 19.9052 3.16267C19.662 3.14739 19.4215 3.22147 19.229 3.371Z" fill="currentColor" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M13.1181 2.04792C12.6817 1.94211 12.2504 2.20028 12.0773 2.61462C11 6.50002 8 8.55501 8 11.2699V17.7252C8 18.8717 8.66361 20.0005 9.83559 20.4273C12.4864 21.3926 14.2335 21.589 16.9595 21.3527C19.0504 21.1715 20.6221 19.5685 21.0577 17.6326L21.9024 13.8781C22.4651 11.3773 20.5633 9.00007 18 9.00007L15 9.00002C15.4693 6.18434 16.615 2.89587 13.1181 2.04792Z" fill="currentColor" />
            <path d="M2 11C2 10.1716 2.67157 9.5 3.5 9.5H5.5C6.32843 9.5 7 10.1716 7 11V19C7 19.8284 6.32843 20.5 5.5 20.5H3.5C2.67157 20.5 2 19.8284 2 19V11Z" fill="currentColor" />
        </svg>
    );
}

export default function Showreel() {
    const sectionRef = useRef(null);
    const draggerRef = useRef(null);
    const dragLabelRef = useRef(null);
    const stickerRef = useRef(null);
    const typeBadgeRef = useRef(null);
    const clientPillRef = useRef(null);
    const copyRef = useRef(null);
    const didAnimateActiveRef = useRef(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(activeIndex);
    const activeCard = showreelCards[activeIndex];

    useEffect(() => {
        showreelCards.forEach((card) => {
            const img = new Image();
            img.decoding = 'async';
            img.src = card.src;
        });
    }, []);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        const sticker = stickerRef.current;
        const typeBadge = typeBadgeRef.current;
        const clientPill = clientPillRef.current;
        const copy = copyRef.current;
        if (!sticker || !typeBadge || !clientPill || !copy) return;
        const copyTitle = copy.querySelector('h2');
        const copyLink = copy.querySelector('.showreel-link');

        if (!didAnimateActiveRef.current) {
            didAnimateActiveRef.current = true;
            return;
        }

        gsap.killTweensOf([sticker, typeBadge, clientPill, copy, copyTitle, copyLink]);
        gsap.timeline({ defaults: { ease: 'expo.out', overwrite: true } })
            .fromTo(
                sticker,
                { autoAlpha: 0, scale: 0.72, rotate: -18, y: 12 },
                { autoAlpha: 1, scale: 1, rotate: -7, y: 0, duration: 0.72 },
                0
            )
            .fromTo(
                typeBadge,
                { autoAlpha: 0, scale: 0.82, rotate: 4, y: -16 },
                { autoAlpha: 1, scale: 1, rotate: 0, y: 0, duration: 0.58 },
                0.05
            )
            .fromTo(
                clientPill,
                { autoAlpha: 0, scale: 0.86, y: 18 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 0.56 },
                0.08
            )
            .fromTo(
                copyTitle,
                { autoAlpha: 0, y: 14, scale: 0.99 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.48 },
                0.14
            )
            .fromTo(
                copyLink,
                { autoAlpha: 0, y: 10 },
                { autoAlpha: 1, y: 0, duration: 0.42 },
                0.2
            );
    }, [activeIndex]);

    useEffect(() => {
        const section = sectionRef.current;
        const dragger = draggerRef.current;
        const dragLabel = dragLabelRef.current;
        const dragLabelInner = dragLabel?.querySelector('.showreel-drag-label__inner');
        if (!section || !dragger || !dragLabel || !dragLabelInner) return;

        gsap.set(dragLabel, { autoAlpha: 0, rotation: -8 });
        gsap.set(dragLabelInner, { scale: 1, y: 6, transformOrigin: 'center center' });

        const xTo = gsap.quickTo(dragLabel, 'x', { duration: 0.14, ease: 'power3.out' });
        const yTo = gsap.quickTo(dragLabel, 'y', { duration: 0.14, ease: 'power3.out' });
        const rotationTo = gsap.quickTo(dragLabel, 'rotation', { duration: 0.18, ease: 'power3.out' });
        const scaleTo = gsap.quickTo(dragLabelInner, 'scale', { duration: 0.18, ease: 'power3.out' });
        let settleTween;
        let hideTween;
        let lastPointer = { x: 0, y: 0, time: 0 };
        let isPointerInside = false;
        let isDragging = false;
        let isLabelActive = false;

        const moveLabel = (event) => {
            const now = performance.now();
            const deltaX = event.clientX - lastPointer.x;
            const deltaY = event.clientY - lastPointer.y;
            const deltaTime = Math.max(now - lastPointer.time, 16);
            const speed = Math.min(Math.hypot(deltaX, deltaY) / deltaTime, 2.2);

            xTo(event.clientX + 24);
            yTo(event.clientY + 14);
            rotationTo(gsap.utils.clamp(-9, 9, deltaX * 0.09));
            scaleTo(1 + speed * 0.035);

            if (settleTween) settleTween.kill();
            settleTween = gsap.delayedCall(0.13, () => {
                rotationTo(0);
                scaleTo(1);
            });

            lastPointer = { x: event.clientX, y: event.clientY, time: now };
        };

        const showLabel = () => {
            isLabelActive = true;
            if (hideTween) hideTween.kill();
            gsap.killTweensOf(dragLabel, 'autoAlpha,opacity,visibility');
            gsap.killTweensOf(dragLabelInner, 'y');
            gsap.to(dragLabel, {
                autoAlpha: 1,
                duration: 0.2,
                ease: 'expo.out',
            });
            gsap.fromTo(dragLabelInner, { y: 6 }, {
                y: 0,
                duration: 0.42,
                ease: 'elastic.out(1, 0.58)',
            });
            rotationTo(0);
        };

        const hideLabel = (delay = 0.08) => {
            if (settleTween) settleTween.kill();
            if (hideTween) hideTween.kill();
            hideTween = gsap.delayedCall(delay, () => {
                if (isDragging || isPointerInside) return;
                isLabelActive = false;
                gsap.killTweensOf(dragLabel, 'autoAlpha,opacity,visibility');
                gsap.killTweensOf(dragLabelInner, 'y,scale');
                gsap.to(dragLabel, {
                    autoAlpha: 0,
                    duration: 0.18,
                    ease: 'power2.in',
                });
                gsap.to(dragLabelInner, { y: 6, scale: 1, duration: 0.18, ease: 'power2.out' });
                rotationTo(-8);
            });
        };

        const moveCarousel = (direction) => {
            setActiveIndex((current) => {
                const total = showreelCards.length;
                return (current + direction + total) % total;
            });
        };

        const draggables = Draggable.create(dragger, {
            type: 'x',
            allowNativeTouchScrolling: true,
            minimumMovement: 6,
            cursor: 'url("/assets/Cursor SVG/cursor-drag.svg") 18 18, grab',
            activeCursor: 'url("/assets/Cursor SVG/cursor-drag.svg") 18 18, grabbing',
            onPress(event) {
                isDragging = true;
                dragger.dataset.flickDragStatus = 'grabbing';
                showLabel();
                moveLabel(event);
            },
            onDrag(event) {
                moveLabel(event);
                const progress = Math.max(-1, Math.min(1, this.x / 120));
                section.style.setProperty('--showreel-drag-progress', progress.toFixed(3));
            },
            onRelease() {
                isDragging = false;
                dragger.dataset.flickDragStatus = 'grab';
                section.style.setProperty('--showreel-drag-progress', '0');

                if (this.x < -64) {
                    moveCarousel(1);
                } else if (this.x > 64) {
                    moveCarousel(-1);
                }

                gsap.to(dragger, { x: 0, duration: 0.32, ease: 'power3.out' });
                if (!isPointerInside) hideLabel(0);
            },
        });

        const onMove = (event) => {
            if (isPointerInside || isDragging || isLabelActive) moveLabel(event);
        };
        const onEnter = (event) => {
            isPointerInside = true;
            lastPointer = { x: event.clientX, y: event.clientY, time: performance.now() };
            showLabel();
            moveLabel(event);
        };
        const onLeave = () => {
            isPointerInside = false;
            if (dragger.dataset.flickDragStatus !== 'grabbing') hideLabel();
        };

        window.addEventListener('pointermove', onMove);
        dragger.addEventListener('pointerenter', onEnter);
        dragger.addEventListener('pointerleave', onLeave);

        const ctx = gsap.context(() => {
            const linkPaths = gsap.utils.toArray('.showreel-link svg path');
            linkPaths.forEach((path) => {
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
            });

            const revealTl = gsap.timeline({
                defaults: { ease: 'expo.out' },
                scrollTrigger: {
                    trigger: section,
                    start: 'top 72%',
                    toggleActions: 'play none none reverse',
                },
            });

            revealTl
                .fromTo('.showreel-stack', { autoAlpha: 0, y: 70, scale: 0.965 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.95 }, 0)
                .fromTo('.showreel-card__frame', { autoAlpha: 0, y: 44, scale: 0.93 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.035 }, 0.08)
                .fromTo('.showreel-lime-shape', { autoAlpha: 0, scale: 0.86, rotation: -4 }, { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.95 }, 0.12)
                .fromTo('.showreel-squiggle', { autoAlpha: 0, y: 22, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.72 }, 0.2)
                .fromTo('.showreel-active-sticker, .showreel-type-badge, .showreel-card-client', { autoAlpha: 0, y: 22, scale: 0.86 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, stagger: 0.06 }, 0.34)
                .fromTo('.showreel-copy h2', { autoAlpha: 0, y: 26, scale: 0.985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.68 }, 0.48)
                .fromTo('.showreel-link', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.56 }, 0.58)
                .to(linkPaths, { strokeDashoffset: 0, duration: 0.76, stagger: 0.08, ease: 'power2.out' }, 0.72);
        }, section);

        return () => {
            window.removeEventListener('pointermove', onMove);
            dragger.removeEventListener('pointerenter', onEnter);
            dragger.removeEventListener('pointerleave', onLeave);
            if (settleTween) settleTween.kill();
            if (hideTween) hideTween.kill();
            gsap.set(dragLabelInner, { scale: 1 });
            draggables.forEach((draggable) => draggable.kill());
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="showreel-section" id="showreel-section" data-bg-section="dark" data-theme-section="dark">
            <div ref={dragLabelRef} className="showreel-drag-label" aria-hidden="true">
                <span className="showreel-drag-label__inner">drag</span>
            </div>

            <svg className="showreel-squiggle" viewBox="0 0 80 109" fill="none" aria-hidden="true">
                <path d="M11.1056 107.429C11.1056 107.429 41.3921 75.9563 1.85536 45.3846C39.6893 67.1983 37.5729 21.5813 34.6647 13.925C40.0573 22.0799 72.2872 32.0642 78.2717 2.44878" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="showreel-shell">
                <div className="showreel-stack" aria-label="Carrossel de reels arrastavel">
                    <svg className="showreel-lime-shape" viewBox="0 0 449 458" fill="none" aria-hidden="true">
                        <path d="M404.776 223.259C398.804 258.396 403.743 292.836 415.688 327.792C416.361 329.723 417.484 333.136 416.339 334.169L416.226 334.281C415.328 335.201 413.218 335.089 410.681 334.595C400.847 332.777 391.912 330.554 382.078 329.229C352.936 326.647 323.413 330.778 296.718 343.531C273.728 353.858 258.259 366.813 243.576 387.131C226.872 406.103 219.576 425.029 217.667 450.376C217.151 459.469 213.02 460.143 208.889 451.454C200.537 434.503 193.532 416.273 182.172 401.141C171.013 386.974 159.047 372.717 144.813 361.784C136.977 355.991 129.726 349.391 121.419 344.249C117.153 341.578 112.281 340.006 107.97 337.536C92.9953 327.186 75.6629 320.922 58.2856 315.848C41.0655 310.146 23.1044 307.003 4.96379 305.723C1.32668 305.633 -1.74915 305.341 1.14707 301.39C3.84122 297.977 6.58028 294.744 8.98257 291.085C15.3812 281.52 21.3757 271.462 23.8902 259.967C25.372 252.513 27.7743 245.172 28.0662 237.561C27.9315 219.734 23.3963 201.459 12.8442 186.911C5.86184 177.414 9.29689 175.258 20.1184 175.438C38.9326 175.438 57.163 170.589 74.9893 164.796C92.5014 159.565 110.687 155.232 125.595 144.163C143.286 132.174 160.439 118.928 173.977 102.314C177.21 98.3179 179.253 93.5134 182.082 89.2476C186.819 82.7367 192.32 76.6973 195.553 69.1986C199.998 59.9487 202.221 49.5313 204.825 39.6078C206.509 32.6928 208.462 25.7778 209.226 18.6832C210.326 14.4624 207.542 -0.71468 212.257 0.0262124C214.928 0.609946 218.341 6.08806 220.384 9.05163C225.256 16.1687 230.24 23.2408 234.753 30.6049C240.321 40.3263 249.279 47.1515 257.496 54.3583C262.278 58.5792 266.409 63.8328 271.618 67.7168C276.759 71.6233 282.551 74.4747 288.164 77.6179C305.384 88.5965 324.715 94.6808 343.821 101.506C351.387 104.425 359.312 106.198 367.328 107.276C391.103 110.531 414.812 115.695 438.835 115.65C444.313 115.807 453.72 114.64 446.199 123.261C422.288 153.099 411.018 187.113 404.754 223.237L404.776 223.259Z" fill="currentColor" />
                    </svg>

                    <div className="showreel-card-list">
                        {showreelCards.map((card, index) => {
                            const status = getCardStatus(index, activeIndex);
                            const isActive = status === 'active';

                            return (
                                <article
                                    className={`showreel-card theme-${card.theme}`}
                                    data-showreel-card-status={status}
                                    aria-hidden={!isActive}
                                    key={card.src}
                                >
                                    <div className="showreel-card__frame">
                                        <img
                                            src={card.src}
                                            alt={card.alt}
                                            draggable="false"
                                            loading={Math.abs(getLoopOffset(index, activeIndex)) <= 2 ? 'eager' : 'lazy'}
                                            fetchPriority={isActive ? 'high' : 'auto'}
                                            decoding="async"
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <span ref={clientPillRef} className="showreel-card-client" data-showreel-type={activeCard.type}>{activeCard.client}</span>

                    <img
                        ref={stickerRef}
                        src={activeCard.sticker}
                        alt=""
                        className="showreel-active-sticker"
                        aria-hidden="true"
                        draggable="false"
                    />

                    <div ref={typeBadgeRef} className="showreel-type-badge" aria-hidden="true">
                        <TypeIcon type={activeCard.type} />
                        <span>{activeCard.type}</span>
                    </div>

                    <div
                        ref={draggerRef}
                        data-flick-cards-dragger=""
                        data-flick-drag-status="grab"
                        data-custom-cursor="drag"
                        className="showreel-dragger"
                    />
                </div>

                <div ref={copyRef} className="showreel-copy">
                    <h2>{activeCard.title}</h2>
                    <a href="#" className="showreel-link">
                        <span>View project</span>
                        <svg viewBox="0 0 180 13" fill="none" aria-hidden="true">
                            <path d="M2 8.5C60 4.5 119 2.8 178 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M49 11C82 8.7 115 7.8 148 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
