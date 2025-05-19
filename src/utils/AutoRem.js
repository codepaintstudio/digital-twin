import { debounce } from './tools';

const DEFAULT_WIDTH = 5120;

export default function AutoRem() {
    /** @param {UIEvent} [_ev] */
    function setRem(_ev) {
        const windowWidth = window.innerWidth;
        const ratio = windowWidth / DEFAULT_WIDTH;
        const baseFontSize = 10;
        const newFontSize = baseFontSize * ratio;
        document.documentElement.style.fontSize = `${newFontSize}px`;
    }

    setRem();
    window.addEventListener('resize', debounce(setRem, 500));
}

/**
 * 将px转换为rem
 * @param {number} px 像素值
 * @returns {number} rem值
 */
export function PxToRem(px) {
     const windowWidth = window.innerWidth;
    return px * (windowWidth / 5120);
}

/**
 * 将rem转换为px
 * @param {number} rem rem值
 * @returns {number} 像素值
 */
export function RemToPx(rem) {
    return rem * (DEFAULT_WIDTH / 512);
}