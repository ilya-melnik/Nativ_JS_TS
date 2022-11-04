import {mult, splitIntoWord, sum, Touppercase} from "./01";
// если какойто тест изменит глобальную переменую, тогда следующий тест не выполнится,
// во избежжание нужно напистаь функцию, которая после выполнения теста, обновляет
// данные к изначальным
let a: number
let b: number
let c: number
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    // data (подготовительные данные) (ВНЕСЕННА В ГЛОБАЛЬНУЮ ОБЛАСТЬ ВИД)


    // action  (действие)
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expected (ожидаемый результат)
    expect(result1).toBe(3)
    expect(result2).toBe(4)
})

test('multiply should correct', () => {
    const a = 3;
    const b = 5;
    const c = 100;

    const result = mult(b, c)

    expect(result).toBe(500)
})


test('splitting into should be correct', () => {
    const sent1 = "Hello my friend!";
    const sent2 = "JS - the best programing language";

    const res1 = splitIntoWord(sent1)
    const res2 = splitIntoWord(sent2)

    expect(res1.length).toBe(3)
    expect(res1[0]).toBe("Hello")
    expect(res1[1]).toBe("my")
    expect(res1[2]).toBe("friend")

    expect(res2.length).toBe(5)
    expect(res2[0]).toBe("JS")
    expect(res2[1]).toBe("the")
    expect(res2[2]).toBe("best")
    expect(res2[3]).toBe("programing")
    expect(res2[4]).toBe("language")
})

//-----------------------------------------------------------------------------------
test('function should be correct ', () => {

    const value = {value: 'Hello world'}

    const sentenc1 = Touppercase(value)
    console.log(sentenc1)
    //expect(sentenc1.length).toBe(12)
    expect(sentenc1).toBe('HOW aRE YOU ?')

})

