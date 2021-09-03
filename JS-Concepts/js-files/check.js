let fullList = [
  [
    {
      id: 0,
      email: "abc@abc.com",
      name: "abc",
    },
    {
      id: 1,
      email: "bcd@abc.com",
      name: "bcd",
    },
    {
      id: 2,
      email: "cde@abc.com",
      name: "cde",
    },
    {
      id: 3,
      email: "def@abc.com",
      name: "def",
    },
    {
      id: 4,
      email: "efg@abc.com",
      name: "efg",
    },
    {
      id: 5,
      email: "fgh@abc.com",
      name: "fgh",
    },
  ],
  [
    {
      id: 0,
      email: "abcd@abc.com",
      name: "abc",
    },
    {
      id: 1,
      email: "bcd@abc.com",
      name: "bcd",
    },
    {
      id: 2,
      email: "cde@abc.com",
      name: "cde",
    },
    {
      id: 3,
      email: "def@abc.com",
      name: "def",
    },
    {
      id: 4,
      email: "efg@abc.com",
      name: "efg",
    },
    {
      id: 5,
      email: "fgh@abc.com",
      name: "fgh",
    },
  ],
];

let sharedList = [
  {
    id: 0,
    email: "abc@abc.com",
    name: "abc",
  },
  {
    id: 1,
    email: "bcdc@abc.com",
    name: "bcd",
  },
];

let result = fullList.map((outerElement) => {
  return outerElement.filter((element) => {
    return !sharedList.some((innerElement) => {
      return innerElement["email"] === element["email"];
    });
  });
});
console.log("result", result);
