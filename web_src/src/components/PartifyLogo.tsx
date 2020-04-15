import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

interface IProps {
  size: '2xl' | 'xl' | 'lg' | 'sm' | 'xs' | 'md';
  animated?: boolean;
}
const genSize = (width: number, height: number) => ({ width, height });

const PartifyLogo = (props: IProps) => {
  let size: { width: number, height: number } = null; 

  switch (props.size) {
    case '2xl': size = genSize(375, 569);
                break;
    case 'xl':  size = genSize(250, 379);
                break;
    case 'lg':  size = genSize(125, 190);
                break;
    case 'md':  size = genSize(50, 76);
                break;
    case 'sm':  size = genSize(31, 47);
                break;
    case 'xs':  size = genSize(25, 38);
                break;
    default:    size = genSize(31, 47);
  }

  const animate = () => {
    if (props.animated) {
      TweenLite.fromTo(
        '.animatedLogo #circle1', 
        3,
        {
          rotation: 0,
          transformOrigin: 'center'
        },
        {
          repeat: -1,
          ease: 'linear',
          rotation: 360,
          transformOrigin: 'center'
        }
      )
      TweenLite.fromTo(
        '.animatedLogo #circle2', 
        2.5,
        {
          rotation: 0,
          transformOrigin: 'center'
        },
        {
          repeat: -1,
          ease: 'linear',
          rotation: 360,
          transformOrigin: 'center'
        }
      )
      TweenLite.fromTo(
        '.animatedLogo #circle3', 
        2,
        {
          rotation: 0,
          transformOrigin: 'center'
        },
        {
          repeat: -1,
          ease: 'linear',
          rotation: 360,
          transformOrigin: 'center'
        }
      )
    }
  }
  // On mount, run animate
  useEffect(animate, []);

  return (
    <svg width={size.width} height={size.height} className={props.animated && 'animatedLogo'} viewBox="0 0 250 379" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="17" y="14" width="111" height="207" rx="5" fill="#20173C"/>
      <rect x="17" y="14" width="21" height="365" rx="5" fill="#20173C"/>
      <ellipse cx="129.5" cy="117.5" rx="112.5" ry="103.5" fill="#20173C"/>
      <ellipse id="circle1" cx="124.861" cy="117.347" rx="100.729" ry="89.0389" transform="rotate(-19.0715 124.861 117.347)" fill="#57419E"/>
      <ellipse id="circle2" cx="124.861" cy="117.347" rx="76.2543" ry="67.4048" transform="rotate(-19.0715 124.861 117.347)" fill="#6B4DCA"/>
      <ellipse id="circle3" cx="124.861" cy="117.347" rx="53.2554" ry="47.075" transform="rotate(-19.0715 124.861 117.347)" fill="#7E60DC"/>
      <ellipse id="center" rx="14.418" ry="12.7448" transform="matrix(-0.945112 0.326747 0.326747 0.945112 124.861 117.347)" fill="#120D22"/>
    </svg>
  )
}

export default PartifyLogo;
