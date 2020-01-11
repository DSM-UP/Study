console.log("before block");
{
  console.log("inside block");
  const x = 3;
  console.log(x); // 3
}
console.log(`outside block; x = ${x}`); // ReferenceError: x는 정의되지 않았습니다.
