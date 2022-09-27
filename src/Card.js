import React from "react";

function Card(props) {
  // /props:[
  //   {
  //     cardData:{
  //       plan:"free"
  //     }
  //   }
  // ]/ this is {props.dataCard.plan}
  return (
    <div class="card mb-4 box-shadow">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">{props.dataCard.plan}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">
          ${props.dataCard.price} <small class="text-muted">/ mo</small>
        </h1>
        <ul class="list-unstyled mt-3 mb-4">
          {props.dataCard.features.map((va) => {
            return <li>{va.title}</li>;
          })}
          {/* example */}
          {/* <li>{props.dataCard.features[0].title}</li>
          <li>{props.dataCard.features[1].title}</li>
          <li>{props.dataCard.features[2].title}</li>
          <li>{props.dataCard.features[3].title}</li> */}
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">
          {props.dataCard.button}
        </button>
      </div>
    </div>
  );
}

export default Card;
