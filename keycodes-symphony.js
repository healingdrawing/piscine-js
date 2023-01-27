export const compose = () => {

  const del = (str) => {
    const arr = document.querySelectorAll("div");
    switch (str) {
      case "Escape":
        arr.forEach((each) => each.remove());
        return;
      case "Backspace":
        try { arr[arr.length - 1].remove() || undefined; } finally { return }
    }
  };

  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === "Backspace" || keyName === "Escape") {
      return del(keyName);
    }

    if (keyName.length === 1 && /[a-z]/.test(keyName)) {
      let note = document.createElement("div");
      note.className = "note";
      note.style.background = keyColor(keyName);
      note.textContent = keyName;
      document.querySelector("body").append(note);
    }
  },
    false
  );
};

const keyColor = (key) => {
  const h = (key.charCodeAt(0) - "a".charCodeAt(0)) / ("z".charCodeAt(0) - "a".charCodeAt(0));
  let color = `hsl(${30 + (210 * h)} , 100%, 40%)`;
  return color;
};