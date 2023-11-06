

## Description

轮播图后端服务，项目基于nestJs开发，数据库使用mysql.

## API

获取轮播图
Get: `/api/carousel/list/${carouselId}`

更新轮播图
Put: `/api/carousel/update/${id}`

新增轮播图中的图片
Post: `/api/carousel/${carouselId}/add`

删除轮播图
Delete: `/api/carousel/delete/${id}`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

