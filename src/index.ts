//@ts-strict
interface TestType {
  bar: string;
}

const foo: TestType | undefined = undefined;

console.log(foo.bar);
