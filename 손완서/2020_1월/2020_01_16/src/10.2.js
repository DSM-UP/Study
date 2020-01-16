const SecretHolder = function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  };
};

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret("secret A");
b.setSecret("secret B");

a.getSecret(); // "secret A"
b.getSecret(); // "secret B"
