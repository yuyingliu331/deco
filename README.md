# Getting Started

Install all dependencies

```
npm install
```

Build assets and serve ionic app

```
ionic serve
```

Create db `deco` and `deco_testing` if you haven't already.

Migrate `deco` db:

```
npm run migrate
```

Migrate `deco_testing` db:

```
NODE_ENV=testing npm run migrate
```

Seed the database:

```
npm run seed
```
