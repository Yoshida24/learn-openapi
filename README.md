# learn-openapi
Swagger EditorでAPI仕様書とNode.jsのサーバを作る. 

## Rounch Editor

```bash
open https://editor.swagger.io/
```

## Edit

適当にdemo.yaml を貼る。  

## Generate Doc Server And API Server
Choose `Generate server` on Editor, and Click `nodejs-server`.
（Sample: nodejs-server-server-generated）

### Run Doc Server

```bash
cd nodejs-server-server-generated
npm run prestart
npm start
```

### Check API

```bash
curl -X GET "http://localhost:8080/hello?userName=myname" -H "accept: application/json"
# {
#   "HelloUser": "Hello, userName"
# }
```

## 参考
https://qiita.com/se_fy/items/ad05a3c6825bb9612170