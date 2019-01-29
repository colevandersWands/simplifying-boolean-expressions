# Simplifying Boolean Expressions

you'll be given a starting expression and an ending expression, it's your task to find out how to get from one to the next using the laws of [boolean algebra](https://janke-learning.github.io/boolean-algebra).

for each step, you'll fill in one of these templates. all you need to change is filling in the name of the law you used, and the new expression you've derived:
```js
{ console.log('\n name of law');
const exp = (a,b,c) =>  /* next expression */;
test_exp(exp, exp_cases);  }
```
all of these exercises can be completed in no more than 5 steps, but feel free to play practice applying a law that challenges you even if it takes a little longer

you might find [this site](https://www.dcode.fr/boolean-expressions-calculator) helpful, it'll be useful for checking your work but it won't solve the steps for you.

don't forget to copy the [helper functions](#helper-functions) into the console before you begin!

### Index
* [example](#example)
* [exercise 1](#exercise-1)
* [exercise 2](#exercise-2)
* [exercise 3](#exercise-3)
* [exercise 4](#exercise-4)
* [exercise 5](#exercise-5)
* [exercise 6](#exercise-6)
* [helper functions](#helper-functions)
    * [gen cases from exp](#gen-cases-from-exp)
    * [test exp](#test-exp)
    * [truth-table](#truth-table)
    * [run tests](#run-tests)


---

## Example

steps:
```js
console.log(' start');
const exp = (a,b,c) =>      false && !(a || (!b && !c)) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);

{ console.log('\n demorgans');
const exp = (a,b,c) =>      !(true || (a || (!b && !c))) ;
test_exp(exp, exp_cases);  }

{ console.log('\n demorgans');
const exp = (a,b,c) =>      !(true || (a || (!b && !c))) ;
test_exp(exp, exp_cases);  }

{ console.log('\n anihilation');
const exp = (a,b,c) =>      !(true) ;
test_exp(exp, exp_cases);  }

{ console.log('\n end');
const exp = (a,b,c) =>      false ;
test_exp(exp, exp_cases);  }
```

[TOP](#simplifying-boolean-expressions)

---

## Exercise 1

```js
console.log(' start');
const exp = (a,b,c) =>      false && !a && !(!b && !c) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);

{ console.log('\n name of law');
const exp = (a,b,c) =>  /* next expression */;
test_exp(exp, exp_cases);  }

{ console.log('\n end');
const exp = (a,b,c) =>      !(true) ;
test_exp(exp, exp_cases);  }

```


[TOP](#simplifying-boolean-expressions)

---

## Exercise 2

```js
console.log(' start');
const exp = (a,b,c) =>      !(a || !c) && (!c && (b || c)) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);

{ console.log('\n name of law');
const exp = (a,b,c) =>  /* next expression */;
test_exp(exp, exp_cases);  }

{ console.log('\n end');
const exp = (a,b,c) =>      !a && (c && (!c && (b || c))) ;
test_exp(exp, exp_cases);  }
```

[TOP](#simplifying-boolean-expressions)

---

## Exercise 3

```js
console.log(' start');
const exp = (a,b,c) =>      (a && b) || (a && c) || (b && !c) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);

{ console.log('\n name of law');
const exp = (a,b,c) =>  /* next expression */;
test_exp(exp, exp_cases);  }

{ console.log('\n end');
const exp = (a,b,c) =>      (a && c) || (b && !c) ;
test_exp(exp, exp_cases);  }
```

[TOP](#simplifying-boolean-expressions)

---

## Exercise 4

```js
console.log(' start');
const exp = (a,b,c) =>      !a && (false && (b || c)) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);

{ console.log('\n name of law');
const exp = (a,b,c) =>  /* next expression */;
test_exp(exp, exp_cases);  }

{ console.log('\n end');
const exp = (a,b,c) =>      false && !a && !(!b && !c) ;
test_exp(exp, exp_cases);  }
```

[TOP](#simplifying-boolean-expressions)

---

## Exercise 5

```js
console.log(' start');
const exp = (a,b,c) =>      !a && (false && (b || c)) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);

{ console.log('\n name of law');
const exp = (a,b,c) =>  /* next expression */;
test_exp(exp, exp_cases);  }

{ console.log('\n end');
const exp = (a,b,c) =>      false && !a && !(!b && !c) ;
test_exp(exp, exp_cases);  }
```

[TOP](#simplifying-boolean-expressions)

---

## Exercise 6 

(challenge)

```js
console.log(' start');
const exp = (a,b,c) =>      !a && (true && (b || c)) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);

{ console.log('\n name of law');
const exp = (a,b,c) =>  /* next expression */;
test_exp(exp, exp_cases);  }

{ console.log('\n end');
const exp = (a,b,c) =>      ( !a && b) || ( !a && c) ;
test_exp(exp, exp_cases);  }
```


[TOP](#simplifying-boolean-expressions)

---

## Helper Functions

[gen cases from exp](#gen-cases-from-exp)
[test exp](#test-exp)
[truth-table](#truth-table)
[run tests](#run-tests)

#### Gen cases from exp

takes in a boolean function and returns a complete set of test cases. ie, {name, args, expected} for every possible combination of trues and falses
```js
function gen_cases_from_exp(f) {

  const num_args = f.length;

  // generate an array of all binary strings of size num_args
  const all_binary_strings = [];
  const max_binary = parseInt("1".repeat(num_args),2);
  for(let n = 0; n <= max_binary; n++){
    const bin_str = n.toString(2);
    const padded_str = bin_str.padStart(num_args,'0');
    all_binary_strings.push(padded_str);
  }

  // map each binary string to an array of booleans
  const to_boolean = (x) => Boolean(Number(x));
  const to_arr_o_bools = (str) => { return str.split('').map(to_boolean) };
  const arr_o_cases = all_binary_strings.map(to_arr_o_bools);

  
  // build a test_cases object around each array of booleans
  const cases = [];
  for (let args of arr_o_cases) {
    const _case = {};
    _case.name = String(args);
    _case.args = args;
    _case.expected = f(...args);
    cases.push(_case);
  };

  return cases

};
```

#### test exp

takes in an expression and it's test cases
* if all pass, it simply prints the expression
* if one fails, it will print the truth table and run the expression against it's tests
```js
function test_exp(_target, _cases) {
  let invalid = false;
  for (let t_case of _cases) {
    const expected = t_case.expected;
    const actual = _target(...t_case.args);

    const pass = actual === expected;

    if (!pass) {
      invalid = true;
      break;
    };
  };

  if (invalid) {
    const report = {};
    for (let t_case of _cases) {
      report[t_case.name] = _target(...t_case.args);
    };
    console.groupCollapsed(`%c${_target.toString()}`, 'color:orange');
    console.table(report);
    run_tests(_target, _cases);
    console.groupEnd();
  } else {
    console.log(`${_target.toString()}`);
  };
};
```

#### truth table

takes in either a set of test cases, or test cases and a boolean expression
* if it gets just the test cases, it prints a truth table of them
* if it also gets an expression, it will also run the tests against the expression and print out any failing test cases
```js
function truth_table(_cases, _exp) {
  const report = {}
  if (_exp) {
    for (let t_case of _cases) {
      report[t_case.name] = _exp(...t_case.args);
    };
  } else {
    for (let t_case of _cases) {
      report[t_case.name] = t_case.expected;
    };
  }
  console.groupCollapsed('truth table: ');
  console.table(report);
  if(_exp) run_tests(_expression, _cases);
  console.groupEnd();
};
```

#### run tests

the regular run_tests function 
```js
function run_tests(_target, _cases) {
  for (let t_case of _cases) {

    // process user input (test cases)
    const expected = t_case.expected;
    const args = JSON.parse(JSON.stringify(t_case.args));
    
    // perform core logic (run test and assert)
    let actual = _target(...args);
    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else if ( typeof expected === 'number' && isNaN(expected) ) {
      pass = isNaN(actual) && typeof actual === 'number';
    } else {
      pass = actual === expected;
    };

    // communicate result to developer
    if (!pass) {
      console.groupCollapsed(`%c ${t_case.name}: \n`, 'color:orange');
      console.log(`%c   actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c   expected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    };
  };
};
```

[TOP](#simplifying-boolean-expressions)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
