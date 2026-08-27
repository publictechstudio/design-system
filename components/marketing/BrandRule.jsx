import React from 'react';

/* The studio's signature: a 6px rule whose colour cycles blue → green →
   yellow → blue as the page scrolls, completing the cycle twice over the
   full document height. Interpolated in RGB, not stepped. */
const BLUE = [66, 133, 244];
const GREEN = [34, 197, 94];
const YELLOW = [255, 235, 59];

function mix(a, b, t) {
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(', ')})`;
}

export function cycleColor(progress) {
  const c = (progress * 6) % 3;
  if (c <= 1) return mix(BLUE, GREEN, c);
  if (c <= 2) return mix(GREEN, YELLOW, c - 1);
  return mix(YELLOW, BLUE, c - 2);
}

export function useCycleColor(target) {
  const [color, setColor] = React.useState(() => cycleColor(0));
  React.useEffect(() => {
    const el = target?.current;
    const read = () => {
      const scrollTop = el ? el.scrollTop : window.scrollY;
      const max = el
        ? el.scrollHeight - el.clientHeight
        : document.body.scrollHeight - window.innerHeight;
      setColor(cycleColor(Math.min(scrollTop / (max || 1), 1)));
    };
    read();
    const node = el || window;
    node.addEventListener('scroll', read, { passive: true });
    return () => node.removeEventListener('scroll', read);
  }, [target]);
  return color;
}

export function BrandRule({ progress, height = 6, scrollTarget, style, ...rest }) {
  const auto = useCycleColor(scrollTarget);
  const color = progress == null ? auto : cycleColor(progress);
  return (
    <div
      aria-hidden
      style={{ height, background: color, width: '100%', ...style }}
      {...rest}
    />
  );
}
