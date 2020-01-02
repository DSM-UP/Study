const sam1 = {
  name: "Sam",
  age: 4
};

const sam2 = { name: "Sam", age: 4 }; // 한 줄로 선언했습니다.

const sam3 = {
  name: "Sam",
  classification: {
    // 프로퍼티 값도 객체가 될 수 있습니다.
    kingdom: "Anamalia",
    phylum: "Chordata",
    class: "Mamalia",
    order: "Carnioria",
    family: "Felidae",
    subfamily: "Felinae",
    genus: "Felis",
    species: "catus"
  }
};

sam3.classification.family; // "Felidae"
sam3["classification"].family; // "Felidae"
sam3.classification["family"]; // "Felidae"
sam3["classification"]["family"]; // "Felidae"

sam3.speak = function() {
  return "Meow!";
};
sam3.speak(); // "Meow!"

delete sam3.classification; // classification 트리 전체가 삭제됐습니다.
delete sam3.speak; // speak 함수가 삭제됐습니다.
