import { useState } from "react";
import Chart from "react-google-charts";


const StudentHome = () => {
    const [cardData,setCardData]=useState([
        {
        title:"Notes",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Notes",
        image:"",
    },
    {
        title:"Certificates",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Certificates",
        image:"",
    },
    {
        title:"Personal Details",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Profile",
        image:"",
    },
    {
        title:"Academic performance",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Performance",
        image:"",
    },
    {
        title:"Self Learning",
        desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        link:"/Feature/Selflearn",
        image:"",
    },
]);
    return (
        <div className="home">

            <section>
            <h1>performance graph</h1>
            <Chart
                chartType="ScatterChart"
                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                width="100%"
                height="400px"
                legendToggle
                />
            </section>
            <section>
            <h1>cards</h1>
            <div className="row">
            { cardData.map((card)=>{
                return(    
            <div className="card col-4 mx-auto mb-3" style={{width: "18rem"}}>
            <img src={card.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{card.title}</h6>
                <p className="card-text">{card.desc}</p>
                <a href={card.link} className="mx-auto"><button className="btn btn-primary">Go</button></a>
            </div>
            </div>
            );
            })    
        }
        </div>
            </section>
            <section>
            <h1>time table</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </section>
        </div>
    )
}
export default StudentHome;