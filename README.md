# Amandas Emporium

## New root module

1. Run the following command

```bash
ng g module [name] --project=website --routing=true
```

2. Update `app-routing.module.ts` with a new route

```ts
  {
    path: '[name]',
    loadChildren: () => import('./[name]/[name].module').then((m) => m.[Name]Module),
  },
```

## Adding a new feature to a module

1. Run the following command

```bash
ng g module [module]/feature/[name] --module=[module] --project=website --routing=true --route=[name]
```

### New components

1. Run the following command

```bash
ng g module [module]/components/[name]
ng g component [module]/components/[name]
```