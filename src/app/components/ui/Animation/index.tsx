'use client';

import Lottie from 'lottie-react';

interface AnimationProps {
  loop?: boolean;
  width: number;
  height: number;
  animation: any;
}

export default function Animation({
  loop = true,
  width,
  height,
  animation,
}: AnimationProps) {
  return (
    <Lottie animationData={animation} loop={loop} style={{ width, height }} />
  );
}
