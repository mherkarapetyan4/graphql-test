export const get = (object, path, defValue) => {
  const _path = Array.isArray(path) ? path : path.split(".");

  if(!_path.length) {
    return object === undefined ? defValue : object
  }

  if(object === null || object === undefined || typeof (object[_path[0]]) === 'undefined') {
      return defValue
  } 
  return get(object[_path.shift()], _path, defValue)
};
