export function removeScript (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]) {
    let originalMethodReturn = originalMethod.apply(this, args)
    if (typeof originalMethodReturn === 'string') {
      originalMethodReturn = originalMethodReturn.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    return originalMethodReturn
  }
}
