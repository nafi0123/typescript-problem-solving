# TypeScript: Closing the "Any" Hole with Unknown and Type Narrowing

In the world of TypeScript, type safety is our shield. However, many developers inadvertently drop that shield by reaching for the `any` keyword. Understanding why `any` is a "type safety hole" and why `unknown` is a superior choice is crucial for writing robust code.

## Why is `any` a "Type Safety Hole"?
When you label a variable as `any`, you are effectively telling the TypeScript compiler: *"Trust me, I know what I'm doing. Stop checking this variable"*.
```typescript
let data: any = "Hello World";
data.push(1); /