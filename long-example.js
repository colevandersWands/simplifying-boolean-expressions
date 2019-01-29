{ console.log('%cExample 1', 'font-weight:bold');

console.log(' original expression');
const exp = (a,b,c) =>      !(a || !c) && (!c && (b || c)) ;
const exp_cases = gen_cases_from_exp(exp);
console.log(exp);
truth_table(exp_cases);


{ console.log('\n de morgans left');
const exp = (a,b,c) =>      (!a && c) && (!c && (b || c)) ;
test_exp(exp, exp_cases);  }


{ console.log('\n associativity');
const exp = (a,b,c) =>      !a && (c && (!c && (b || c))) ;
test_exp(exp, exp_cases);  }


{ console.log('\n associativity');
const exp = (a,b,c) =>      !a && ((c && !c) && (b || c)) ;
test_exp(exp, exp_cases);  }


{ console.log('\n anihilation');
const exp = (a,b,c) =>      !a && (false && (b || c)) ;
test_exp(exp, exp_cases);  }


{ console.log('\n commutativity');
const exp = (a,b,c) =>      false && !a && (b || c) ;
test_exp(exp, exp_cases);  }


{ console.log('\n demorgans');
const exp = (a,b,c) =>      false && !a && !(!b && !c) ;
test_exp(exp, exp_cases);  }


{ console.log('\n demorgans');
const exp = (a,b,c) =>      false && !(a || (!b && !c)) ;
test_exp(exp, exp_cases);  }


{ console.log('\n demorgans');
const exp = (a,b,c) =>      !(true || (a || (!b && !c))) ;
test_exp(exp, exp_cases);  }


{ console.log('\n demorgans');
const exp = (a,b,c) =>      !(true || (a || (!b && !c))) ;
test_exp(exp, exp_cases);  }



{ console.log('\n anihilation');
const exp = (a,b,c) =>      !(true) ;
test_exp(exp, exp_cases);  }




{ console.log('\n negation');
const exp = (a,b,c) =>      false ;
test_exp(exp, exp_cases);  }









// ---------- test utils ----------

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
      console.groupEnd();
    } else {
      console.log(`${_target.toString()}`);
    };
  };

  function truth_table(_cases, _expression) {
    const report = {}
    if (_expression) {
      for (let t_case of _cases) {
        report[t_case.name] = _expression(...t_case.args);
      };
    } else {
      for (let t_case of _cases) {
        report[t_case.name] = t_case.expected;
      };
    }
    console.groupCollapsed('truth table: ');
    console.table(report);
    console.groupEnd();
  };

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

null;
}
