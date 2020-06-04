
var tangtc213 = {
    /**
     * 给定参数分割数组
     * @param {Array} array 需要拆分的数组
     * @param {Number} size 拆分的大小
     * @return {Array[][]}
     */
    chunk : function(array, size=1){
        let stack = []
        stack[0] = []
        stack[1] = []
        for(let i = 0; i < size; i++) {
            stack[0][i] = array[i]
        }
        stack[1] = array.slice(size)
        return stack
    },

    /**
     * 给定数组返回去除false，null，0，""，undefined，NaN后的数组
     * @param {Array} array 需要操作的数组
     * @returns {Array}     返回处理后的数组
     */
    compact : function(array){
        let stack = []
        for(let i = 0; i < array.length; i++) {
            if(array[i] !== false |array[i] !== null | array[i] !== 0 | array[i] !== "" | array[i] !== undefined | array[i] !== NaN) {
                stack.push(array[i])
            }
        }
        return stack
    },
    /**
     * 将一个数组和一些值拼接起来
     * @param {Array} 带拼接的数组
     * @param {[values](...)} 待拼接的值
     * @returns {Array}
     */
    concat : function(array){
        let stack = array
        for(let i = 1; i < arguments.length; i++) {
            stack.push(arguments[i])
        }
        return stack
    },

    /**
     * 在一个数组中找出与另一个数组不同的元素并一数组的形式返回
     * @param {Array} 待处理的数组
     * @param{[Value]} 对照数组
     * @return {Array}
     */
    difference : function(array, value){
        let stack = []
        array.forEach(element => {
            if(value.indexOf(element) == -1) {
                stack.push(element)
            }
        });
        return stack
    },

    /**
     * 舍弃掉指定位置前的所有元素
     * @param {Array} 待处理数组
     * @param {[n = 1](Number)} 指定位置默认为1
     * @return {Array}
     */
    drop : function(array, n=1){
        let stack = array.slice(n)
        return stack
    },

    /**
     * 填充数组
     * @param {Array} 待处理的数组
     * @param {value} 填充物
     * @param {[start = 0](Number)} 填充起始位置
     * @param {[end = array.length](Number)} 填充结束位置
     * @returns {Array}
     */
    fill : function(array, value, start=0, end=array.length){
        stack = []
        stack  = array.slice(0, start)
        for(let i = start; i < end; i++) {
            stack.push(value)
        }
        return stack
    },
    find : function(){},
    first : function(){},
    flatten : function(){},
    indexOf : function(){},
    initial : function(){},
    intersection : function(){},
    join : function(){},
    last : function(){},
    lastIndexOf : function(){},
    nth : function(){},
    pull : function(){},
    pullAll : function(){},
    pullAt : function(){},
    remove : function(){},
    reverse : function(){},
    slice : function(){},
    sortedIndex : function(){},
    sortedIndexOf : function(){},
    tail : function(){},
    take : function(){},
    takeRight : function(){},
    union : function(){},
    uniq : function(){},
    unzip : function(){},
    without : function(){},
    xor : function(){},
    zip : function(){},
    zipObject : function(){},
    includes : function(){},
    sample : function(){},
    sampleSize : function(){},
    shuffle : function(){},
    size : function(){},
    eq : function(){},
    gt : function(){},
    gte : function(){},
    lt : function(){},
    lte : function(){},
    add : function(){},
    ceil : function(){},
    divide : function(){},
    floor : function(){},
    max : function(){},
    mean : function(){},
    min : function(){},
    multiply : function(){},
    round : function(){},
    substract : function(){},
    sum : function(){},
    at : function(){},
    defaults : function(){},
    get : function(){},
    set : function(){},
    has : function(){},
    hasIn : function(){},
    invert : function(){},
    keys : function(){},
    assign : function(){},
    omit : function(){},
    pick : function(){},
    values : function(){},
    camelCase : function(){},
    capitalize : function(){},
    deburr : function(){},
    endsWith : function(){},
    escape : function(){},
    kebabCase : function(){},
    lowerCase : function(){},
    lowerFirst : function(){},
    pad : function(){},
    padEnd : function(){},
    padStart : function(){},
    parseInt : function(){},
    repeat : function(){},
    replace : function(){},
    snakeCase : function(){},
    split : function(){},
    startCase : function(){},
    startsWith : function(){},
    trim : function(){},
    trimEnd : function(){},
    trimStart : function(){},
    truncate : function(){},
    unescape : function(){},
    upperCase : function(){},
    upperFirst : function(){},
    words : function(){},
    range : function(){},
}

