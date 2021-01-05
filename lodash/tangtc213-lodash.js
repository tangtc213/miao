
var tangtc213 = {


    /**
     * 限定函数参数
     * @param {Function} func
     * @param {Number} [n = func.length]
     * @return {Function}
     */

    ary : function(func, n = func.length) {
        return function(...args) {
            return func(...args.slice(0,n))
        }
    },


    /**
     * 势函数只接受一个参数
     * @param {Function} func
     * @return {Function}
     */
    unary : function(func) {
       return function(args) {
           return func(args)
       }
    },
    /**
     *
     * @param {Function} func
     * @param  {...ary} fixArgs
     */
    blind : function(func, ...fixArgs){
        return function(...args){
            var copy = fixArgs.slice()
            var j = 0
            for(var i = 0; i < copy.length ; i++) {
                if(copy[i] === null) {
                    copy[i] = args[i]
                }
            }
            while(j < args.length) {
                copy.push(args[j++])

            }
            return f(...copy)
        }
    },

    /**
     *  当函数调用次数大于n次后返回第n次的调用结果
     * @param {Number} n
     * @param {Function} func
     */
    before: function(n, func) {
        var i = 0
        var result
        return function(...args) {
            i++
            if(i < n) {
                result  = func(...args)
            }
            return result
        }
    },
    /**
     *  当函数调用次数大于n次后返回原函数
     * @param {Number} n
     * @param {Function} func
     */
    before : function(n, func) {
        var i = 0
        return function(...args) {
            i++
            if(i < n) {

            } else {
               return func(...arg)
            }
            return result
        }
    },

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
        stack  = array
        for(let i = start; i < end; i++) {
            stack[i] = value
        }
        return stack
    },

    /**
     * 在数组中寻找指定内容并返回第一次出现的所在位置
     * @param {Array} 待处理数组
     * @param {Function} 指定的内容
     * @param {number} 默认返回0
     * @return {number}
     */
    find : function(array, action, fromindex=0){
        for(let i = 0; i < array.length; i++) {
            if(action(i)) {
                fromIndex = i + 1
                return fromindex
            }
        }
    },

    /**
     * 返回数组的第一个元素
     * @param {Array} 待处理的数组
     * @return {*}
     */
    first : function(array){
        return array[0]
    },

    /**
     * 在数组内展开一次内层数组
     * @param {Array} 待处理的数组
     * @return {Array} 处理后的数组
     */
    flatten : function(array){
        let stack = []
        for(let i = 0; i < array.length; i++) {
            if(typeof(array[i] == "object")) {
                while(array[i].length != 0) {
                    stack.push(array[i].shift())
                }
            } else {
                stack.push(array[i])
            }
        }
        return stack
    },

    /**
     * 调用函数时令参数反转
     * @param {Function} func
     * @return {Function}
     */
    flip : function() {
        return function(...args) {
            return func(...args,reverse())
        }
    },

    /**
     * @param {Array} ary
     * @param {any} predicate
     */
    filter: function(ary, predicate){
        var test = predicate
        if(typeof(predicate) === "string") {
            test = it => it[predicate]
        } else if(typeof(predicate) === "object"){
            if(Array.isArray(predicate)) {
                predicate = fromPairs(predicate)
            }
            test = it => {
                for(var key in predicate) {
                    if (predicate[key] != it[key]) {
                        return false
                    }
                }
                return true
            }
        }
    },


    /**
     * 查询数组中某元素（第一次出现）所在的位置
     * @param {Array} 待查询的数组
     * @param {Value} 寻找的值
     * @param {[fromIndex]} 查询开始的起点
     * @return {Number} 返回位置下标
     */
    indexOf : function(array, value, fromIndex=0){
        let start = fromIndex
        for(let i = start; i < array.length; i++) {
            if(array[i] === value) {
                return i
            }
        }
        return -1
    },

    /**
     * 获取数组中除了最后一个元素外的所有元素并已数组返回
     * @param {Array} 待处理的数组
     * @return {Array} 返回获取的数组
     */
    initial : function(array){
        let stack = array
        stack.pop()
        return stack
    },

    /**
     * 返回给定函数的交集
     * @param {...Array} 用于比较的数组
     * @return {Array} 交集
     */
    intersection : function(...arys){
        let stack = []
        let arr = Array.from(arguments)
        if(arr.length == 0) {
            return []
        } else if(arr.length == 1) {
            return arguments[0]
        } else {
            for(i = 0; i < arguments[0].length; i++) {
                let flag = 1
                for(let j = 1; j < arr.length; j++) {
                    if(arguments[j].indexOf(arguments[0][i]) == -1) {
                        flag = 0
                        break
                    }
                }
                if(flag) {
                    stack.push(arguments[0][j])
                }
            }
            return stack
        }

    },

    /**
     * 将数组中的所有元素转换为用分隔符分隔的字符串。
     * @param {Array} ary
     * @param {String} separator = " , "
     * @return {String}
     */
    join : function(ary, separator = ","){
        let n = ary.length
        let list = ""
        for(let i = 0; i < n; i++) {
            list += ary[i]
            if(i != n - 1) {
                list += separator
            }
        }
        return list
    },

    /**
     * 返回给定数组的最后一个元素
     * @param {Array} ary
     * @return {any}
     */
    last : function(ary){
        return ary[ary.length - 1]
    },

    /**
     * 从右向左遍历数组并返回第一次遇到给定元素的下标
     * @param {Array} ary
     * @param {*} value
     * @param {Number} fromIndex = ary.length - 1
     * @returns {Number}
     */
    lastIndexOf : function(ary, value, fromIndex = ary.length -1){
        let n = fromIndex + 1
        while(n--) {
            if(ary[n] == value) {
                return n
            }
        }
        return n
    },
    nth : function(){},

    /**
     * 返回一个函数的否定
     * @param {Function} func
     * @return {Boolean}
     */
    negate: function(func) {
        return function(...args) {
            return !func(...args)
        }
    },

    /**
     * 将给定值从数组中删除并返回新的数组
     * @param {Array} array
     * @Param {...any} value
     * @return {Array}
     */
    pull : function(array, value){
        let arg = Array.from(arguments)
        arg.shift()
        return array.reduce((stack, item) => {
            let flag = arg.reduce((is, p) => {
                is *= (p == item) ? 0 : 1
                return is
            }, 1)
            if(flag) {
                stack.push(item)
            }
            return stack
        }, stack)
    },

    /**
     * 将给定数组并从数组中删除与给定数组中相同的元素并返回新的数组
     * @param {Array} array
     * @Param {Array} arg
     * @return {Array}
     */
    pullAll : function(array, arg){
        return array.reduce((stack, item) => {
            let flag = arg.reduce((is, p) => {
                is *= (p == item) ? 0 : 1
                return is
            }, 1)
            if(flag) {
                stack.push(item)
            }
            return stack
        }, stack)
    },

    /**
     * 从数组中删除与索引对应的元素，并返回已删除元素的数组。
     * @param {Array} array
     * @param {Array} indexes
     * @return {Array}
     */
    pullAt : function(array, indexes){
        return array.reduce((stack, item, idx) => {
            let flag = indexes.reduce((is, p,) => {
                is *= (p == idx) ? 0 : 1
                return is
            }, 1)
            if(!flag) {
                stack.push(item)
            }
            return stack
        }, [])
    },

    /**
     * 从数组中删除经过函数判断后为true的数组，并返回已删除元素的数组。
     * @param {Array} array
     * @param {Function} test
     * @return {Array}
     */
    remove : function(array, test){
        return array.reduce((stack, item) => {
            let flag = test(item)
            if(!flag) {
                stack.push(item)
            }
            return stack
        }, [])
    },

    /**
     * 反转数组
     * @param {Array} array
     */
    reverse : function(array){
        let n = array.length
        for(let i = 0; i < n / 2; i++) {
            let temp = array[i]
            array[i] = array[n - i]
            array[n - i] = temp
        }
        return array
    },

    /**
     * 从原数组的start到end创建一个新的数组片
     * @param {Array} array
     * @param {Number} start
     * @param {Number} end
     * @return {Array}
     */
    slice : function(array, start = 0, end = array.length){
        return array.reduce((stack, item, idx) => {
            if(start <= idx && idx < end) {
                stack.push(item)
            }
            return item
        })
    },
    //  顺序数组插入位置
    sortedIndex : function(ary, value){
        for( let idx in ary) {
            if(ary[idx] >= value) {
                return idx
            }
        }
    },
    // 已排序数组插入位置
    sortedIndexOf : function(ary, value){
        for( let idx in ary) {
            if(ary[idx] >= value) {
                return idx
            }
        }
    },

    // 切片除第一个数组
    tail : function(ary){
        return ary.slice(1)
    },

    // 切片数组
    take : function(ary, n = 1){
        return ary.slice(0, n)
    },

    // 从右向左切片数组
    takeRight : function(ary, n = 1){
        if(n >= ary.length) {
            return ary
        } else {
            return ary.slice(ary.length - n, ary.length)
        }
    },

    union : function(ary){

    },

    // 返回独一无二的数组
    uniq : function(ary){
        let aset = new Set(ary)
        return Array.from(aset)
    },

    // 返回解包数组
    unzip : function(ary){
        let arr = []
        let arylength = ary[0].length
        for(let i = 0; i < arylength; i++) {
            let temp =[]
            ary.forEach(it => {
                temp.push(it[i])
            })
            arr.push(temp)
        }
        return arr
    },

    // 剔除所有给定值的新数组
    without : function(ary, values){
        return ary.filter(it => !values.includes(it))
    },

    // 剔除所有重复的数组项
    xor : function(arys){
        let newAry = []
        arys.forEach(it => {
            newAry = newAry.concat(it)
        })
        return newAry.filter(it => newAry.indexOf(it) === newAry.lastIndexOf(it))
    },
    // 打包数组
    zip : function(...args){
        let result = []
        let arylen = arguments[0].length
        let len = arguments.length
        for(let i = 0; i < arylen; i++) {
            let temp = []
            for(let j = 0; j < len; j++) {
                temp.push(arguments[j][i])
            }
            result.push(temp)
        }
        return result
    },
    // 打包数组成对象
    zipObject : function(
        props = [],
        values = []
    ){
        let obj = {}
        for(let i = 0; i < props.length; i++) {
            obj[props[i]] = values[i]
        }
        return obj
    },

    // 从指定位置检索数组看是否包含元素
    includes : function(collection, value ,fromIndex = 0){
        return collection.slice(fromIndex).indexOf(value) !== -1
    },

    // 从集合中随机获取元素
    sample : function(collection){
        let len = collection.length
        let idx = Math.floor(Math.random() * len)
        return collection[idx]
    },

    // 从集合中获得n个随机元素
    sampleSize : function(collection, n = 1){
        if(n > collection.length) {
           n = collection.length
        }
        let result = []
        while(n--) {
            let len = collection.length
            let idx = Math.floor(Math.random() * len)
            result.push(...collection.splice(idx, 1))
        }
        return result
    },
    // 洗牌数组
    shuffle : function(collection){
        let n = collection.length
        let result = []
        while(n--) {
            let len = collection.length
            let idx = Math.floor(Math.random() * len)
            result.push(...collection.splice(idx, 1))
        }
        return result
    },

    // 返回集合长度
    size : function(collection){
        if(typeof collection === "String") {
            return collection.length
        } else {
            return Object.keys(collection).length
        }
    },

    /**
     * 使函数可以以数组的形式传递参数
     */
    spread : function(func){
        return function(ary) {
            return func(...ary)
            // return func.apply(null, ary)
        }
    },
    // 比较两者的值是否相等（浅比较）
    eq : function(value, other){
        if(isNaN(value) && isNaN(other)) {
            return true
        } else {
            return value === other
        }
    },

    // 比较a是否大于b
    gt : function(value, other){
        return value > other
    },

    // 比较a是否大于等于b
    gte : function(value, other){
        return value >= other
    },

    // 比较a是否小于b
    lt : function(value, other){
        return value < other
    },
    // 比较a是否小于等于b
    lte : function(value, other){
        return value <= other
    },
    //两数相加
    add : function(augend, addend){
        return augend + addend
    },
    // 向上取精度
    ceil : function(number, precision = 0){
        if(precision === 0) {
            return Math.ceil(number)
        } else {
            return Math.ceil(number * 10 ** precision) / (10 ** precision)
        }
    },

    // 两个数相除
    divide : function(dividend, divisor){
        if(divisor === 0) {
            if(dividend > 0) {
                return Infinity
            } else if(dividend < 0) {
                return -Infinity
            } else {
                return NaN
            }
        } else {
            return dividend / divisor
        }
    },
    // 向下取精度
    floor : function(number, precision = 0){
        if(precision === 0) {
            return Math.floor(number)
        } else {
            return Math.floor(number * 10 ** precision) / (10 ** precision)
        }
    },

    // 返回数组最大值
    max : function(array){
        if(!array.length) {
            return undefined
        }
        return Math.max(...array)
    },
    // 计算array的平均值
    mean : function(array){
        return array.reduce((sum, item) => sum + item, 0) / array.length
    },

    // 返回数组最小值
    min : function(array){
        if(!array.length) {
            return undefined
        }
        return Math.min(...array)
    },


    // 两数相乘
    multiply : function(multiplier, multiplicand){
        return multiplier * multiplicand
    },

    // 四舍五入取精度
    round : function(number, precision = 0){
        if(precision === 0) {
            return Math.round(number)
        } else {
            return Math.round(number * 10 ** precision) / (10 ** precision)
        }
    },

    // 两数相减
    substract : function(minuend, subtrahend){
        return minuend - subtrahend
    },
    // 计算数组之和
    sum : function(array){
        return array.reduce((sum, item) => sum + item, 0)
    },

    //创建一个数组，值来自 object 的paths路径相应的值。
    at : function(object,paths){
        return paths.map(object[eval(paths)])
    },


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

