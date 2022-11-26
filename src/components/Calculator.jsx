import React, { useState } from 'react'

const Calculator = () => {

    const [data] = useState(
        {
            operation: [],
            formula: []
        }
    )


    const [radian, setRadian] = useState(true);
    const [degree, setDegree] = useState(false);
    const [output, setOutput] = useState('');
    const [result, setResult] = useState(0)

    //SOME VARIABLES
    const operators = ['+', '-', '*', '/'];
    const POWER = 'POWER(';
    const FACTORIAL = 'FACTORIAL';

    const calButtons = [
        {
            name : "rad",
            symbol : "Rad",
            formula : false,
            type : "key"
        },
        {
            name : "deg",
            symbol : "Deg",
            formula : false,
            type : "key"
        },
        {
            name : "square-root",
            symbol : "√",
            formula : "Math.sqrt",
            type : "math_function"
        },
        {
            name : "square",
            symbol : "x²",
            formula : POWER,
            type : "math_function"
        },
        {
            name : "open-parenthesis",
            symbol : "(",
            formula : "(",
            type : "number"
        },
        {
            name : "close-parenthesis",
            symbol : ")",
            formula : ")",
            type : "number"
        },
        {
            name : "clear",
            symbol : "C",
            formula : false,
            type : "key"
        },
        {
            name : "delete",
            symbol : "⌫",
            formula : false,
            type : "key"
        },
        {
            name : "pi",
            symbol : "π",
            formula : "Math.PI",
            type : "number"
        },
        {
            name : "cos",
            symbol : "cos",
            formula : "trigo(Math.cos,",
            type : "trigo_function"
        },{
            name : "sin",
            symbol : "sin",
            formula : "trigo(Math.sin,",
            type : "trigo_function"
        },{
            name : "tan",
            symbol : "tan",
            formula : "trigo(Math.tan,",
            type : "trigo_function"
        },{
            name : "7",
            symbol : 7,
            formula : 7,
            type : "number"
        },{
            name : "8",
            symbol : 8,
            formula : 8,
            type : "number"
        },{
            name : "9",
            symbol : 9,
            formula : 9,
            type : "number"
        },
        {
            name : "division",
            symbol : "÷",
            formula : "/",
            type : "operator"
        },
        {
            name : "e",
            symbol : "e",
            formula : "Math.E",
            type : "number"
        },
        {
            name : "acos",
            symbol : "acos",
            formula : "inv_trigo(Math.acos,",
            type : "trigo_function"
        },{
            name : "asin",
            symbol : "asin",
            formula : "inv_trigo(Math.asin,",
            type : "trigo_function"
        },{
            name : "atan",
            symbol : "atan",
            formula : "inv_trigo(Math.atan,",
            type : "trigo_function"
        },
        {
            name : "4",
            symbol : 4,
            formula : 4,
            type : "number"
        },{
            name : "5",
            symbol : 5,
            formula : 5,
            type : "number"
        },{
            name : "6",
            symbol : 6,
            formula : 6,
            type : "number"
        },{
            name : "multiplication",
            symbol : "×",
            formula : "*",
            type : "operator"
        },{
            name : "factorial",
            symbol : "×!",
            formula : FACTORIAL,
            type : "math_function"
        },{
            name : "exp",
            symbol : "exp",
            formula : "Math.exp",
            type : "math_function"
        },{
            name : "ln",
            symbol : "ln",
            formula : "Math.log",
            type : "math_function"
        },{
            name : "log",
            symbol : "log",
            formula : "Math.log10",
            type : "math_function"
        },{
            name : "1",
            symbol : 1,
            formula : 1,
            type : "number"
        },{
            name : "2",
            symbol : 2,
            formula : 2,
            type : "number"
        },{
            name : "3",
            symbol : 3,
            formula : 3,
            type : "number"
        },{
            name : "subtraction",
            symbol : "–",
            formula : "-",
            type : "operator"
        },{
            name : "power",
            symbol : "x<span>y</span>",
            formula : POWER,
            type : "math_function"
        },{
            name : "percent",
            symbol : "%",
            formula : "/100",
            type : "number"
        },{
            name : "comma",
            symbol : ".",
            formula : ".",
            type : "number"
        },{
            name : "0",
            symbol : 0,
            formula : 0,
            type : "number"
        },{
            name : "calculate",
            symbol : "=",
            formula : "=",
            type : "calculate"
        },{
            name : "addition",
            symbol : "+",
            formula : "+",
            type : "operator"
        }
    ];


    //CLICK EVENT LISTENER
    const clickBtnHandler = (e) => {
        const Id = e.target.id
        calButtons.forEach(button => {
            if (button.name === Id) calculator(button)
        })
    }

    const calculator = (button) => {
        if (button.type === 'operator') {
            data.operation.push(button.symbol)
            data.formula.push(button.formula)

        } else if (button.type === 'number') {
            data.operation.push(button.symbol)
            data.formula.push(button.formula)

        } else if (button.type === 'trigo_function') {
            data.operation.push(button.symbol + '(');
            data.formula.push(button.formula)

        } else if (button.type === 'math_function') {
            let symbol; let formula;
            if (button.name === 'factorial') {
                symbol = '!';
                formula = button.formula;

                data.operation.push(symbol);
                data.formula.push(formula)
            } else if (button.name === 'power') {
                symbol = '^(';
                formula = button.formula;

                data.operation.push(symbol);
                data.formula.push(formula)
            } else if (button.name === 'square') {
                symbol = '^(';
                formula = button.formula;

                data.operation.push(symbol);
                data.formula.push(formula);
                data.operation.push('2)');
                data.formula.push('2)');
            } else {
                symbol = button.symbol + '(';
                formula = button.formula + '(';

                data.operation.push(symbol);
                data.formula.push(formula)
            }

        } else if (button.type === 'key') {
            if (button.name === 'clear') {
                data.operation = [];
                data.formula = [];
                setResult(0);
            } else if (button.name === 'delete') {
                data.operation.pop();
                data.formula.pop();
            } else if (button.name === 'rad') {
                setRadian(true)
                setDegree(false)
            } else if (button.name === 'deg') {
                setRadian(false)
                setDegree(true)
            }
        } else if (button.type === 'calculate') {
            let formulaString = data.formula.join('');

            //Fix power and factorial issue
            /* Search for factorial and power function*/
            let powerSearchResult = search(data.formula, POWER);
            let factorialSearchResult = search(data.formula, FACTORIAL);

            //Get power base and replace with the right formula
            const base = powerBaseGetter(data.formula, powerSearchResult)
            base.forEach(base => {
                let toReplace = base + POWER;
                let replacement = 'Math.pow(' + base + ',';

                formulaString = formulaString.replace(toReplace, replacement)
            })

            //Get factorial number and replace with the right formula
            const numbers = factorialNumberGetter(data.formula, factorialSearchResult)
            numbers.forEach( factorial => {
                formulaString = formulaString.replace(factorial.toReplace, factorial.replacement)
            })


            //Calculate
            let result;
            try {
                result = eval(formulaString);
            } catch (error) {
                if (error instanceof SyntaxError) {
                    result = 'Syntax Error!'
                    setResult(result);
                    return;
                }
            }

            setResult(result)
            return;
        }

        setOutput(data.operation.join(''))
    }
    console.log(data.operation);
    console.log(data.formula.join(''));


    //Power base getter
    const powerBaseGetter = (formula, powerSearchResult) => {
        let powerBases = []; //save all the base in the same array

        powerSearchResult.forEach(powerIndex => {
            let base = []; //current base

            
            let previousIndex  = powerIndex - 1;
            let parentheseCount = 0;

            while (previousIndex >= 0) {
                
                if(formula[previousIndex] === '(') parentheseCount --;
                if(formula[previousIndex] === ')') parentheseCount ++;

                let isOperator = false;

                operators.forEach(operator => {
                    if(formula[previousIndex] === operator) isOperator = true;
                })

                let isPower = formula[previousIndex] === POWER;

                if((isOperator && parentheseCount === 0) || isPower) break;

                base.unshift(formula[previousIndex]);
                previousIndex --;
            }
            powerBases.push(base.join(''))
        })

        return powerBases;
    }

    //Factorial number getter
    const factorialNumberGetter = (formula, factorialSearchResult) => {
        let numbers = [] //save all the numbers
        let factorialSequence = 0;
        factorialSearchResult.forEach( index => {
            let number = []; //current factorial number
            let nextIndex = index + 1;
            let nextInput = formula[nextIndex];
            if (nextInput === FACTORIAL) {
                factorialSequence += 1;
                return;
            }

            //If there was a factorial sequence, we need to get the index of very first factorial function
            let firstFactorialIndex = index - factorialSequence;

            //then to get the number right before it

            let previousIndex = firstFactorialIndex - 1;
            let parentheseCount = 0;

            while (previousIndex >= 0) {
                
                if(formula[previousIndex] === '(') parentheseCount --;
                if(formula[previousIndex] === ')') parentheseCount ++;

                let isOperator = false;

                operators.forEach(operator => {
                    if(formula[previousIndex] === operator) isOperator = true;
                })


                if(isOperator && parentheseCount === 0) break;

                number.unshift(formula[previousIndex]);
                previousIndex --;
            }

            let numberString = number.join('');
            const factorial = 'factorial(', closeParenthesis = ')'

            let times = factorialSequence + 1;
            let toReplace = numberString + FACTORIAL.repeat(times);
            let replacement = factorial.repeat(times) + numberString + closeParenthesis.repeat(times)

            numbers.push({
                toReplace: toReplace,
                replacement: replacement
            })

            //Reset factorial sequence
            factorialSequence = 0;

        })

        return numbers;
    }

    // Search an array
    const search = (array, keyword) => {
        let searchResult = [];

        array.forEach( (element, index) => {
            if (element === keyword) {
                searchResult.push(index)
            }
        })

        return searchResult ;
    }


    
    //FACTORIAL FUNCTION
    function factorial(n) {
        if (n % 1 !== 0) return gamma(n + 1)
        if (n === 0 || n === 1) return 1;
        let answer = 1;
        for (let i = 1; i <= n; i++) {
            answer *= i;
            if (answer === Infinity) return Infinity;
        }
        console.log(answer);
        return answer;
    }



    //TRIGONOMETRIC FUNCTION
    function trigo(callback, angle) {
        if (!radian) {
            angle = angle * Math.PI / 180;
        }
        return callback(angle);
    }

    function inv_trigo(callback, value) {
        let angle = callback(value)
        if (!radian) {
            angle = angle * 180 / Math.PI;
        }
        return angle;
    }

    // GAMMA FUNCTINON
    function gamma(n) {  // accurate to about 15 decimal places
        //some magic constants 
        var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
            p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
        if (n < 0.5) {
            return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
        }
        else {
            n--;
            var x = p[0];
            for (var i = 1; i < g + 2; i++) {
                x += p[i] / (n + i);
            }
            var t = n + g + 0.5;
            return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
        }
    }
    return (
        <div className="calculator">
            <div className="calc-container">
                <div className="output">
                    <div className="operation">
                        <div className="value">{output}</div>
                    </div>
                    <div className="result">
                        <div className="value">{result}</div>
                    </div>
                </div>
                <div className="input">
                    {calButtons.map((item, i) => {
                        return <button key={i} id={item.name} className={item.name === 'delete' ? 'delete' : item.name === 'calculate' ? 'calculate' : item.name === 'subtraction' ? 'subtraction' : item.name === 'multiplication' ? 'multiplication' : item.name === 'division' ? 'division' : item.name === 'addition' ? 'addition' : item.name === 'rad' && radian ? 'active-angle' : item.name === 'deg' && degree ? 'active-angle' : ''} onClick={clickBtnHandler} dangerouslySetInnerHTML={{ __html: item.symbol }}></button>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calculator