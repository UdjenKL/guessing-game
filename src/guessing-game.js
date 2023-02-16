class GuessingGame {
    // В конструкторе устанавливаем начальные значения для минимального значения и максимального и текущее
    // угадываемое число this.currentGuess
    constructor() {
        this.min = null;
        this.max = null;
        this.currentGuess = null;
    }
// устанавливает диапазон  возможных чисел для игры
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
// возвращает текущее угадываемое число
    guess() {
        this.currentGuess = Math.ceil((this.min + this.max) / 2);
        return this.currentGuess;
    }
// уменьшает максимальное значение this.max до текущего угадываемого числа
    lower() {
        this.max = this.currentGuess;
    }
// увеличивает минимальное значение this.min до текущего угадываемого числа
    greater() {
        this.min = this.currentGuess;
    }
}

module.exports = GuessingGame;
