/**
 * 防抖函数
 * @param {(ev: UIEvent) => void} fn 需要防抖的函数
 * @param {number} [delay=500] 延迟时间，单位毫秒
 * @returns {(ev: UIEvent) => void} 防抖后的函数
 */
export function debounce(fn, delay = 500) {
    /** @type {number|null} */
    let timeout = null;
    return /** @this {Window} */ function (ev) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.call(this, ev);
        }, delay);
    };
}
