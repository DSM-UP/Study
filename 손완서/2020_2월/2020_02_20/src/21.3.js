const appInfo = {
  company: "White Knight Software, Inc.",
  version: "1.3.5",
  buildId: "0a995448-ead4-4a8b-b050-9c9083279ea2",
  // 이 함수는 getter이므로 동결한 상태에서도 계속 동작합니다.
  copyright() {
    return `c ${new Date().getFullYear()}, ${this.company}`;
  }
};
Object.freeze(appInfo);
Object.isFrozen(appInfo); // true

appInfo.newProp = "test";
// TypeError: Can't add property newProp, object is not extensible

delete appInfo.company;
// TypeError: Cannot delete property 'company' of [object Object]

appInfo.company = "test";
// TypeError: Cannot assign to read-only property 'company' of [object Object]

Object.defineProperty(appInfo, "company", { enumerable: false });
// TypeError: Cannot redefine property: company

class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }
  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now()
    });
  }
}

const log = new Logger("Captain's Log");
Object.seal(log);
Object.isSealed(log); // true

log.name = "Captain's Boring Log"; // OK
log.add("Another boring day at sea...."); // OK

log.newProp = "test";
// TypError: Can't add property newProp, object is not extensible

log.name = "test"; // OK

delete log.name;
// TypeError: Cannot delete property 'name' of [object Object]

Object.defineProperty(log, "log", { enumerable: false });
// TypeError: Cannot redefine property: log

const log2 = new Logger("First Mate's Log");
Object.preventExtensions(logs);
Object.isExtensible(log2); // false

log2.name = "First Mate's Boring Log"; // OK
log2.add("Another boring day at sea...."); // OK

log2.newProp = "test";
// TypeError: Can't add property newProp, object is not extensible

log2.name = "test"; // OK
delete log2.name; // OK
Object.defineProperty(log2, "log", { enumerable: false });
