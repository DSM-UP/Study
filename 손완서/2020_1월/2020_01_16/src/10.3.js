const roles = new Set();

roles.add("User"); // Set [ "User" ]

roles.add("Admin"); // Set [ "User", "Admin" ]

roles.size; // 2

roles.add("User"); // Set [ "User", "Admin" ]
roles.size; // 2

roles.delete("Admin"); // true
roles; // Set [ "User" ]
roles.delete("Admin"); // false
