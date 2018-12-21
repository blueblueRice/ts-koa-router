# ts-koa-router
提供koa的router的装饰器

#### install
```shell
  npm install bluebluerice-ts-koa-router --save
```

#### 引用
```javascript
  import decorators from 'bluebluerice-ts-koa-router'
```

#### 使用(基于koa2)
```javascript
  import Router from 'koa-router'

  @Controller({ prefix: '/api' })
  export default class MyRouter extends Router {
    @Request({ url: '/myurl', method: 'post' })
    async login(ctx: any, next: any){
        ctx.body = 'hello world'
    }
  }
```