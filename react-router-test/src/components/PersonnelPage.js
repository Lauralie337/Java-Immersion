import React, {Component} from 'react';
import "../index.css";
// Personnel component

class PersonnelPage extends Component {
    render(){
      return(
        <div>
          <h1>Kitchen personnel</h1>
                <h3>Catatouille the fat tabby chef</h3>
                <img className = "personnel" alt="Catatouille taking a nap" src="https://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg" />
                <h3>Jacques the soux chef</h3>
                <img className = "personnel" alt="Jacques being Jacques" src="https://i.pinimg.com/originals/24/cd/45/24cd454636aae9475ed9b474b835e814.jpg" />
                <h3>Cara the kitchen manager</h3>
                <img className = "personnel" alt="Cara at work" src="https://www.thesprucepets.com/thmb/sEg45E2tjy8xJF7CfL7bIneaNig=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/black-cat-on-counter-with-milk-and-cereal-98843397-57d98fe83df78c9cce8d8155.jpg" />
        </div>
      );
    }
  }

  export default PersonnelPage;