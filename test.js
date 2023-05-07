import jsonToUrl from './index.min.js'

const obj = {
  name: "Agung",
  gender: "Male",
  role: [
    {
      id: 1,
      name: "Admin",
      permissions: [
        "C", "R", "U", "D"
      ]
    },
    {
      id: 2,
      name: "Root"
    }
  ]
}

console.log(decodeURI(jsonToUrl(obj)))