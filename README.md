## About

This package will convert your complex json object into url query string

### Usage

```
import jsonToUrl from '@autotrof/json-to-url'

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

const reulst = jsonToUrl(obj)
// will generate string => name=Agung&gender=Male&role%5B0%5D%5Bid%5D=1&role%5B0%5D%5Bname%5D=Admin&role%5B0%5D%5Bpermissions%5D%5B0%5D=C&role%5B0%5D%5Bpermissions%5D%5B1%5D=R&role%5B0%5D%5Bpermissions%5D%5B2%5D=U&role%5B0%5D%5Bpermissions%5D%5B3%5D=D&role%5B1%5D%5Bid%5D=2&role%5B1%5D%5Bname%5D=Root

// if you decode that. will return name=Agung&gender=Male&role[0][id]=1&role[0][name]=Admin&role[0][permissions][0]=C&role[0][permissions][1]=R&role[0][permissions][2]=U&role[0][permissions][3]=D&role[1][id]=2&role[1][name]=Root
```