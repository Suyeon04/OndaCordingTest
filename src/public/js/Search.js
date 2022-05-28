const topic = document.querySelector("#topic");

import axios from 'axios';

function search(){
    const req = {
        topic : topic.value
    }
    fetch("/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(res.body);
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("지원신청 중 에러 발생");
    });
};



  