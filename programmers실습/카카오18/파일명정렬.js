function solution(files) {
  return files.sort((a, b) => {
    const headA = a.match(/^\D+/)[0].toLowerCase();
    const headB = b.match(/^\D+/)[0].toLowerCase();
    if (headA > headB) return 1;
    if (headA < headB) return -1;

    const numA = a.match(/\d+/)[0].slice(0, 5).replace(/^0+/, '');
    const numB = b.match(/\d+/)[0].slice(0, 5).replace(/^0+/, '');
    return numA - numB
  });
}

let ary1 = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
let ary2 = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
// console.log(solution(ary1))
// console.log(solution(ary2))

let sol1 = ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
let sol2 = ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
console.log(solution(JSON.stringify(solution(ary1)) == JSON.stringify(sol1)))
console.log(solution(JSON.stringify(solution(ary2)) == JSON.stringify(sol2)))