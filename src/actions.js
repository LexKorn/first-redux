export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rst = () => ({type: 'RST'});
export const rnd = (value) => ({type: 'RND', payload: value});