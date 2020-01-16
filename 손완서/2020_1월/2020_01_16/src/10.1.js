const u1 = { name: "Cynthia" };
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

const userRoles = new Map();

userRoles.set(u1, "User");
userRoles.set(u2, "User");
userRoles.set(u3, "Admin");
// 애석하지만 제임스에게는 역할이 없습니다.

userRoles
  .set(u1, "User")
  .set(u2, "User")
  .set(u3, "Admin");

const userRoles = new Map([
  [u1, "User"],
  [u2, "User"],
  [u3, "Admin"]
]);

userRoles.get(u2); // "User"

userRoles.has(u1); // true
userRoles.get(u1); // "User"
userRoles.has(u4); // false
userRoles.get(u4); // undefined

userRoles.get(u1); // 'User'
userRoles.set(u1, "Admin");
userRoles.get(u1); // 'Admin'

userRoles.size; // 3

for (let u of userRoles.keys()) console.log(u.name);

for (let r of userRoles.values()) console.log(r);

for (let ur of userRoles.entries()) console.log(`${ur[0].name}: ${ur[1]}`);

// 맵도 분해할 수 있습니다.
// 분해하면 좀 더 자연스러운 코드가 됩니다.
for (let [u, r] of userRoles.entries()) console.log(`${u.name}: ${r}`);

// entries() 메서드는 맵의 기본 이터레이터입니다.
// 위 코드는 다음과 같이 단축해서 쓸 수 있습니다.
for (let [u, r] of userRoles) console.log(`${u.name}: ${r}`);

[...userRoles.values()]; // ["User", "User", "Admin"]

userRoles.delete(u2);
userRoles.size; // 2

userRoles.clear();
userRoles.size; // 0
