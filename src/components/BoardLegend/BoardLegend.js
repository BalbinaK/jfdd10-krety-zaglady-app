import React, { Component } from "react";
import "./BoardLegend.css";

class BoardLegend extends Component {
  render() {
    return (
      <>
        {/* <div className="BoardLegend">
          <div className="BordLegendFruit">
            <div className="FruitIcon Carrot"> </div>
            <div className="FruitName Carrot" />
          </div>
          <div className="BordLegendFruit">
            <div className="FruitIcon AppleIcon" />
            <div className="FruitName Apple" />
          </div>
          <div className="BordLegendFruit">
            <div className="FruitIcon Orange" />
            <div className="FruitName Orange" />
          </div>
        </div> */}

        <div className="FruitLegendBox" BoardLegend-fruitIcon>
          <div className="BoardLegend-fruitIcon">
            {Object.entries(this.props.fruits)
              .map(([key, value]) => {
                return { key, value };
              })
              .map(fruit => {
                return (
                  <div>
                  <div className={fruit.key}>
                  </div>
                    <span className="SpanName">{fruit.value}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default BoardLegend;