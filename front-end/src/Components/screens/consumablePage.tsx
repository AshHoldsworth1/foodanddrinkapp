import "../../css/consumablePage.css";
import { useParams } from "react-router-dom";
import { IConsumable } from "../../@Types/IConsumables";
import { Key, useEffect, useState } from "react";
import { ApiClient } from "../../api/ApiClient";
import { Global } from "../../global";
import { IFocusedTab } from "../../@Types/IFocusedTab";
import { ConsumableSubSection } from "../common/consumableSubSection";

export const ConsumablePage = () => {
  const { consumableId } = useParams();
  const [consumable, setConsumable] = useState<IConsumable>();
  const [ingredientsTab, setIngredientsTab] = useState<Boolean>(true);
  const focusedTab: IFocusedTab = {
    backgroundColor: "#123456",
    color: "#ffffff",
  };
  const unfocusedTab: IFocusedTab = {
    backgroundColor: "#ffffff",
    color: "#123456",
  };

  const apiClient = new ApiClient(Global.context.urlPath);

  useEffect(() => {
    apiClient
      .get(`consumable/food/item/${consumableId}`)
      .then((response: any) => {
        setConsumable(JSON.parse(response));
      });
  },[]);

  let stars: any = [];
  if (consumable) {
    for (let i: number = 0; i < consumable.rating; i++) {
      stars.push(i);
    }
  }

  const handleTabs = () => {
    setIngredientsTab(!ingredientsTab)
  }

  return consumable ? <>
    <div className="grid" id="consumable-page">
      <div id="header"><h1>{consumable.name}</h1></div>
      <div id="image"></div>
      <div id="rating">
        {stars.map((star: Key | null | undefined) => (
          <img
            src={require("../../Assets/images/star.png")}
            alt="search"
            id="star"
            key={star}
          />
        ))}
      </div>
      <div id="information">
        <p>Difficulty: {consumable.difficulty === 1
              ? "Easy"
              : consumable.difficulty == 2
              ? "Medium"
              : "Slow"}</p>
        <p>Cost: {consumable.cost === 1 ? "£" : consumable.cost == 2 ? "££" : "£££"}</p>
        <p>Speed: {consumable.speed === 1
              ? "Quick"
              : consumable.speed == 2
              ? "Medium"
              : "Slow"}</p>
      </div>
      <div id="tabs">
        <div className="tab" id="ingredients-tab" onClick={handleTabs} style={ingredientsTab ? focusedTab : unfocusedTab}>
          <p>Ingredients</p>
        </div>
        <div className="tab" id="instructions-tab" onClick={handleTabs} style={!ingredientsTab ? focusedTab : unfocusedTab}>
          <p>Instructions</p>
        </div>
      </div>
      {ingredientsTab && <ConsumableSubSection data={consumable.ingredients} />}
      {!ingredientsTab && <ConsumableSubSection data={"instructions"} />}
    </div>
  </> : null;
};
