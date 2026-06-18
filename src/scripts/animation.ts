import { gsap } from 'gsap';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// IntersectionObserver で画面内に入ったらフェードアップ
// （スクロール位置計算に依存しないので、リロード位置に関係なく必ず再生される）
const reveal = (
  selector: string,
  opts: { y?: number; duration?: number; delay?: number } = {},
) => {
  const { y = 40, duration = 0.9, delay = 0 } = opts;
  const els = gsap.utils.toArray<HTMLElement>(selector);
  if (!els.length) return;

  gsap.set(els, { opacity: 0, y });

  // threshold:0 + 下方向 -25% で「要素の上端が画面の下から25%ラインを越えたら」発火
  // （面積割合だと縦長要素が早く発火しすぎて、見る前にフェードが終わってしまうため）
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        gsap.to(entry.target, { opacity: 1, y: 0, duration, delay, ease: 'power3.out' });
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -25% 0px', threshold: 0 },
  );

  els.forEach((el) => io.observe(el));
};

// ヒーローの登場演出
const initHero = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  gsap.set('.indicators .indicator', { opacity: 0, y: 16 });
  gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .from('.hero', { opacity: 0, duration: 1.1 })
    .to('.indicators .indicator', { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 }, '-=0.4');
};

const init = () => {
  if (prefersReduced) return;

  initHero();

  reveal('.section-title');
  reveal('.price-block', { y: 30, duration: 0.7 });
  reveal('.rooms .pills');

  // Rooms - 画像→テキストの順にフェードイン
  reveal('.rooms .item .media', { y: 24, duration: 0.8 });
  reveal('.rooms .item .body', { y: 20, duration: 0.7, delay: 0.15 });

  reveal('.info-list');
  reveal('.access .address');
  reveal('.access .access-map');
  reveal('.contact .sns-item, .contact .tel', { y: 30, duration: 0.7 });
  reveal('.footer .footer-inner');
};

if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init, { once: true });
}
