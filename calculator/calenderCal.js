
let date = new Date();

const beforeDate = () => {
    const set = document.getElementById("setDate before");
    const num = document.getElementById("beforeDate");

    const nowdate = new Date(set);
    document.getElementById("date").vlaue = nowdate.setDate(set.getDate() - num);
}