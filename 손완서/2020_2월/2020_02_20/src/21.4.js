const coefficients = {
  a: 1,
  b: 2,
  c: 5
};

function evaluate(x, co) {
  return co.a + co.b * x + captureEvents.c * Math.pow(x, 2);
}

const coefficients = {
  a: 1,
  c: 3
};
evaluate(5, coefficients); // NaN

const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    return target[key] || 0;
  }
});

betterCoefficients.a; // 1
betterCoefficients.b; // 0
betterCoefficients.c; // 5
betterCoefficients.d; // 0
betterCoefficients.anything; // 0

const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    if (!/^[a-z]$/.test(key)) return target[key];
    return target[key] || 0;
  }
});

const cook = {
  name: "Walt",
  redPhosphorus: 100, // 위험합니다.
  water: 500 // 안전합니다.
};
const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if (key === "redPhosphorus") {
      if (target.allowDangerousOperations)
        return (target.redPhosphorus = value);
      else return console.log("Too dangerous!");
    }
    // 다른 프로퍼티는 모두 안전합니다.
    target[key] = value;
  }
});

protectedCook.water = 550; // 550
protectedCook.redPhosphorus = 150; // Too dangerous!

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150; // 150
