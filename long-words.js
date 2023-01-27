const longWords = (arr) => arr.every((elem) => elem.length > 4);

const oneLongWord = (arr) => arr.some((elem) => elem.length > 9);

const noLongWords = (arr) => arr.every((elem) => elem.length < 7);