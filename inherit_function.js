const inherit = function(obj) {
  if(obj == null)
    throw TypeError()

  if(Object.create)
    return Object.create(obj)

  let type = typeof(obj)
  if(type !== 'object' && type !== 'function')
    throw TypeError()

  function f() {}
  f.prototype = obj
  return new f()
}
