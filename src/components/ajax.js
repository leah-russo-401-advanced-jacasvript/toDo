import axios from 'axios';

function ajax(callback) {

    function get(http) {
      axios.get('http://localhost:5050/api/v1/todo')
      .then(response => {
        let obj = {};
        console.log(response.data)
        for (let element of response.data) {
          obj.text = element.todoitem;
          obj.diffuculty = element.difficulty;
          obj.assigned = element.assigned;
          obj.complete = element.complete;
        }
        console.log(obj);
        return obj;
      })
    }
    return [
      get
    ]
}

export default ajax;