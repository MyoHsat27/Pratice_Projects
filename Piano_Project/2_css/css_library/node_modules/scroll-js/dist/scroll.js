/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_DURATION = 300;
function scrollTo(el, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(el instanceof Element) && !(el instanceof Window)) {
            throw new Error(`element passed to scrollTo() must be either the window or a DOM element, you passed ${el}!`);
        }
        options = sanitizeScrollOptions(options);
        const scroll = (from, to, prop, startTime, duration = DEFAULT_DURATION, easeFunc, callback) => {
            window.requestAnimationFrame(() => {
                const currentTime = Date.now();
                const time = Math.min(1, (currentTime - startTime) / duration);
                if (from === to) {
                    return callback ? callback() : null;
                }
                setScrollPosition(el, easeFunc(time) * (to - from) + from);
                /* prevent scrolling, if already there, or at end */
                if (time < 1) {
                    scroll(from, to, prop, startTime, duration, easeFunc, callback);
                }
                else if (callback) {
                    callback();
                }
            });
        };
        const currentScrollPosition = getScrollPosition(el);
        const scrollProperty = getScrollPropertyByElement(el);
        return new Promise((resolve) => {
            scroll(currentScrollPosition, typeof options.top === 'number'
                ? options.top
                : currentScrollPosition, scrollProperty, Date.now(), options.duration, getEasing(options.easing), resolve);
        });
    });
}
function scrollIntoView(element, scroller, options) {
    validateElement(element);
    if (scroller && !(scroller instanceof Element)) {
        options = scroller;
        scroller = undefined;
    }
    const { duration, easing } = sanitizeScrollOptions(options);
    scroller = scroller || utils.getDocument().body;
    let currentContainerScrollYPos = 0;
    let elementScrollYPos = element ? element.offsetTop : 0;
    const document = utils.getDocument();
    // if the container is the document body or document itself, we'll
    // need a different set of coordinates for accuracy
    if (scroller === document.body || scroller === document.documentElement) {
        // using pageYOffset for cross-browser compatibility
        currentContainerScrollYPos = window.pageYOffset;
        // must add containers scroll y position to ensure an absolute value that does not change
        elementScrollYPos =
            element.getBoundingClientRect().top + currentContainerScrollYPos;
    }
    return scrollTo(scroller, {
        top: elementScrollYPos,
        left: 0,
        duration,
        easing,
    });
}
function validateElement(element) {
    if (element === undefined) {
        const errorMsg = 'The element passed to scrollIntoView() was undefined.';
        throw new Error(errorMsg);
    }
    if (!(element instanceof HTMLElement)) {
        throw new Error(`The element passed to scrollIntoView() must be a valid element. You passed ${element}.`);
    }
}
function getScrollPropertyByElement(el) {
    const props = {
        window: {
            y: 'scrollY',
            x: 'scrollX',
        },
        element: {
            y: 'scrollTop',
            x: 'scrollLeft',
        },
    };
    const axis = 'y';
    if (el instanceof Window) {
        return props.window[axis];
    }
    else {
        return props.element[axis];
    }
}
function sanitizeScrollOptions(options = {}) {
    if (options.behavior === 'smooth') {
        options.easing = 'ease-in-out';
        options.duration = DEFAULT_DURATION;
    }
    if (options.behavior === 'auto') {
        options.duration = 0;
        options.easing = 'linear';
    }
    return options;
}
function getScrollPosition(el) {
    const document = utils.getDocument();
    if (el === document.body ||
        el === document.documentElement ||
        el instanceof Window) {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }
    else {
        return el.scrollTop;
    }
}
function setScrollPosition(el, value) {
    const document = utils.getDocument();
    if (el === document.body ||
        el === document.documentElement ||
        el instanceof Window) {
        document.body.scrollTop = value;
        document.documentElement.scrollTop = value;
    }
    else {
        el.scrollTop = value;
    }
}
const utils = {
    // we're really just exporting this so that tests can mock the document.documentElement
    getDocument() {
        return document;
    },
};
const easingMap = {
    linear(t) {
        return t;
    },
    'ease-in'(t) {
        return t * t;
    },
    'ease-out'(t) {
        return t * (2 - t);
    },
    'ease-in-out'(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
};
const getEasing = (easing) => {
    const defaultEasing = 'linear';
    const easeFunc = easingMap[easing || defaultEasing];
    if (!easeFunc) {
        const options = Object.keys(easingMap).join(',');
        throw new Error(`Scroll error: scroller does not support an easing option of "${easing}". Supported options are ${options}`);
    }
    return easeFunc;
};

export { DEFAULT_DURATION, easingMap, scrollIntoView, scrollTo, utils };
