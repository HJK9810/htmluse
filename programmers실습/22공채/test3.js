function solution(fees, records) {
  let feelist = {};
  let carnum = {};

  for (let i = 0; i < records.length; i++) {
    const [time, number] = records[i].split(' ');
    feelist[number] += (' ' + time);
  }

  for (let key in feelist) {
    let ary = feelist[key].split(' ');
    ary.shift();

    let fultime = 0;

    for (let i = 0; i < ary.length; i++) {
      const [hour, min] = ary[i].split(':');

      if (i == (ary.length - 1) && i % 2 === 0) fultime += (((23 - hour) * 60) + (59 - min));
      else {
        if (i % 2 == 0) {
          const [ohour, omin] = ary[i + 1].split(':');

          if (omin < min) fultime += ((((ohour - 1) - hour) * 60) + ((60 + Number(omin)) - Number(min)));
          else fultime += (((ohour - hour) * 60) + (omin - min));
        }
      }
    }

    let eachfee = 0;
    if (fultime <= fees[0]) eachfee = fees[1];
    else {
      let settime = fultime - fees[0];
      eachfee = fees[1] + Math.ceil(settime / fees[2]) * fees[3];
    }

    carnum[key] = eachfee;
  }

  return Object.keys(carnum).sort((a, b) => a - b).map(key => carnum[key]);
}

let fe1 = [180, 5000, 10, 600]
let rec1 = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
let fe2 = [120, 0, 60, 591]
let rec2 = ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]
let fe3 = [1, 461, 1, 10]
let rec3 = ["00:00 1234 IN"]
console.log(solution(fe1, rec1))
console.log(solution(fe2, rec2))
console.log(solution(fe3, rec3))

// [14600, 34400, 5000] [0, 591] [14841]