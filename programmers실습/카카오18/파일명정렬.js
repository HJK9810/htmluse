function solution(files) {
  let answer = [];
  let head = [];
  let num = [];
  files.map(el => {
    const idx1 = el.search(/[0-9]/g);
    const idx2 = el.slice(idx1).search(/[^0-9]/g);
    head.push(el.substring(0, idx1));
    num.push(el.substring(idx1, idx1 + idx2));
  })

  console.log(`head: [${head}]\n num: [${num}]`)
  return answer;
}

let ary1 = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
let ary2 = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
console.log(solution(ary1))
console.log(solution(ary2))

// let so1 = ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
// let sol2 = ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
// console.log(solution(JSON.stringify(solution(ary1)) == JSON.stringify(sol1)))
// console.log(solution(JSON.stringify(solution(ary2)) == JSON.stringify(sol2)))