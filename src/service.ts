export default function () {
  return function (target: any) {
    return new target()
  }
}