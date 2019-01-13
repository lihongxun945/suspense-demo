// 简单mock，只支持一个请求
// 重要提示：dev模式下会把错误显示出来，所以请在build模式下运行

let result = undefined;

export const createResource = (p) => {
  return {
    read (a) {
      if (result) return result;
      const _p = p(a).then((r) => {
        result = r;
      });
      throw { p: _p }; // 不要直接抛出 _p，否则react会当做内置的Suspense逻辑处理
    }
  }
}
