"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

function useIsMobileMotion() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px), (hover: none)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return mobile;
}

function useMotionReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready;
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeUpMobile: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const fadeBlur: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

export const clipUp: Variants = {
  hidden: { opacity: 0, y: 32, clipPath: "inset(8% 0 0 0)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.8, ease },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants,
  once = true,
  amount = 0.18,
}: RevealProps) {
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const mobile = useIsMobileMotion();
  const shouldReduce = ready && !!reduce;
  const resolved = variants ?? (ready && mobile ? fadeUpMobile : fadeUp);

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={resolved}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: mobile ? 0.12 : amount, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  variants = stagger,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const shouldReduce = ready && !!reduce;

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -6% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const ready = useMotionReady();
  const mobile = useIsMobileMotion();
  return (
    <motion.div
      className={className}
      variants={variants ?? (ready && mobile ? fadeUpMobile : fadeUp)}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  id,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
  delay?: number;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const mobile = useIsMobileMotion();
  const words = text.split(" ");
  const shouldReduce = ready && !!reduce;

  if (shouldReduce) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block", paddingRight: "0.28em" }}
            initial={{ y: ready && mobile ? "70%" : "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              delay: delay + i * (ready && mobile ? 0.05 : 0.07),
              duration: ready && mobile ? 0.55 : 0.8,
              ease,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Parallax({
  children,
  className,
  speed = 40,
  style,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const mobile = useIsMobileMotion();
  const shouldReduce = ready && !!reduce;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ready && mobile ? [speed * 0.35, -speed * 0.35] : [speed, -speed],
  );

  if (shouldReduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  );
}

export function Magnetic({
  children,
  className,
  strength = 18,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const mobile = useIsMobileMotion();

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!ready || reduce || mobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  }

  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transition: "transform 280ms var(--ease-out)",
        ...(className ? {} : { display: "inline-flex" }),
      }}
    >
      {children}
    </div>
  );
}
