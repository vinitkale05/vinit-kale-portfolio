/**
 * A simple utility to split text into characters, words, and lines.
 * Mimics some of the basic functionality of GSAP's SplitText.
 */
export class SplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  originalHTML: string[] = [];

  constructor(
    target: string | string[] | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
    options: { type?: string; linesClass?: string; wordsClass?: string; charsClass?: string } = {}
  ) {
    if (typeof target === "string") {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target) && typeof target[0] === "string") {
      this.elements = Array.from(document.querySelectorAll(target.join(",")));
    } else if (target instanceof HTMLElement) {
      this.elements = [target];
    } else {
      this.elements = Array.from(target as any);
    }

    const types = options.type ? options.type.split(",") : ["words"];
    const linesClass = options.linesClass || "";
    const wordsClass = options.wordsClass || "";
    const charsClass = options.charsClass || "";

    this.elements.forEach((el, index) => {
      this.originalHTML[index] = el.innerHTML;
      this.split(el, types, { linesClass, wordsClass, charsClass });
    });
  }

  private split(
    el: HTMLElement,
    types: string[],
    classes: { linesClass: string; wordsClass: string; charsClass: string }
  ) {
    const text = el.innerText;
    el.innerHTML = "";

    // Split into lines first if requested (simplified line splitting by wrapping everything in one line for now)
    // Real line splitting requires measuring positions, but for most reveal effects, wrapping words/chars is enough.
    // If lines are requested, we'll wrap the whole content in a line div if it's the only type, 
    // or wrap words in lines if both are requested.

    if (types.includes("lines") || types.includes("words") || types.includes("chars")) {
      const words = text.split(/\s+/);
      
      words.forEach((wordText, i) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.whiteSpace = "nowrap";
        if (classes.wordsClass) wordSpan.className = classes.wordsClass;
        this.words.push(wordSpan);

        if (types.includes("chars")) {
          const chars = wordText.split("");
          chars.forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.style.display = "inline-block";
            charSpan.textContent = char;
            if (classes.charsClass) charSpan.className = classes.charsClass;
            this.chars.push(charSpan);
            wordSpan.appendChild(charSpan);
          });
        } else {
          wordSpan.textContent = wordText;
        }

        el.appendChild(wordSpan);
        if (i < words.length - 1) {
          el.appendChild(document.createTextNode(" "));
        }
      });
    }

    // Simplified line wrapping: if "lines" is requested, wrap each existing child in a line div
    if (types.includes("lines")) {
      const children = Array.from(el.childNodes);
      el.innerHTML = "";
      
      // A more robust line detection would measure offsetTop, but for simplicity:
      let currentLine: HTMLElement | null = null;
      let lastOffsetTop = -1;

      children.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim() === "") {
          return;
        }

        if (child instanceof HTMLElement) {
          const offsetTop = child.offsetTop;
          if (offsetTop !== lastOffsetTop) {
            currentLine = document.createElement("div");
            currentLine.style.display = "block";
            currentLine.style.position = "relative";
            if (classes.linesClass) currentLine.className = classes.linesClass;
            this.lines.push(currentLine);
            el.appendChild(currentLine);
            lastOffsetTop = offsetTop;
          }
          if (currentLine) currentLine.appendChild(child);
        } else {
          if (currentLine) currentLine.appendChild(child);
        }
      });
    }
  }

  revert() {
    this.elements.forEach((el, index) => {
      el.innerHTML = this.originalHTML[index];
    });
  }
}
